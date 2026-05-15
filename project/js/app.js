/**
 * Focus: after each full render(), #view-title (h1, tabindex=-1) receives focus when present.
 * Quiz progression: Task 02 option A — "Next" stays disabled until an option is selected (see tasks/README.md).
 * State "explore" = artwork grid for the chosen topic; selectedSeries holds a medium id (series = medium in UX copy).
 */
import {
  seriesOptions,
  topicsBySeries,
  seriesArtists,
  getActiveQuizQuestions,
  newEmptyAnswers,
} from "./data.js";

const app = document.getElementById("app");

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** UI-only session flow strip (Task 13). activeStep: 1 Explore, 2 Quiz, 3 Result. */
function flowStepIndicator(activeStep) {
  const steps = [
    { n: 1, label: "Explore" },
    { n: 2, label: "Quiz" },
    { n: 3, label: "Result" },
  ];
  const sep =
    '<span class="flow-step-sep" aria-hidden="true">·</span>';
  const body = steps
    .map((s) => {
      const classes = ["flow-step"];
      let extra = "";
      if (s.n < activeStep) classes.push("flow-step--complete");
      else if (s.n === activeStep) {
        classes.push("flow-step--current");
        extra = ' aria-current="step"';
      } else classes.push("flow-step--upcoming");
      return `<span class="${classes.join(" ")}"${extra}>${escapeHtml(s.label)}</span>`;
    })
    .join(sep);
  return `<div class="flow-stepper" role="group" aria-label="Your progress in this session">${body}</div>`;
}

function artistDisplayName(a) {
  if (!a) return "";
  return a.nameDisplay || a.name;
}

function artistMetaLine(a) {
  return [a.workTitle, a.workYear, a.medium].filter(Boolean).join(" · ");
}

const FAVORITES_STORAGE_KEY = "quizArtistFavorites";
const NOTES_STORAGE_KEY = "quizArtistNotes";
const NOTE_MAX_LENGTH = 160;

function loadFavoriteIds() {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

function saveFavoriteIds(set) {
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify([...set]));
  } catch {
    /* Private mode / quota / disabled storage: UI already updated; skip persistence. */
  }
}

function loadNotes() {
  try {
    const raw = localStorage.getItem(NOTES_STORAGE_KEY);
    const obj = raw ? JSON.parse(raw) : {};
    return obj && typeof obj === "object" && !Array.isArray(obj) ? obj : {};
  } catch {
    return {};
  }
}

function saveNotes(obj) {
  try {
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(obj));
  } catch {
    /* storage disabled / quota: in-memory state already updated; skip persistence. */
  }
}

function getNote(favId) {
  return loadNotes()[favId] || "";
}

function setNote(favId, text) {
  const trimmed = (text || "").slice(0, NOTE_MAX_LENGTH);
  const notes = loadNotes();
  if (trimmed) {
    notes[favId] = trimmed;
  } else {
    delete notes[favId];
  }
  saveNotes(notes);
}

function favoriteEntryId(seriesId, index) {
  return `${seriesId}:${index}`;
}

function parseFavoriteEntryId(id) {
  const i = id.lastIndexOf(":");
  if (i <= 0) return null;
  const seriesId = id.slice(0, i);
  const index = Number(id.slice(i + 1));
  if (!seriesArtists[seriesId] || !Number.isInteger(index)) return null;
  const artist = seriesArtists[seriesId][index];
  if (!artist) return null;
  return { seriesId, index, artist };
}

let state = "landing";
let questionIndex = 0;
let answers = [];
let selectedSeries = null;
let selectedTopic = null;
let exploredCardIds = new Set();
let compareEntryIds = new Set();

const EXHIBITION_TITLE_MAX = 80;
let exhibitionPhase = "pick";
let exhibitionPickIds = new Set();
let exhibitionOrder = [];
let exhibitionTitle = "";

const LOOK_TIMER_DURATION_MS = 20_000;
const lookTimerDeadlines = new Map();
let lookTimerRaf = null;

function ensureLookTimer(favId) {
  if (!lookTimerDeadlines.has(favId)) {
    lookTimerDeadlines.set(favId, Date.now() + LOOK_TIMER_DURATION_MS);
  }
  return lookTimerDeadlines.get(favId);
}

function clearLookTimer(favId) {
  lookTimerDeadlines.delete(favId);
}

function startLookTimerLoop() {
  if (lookTimerRaf) return;
  const tick = () => {
    lookTimerRaf = null;
    let anyActive = false;
    const now = Date.now();
    document.querySelectorAll(".artist-card.is-look-locked").forEach((card) => {
      const favId = card.getAttribute("data-look-fav") || "";
      const deadline = lookTimerDeadlines.get(favId);
      if (!deadline) {
        finishLookTimer(card, favId);
        return;
      }
      const remaining = Math.max(0, deadline - now);
      const seconds = Math.ceil(remaining / 1000);
      const countdownEl = card.querySelector(".look-first-count");
      if (countdownEl && countdownEl.textContent !== String(seconds)) {
        countdownEl.textContent = String(seconds);
        const live = card.querySelector(".look-first-live");
        if (live && (seconds === 10 || seconds === 5 || seconds === 0)) {
          live.textContent =
            seconds === 0
              ? "Ready to reveal—activate the card to see the back."
              : `${seconds} seconds of looking left.`;
        }
      }
      const ringEl = card.querySelector(".look-first-ring");
      if (ringEl) {
        const pct = remaining / LOOK_TIMER_DURATION_MS;
        ringEl.style.setProperty("--ring-progress", pct.toFixed(3));
      }
      if (remaining === 0) {
        finishLookTimer(card, favId);
      } else {
        anyActive = true;
      }
    });
    if (anyActive) lookTimerRaf = requestAnimationFrame(tick);
  };
  lookTimerRaf = requestAnimationFrame(tick);
}

function finishLookTimer(card, favId) {
  card.classList.remove("is-look-locked");
  card.classList.add("is-look-ready");
  if (favId) lookTimerDeadlines.delete(favId);
  const hint = card.querySelector(".look-first-hint");
  if (hint) hint.textContent = "Now activate the card to reveal the insight.";
  const countEl = card.querySelector(".look-first-count");
  if (countEl) countEl.textContent = "✓";
  const ringEl = card.querySelector(".look-first-ring");
  if (ringEl) ringEl.style.setProperty("--ring-progress", "1");
  const live = card.querySelector(".look-first-live");
  if (live) live.textContent = "Ready to reveal—activate the card to see the back.";
}

function quizBank() {
  return getActiveQuizQuestions(selectedTopic);
}

function currentSeriesOption() {
  return seriesOptions.find((s) => s.id === selectedSeries) || null;
}

function isSeriesAvailable(seriesId) {
  return (
    seriesOptions.find((s) => s.id === seriesId)?.status !== "coming-soon"
  );
}

function currentTopicArtistCount() {
  return topicArtistEntries().length;
}

function minimumExploredCards() {
  return Math.min(2, currentTopicArtistCount());
}

function exploredCardCount() {
  const visibleExplored = app.querySelectorAll(
    ".artist-card.is-looking, .artist-card.is-flipped"
  ).length;
  return Math.max(exploredCardIds.size, visibleExplored);
}

function updateExploreReadiness() {
  const btn = app.querySelector('[data-series-nav="continue"]');
  const note = document.getElementById("explore-readiness-note");
  if (!btn || !note) return;
  const minimum = minimumExploredCards();
  const count = exploredCardCount();
  const ready = count >= minimum;
  btn.disabled = !ready;
  note.textContent = ready
    ? "You have enough context to try the quiz."
    : `Flip ${minimum} cards before the quiz. ${count} of ${minimum} viewed.`;
}

function topicArtistEntries() {
  const artists = seriesArtists[selectedSeries] || [];
  const indexes = Array.isArray(selectedTopic?.artistIndexes)
    ? selectedTopic.artistIndexes
    : artists.map((_, idx) => idx);
  return indexes
    .map((artistIndex, topicPosition) => ({
      artistIndex,
      artist: artists[artistIndex],
      artwork: selectedTopic?.artworks?.[topicPosition] || null,
    }))
    .filter((entry) => entry.artist);
}

function lookPromptFor(entry) {
  const a = entry.artist;
  const artwork = entry.artwork;
  if (artwork?.see && artwork?.how) {
    return `Look first: ${artwork.see}. Then notice how ${artwork.how.toLowerCase()}.`;
  }
  return `Look first: where does ${artistDisplayName(a)} ask your eye to pause?`;
}

function resetExhibitionSession() {
  exhibitionPhase = "pick";
  exhibitionPickIds = new Set();
  exhibitionOrder = [];
  exhibitionTitle = "";
}

function exhibitionEntriesByIds(ids) {
  const byFav = new Map(
    topicArtistEntries().map((entry) => [
      favoriteEntryId(selectedSeries, entry.artistIndex),
      entry,
    ])
  );
  return ids.map((id) => byFav.get(id)).filter(Boolean);
}

function syncExhibitionOrderFromPicks() {
  const topicOrder = topicArtistEntries().map((entry) =>
    favoriteEntryId(selectedSeries, entry.artistIndex)
  );
  const kept = exhibitionOrder.filter((id) => exhibitionPickIds.has(id));
  const appended = topicOrder.filter(
    (id) => exhibitionPickIds.has(id) && !kept.includes(id)
  );
  exhibitionOrder = [...kept, ...appended];
}

function insightClause(entry) {
  if (entry.artwork?.meaning) return entry.artwork.meaning;
  const text = entry.artist?.insight || entry.artist?.description || "";
  if (text.length > 180) return `${text.slice(0, 177)}…`;
  return text;
}

function buildWallText({ topic, orderedEntries, title, notesMap }) {
  const names = orderedEntries
    .map(({ artist }) => artistDisplayName(artist))
    .join(", ");
  const frame =
    topic.thesis || topic.keyIdeas || topic.description || "this topic";
  const parts = [
    `${title} brings together ${names} around one question: ${frame}`,
  ];
  const workLines = orderedEntries.map((entry) => {
    const meta = artistMetaLine(entry.artist);
    const clause = insightClause(entry);
    return `${artistDisplayName(entry.artist)}${
      meta ? ` (${meta})` : ""
    } — ${clause}`;
  });
  if (workLines.length) parts.push(workLines.join(" "));
  let noteBit = "";
  let noteArtist = "";
  for (const entry of orderedEntries) {
    const fid = favoriteEntryId(selectedSeries, entry.artistIndex);
    const note = (notesMap[fid] || "").trim();
    if (note) {
      noteBit = note;
      noteArtist = artistDisplayName(entry.artist);
      break;
    }
  }
  if (noteBit && noteArtist) {
    parts.push(`Your note on ${noteArtist}: “${noteBit}”`);
  } else if (topic.result?.synthesis) {
    parts.push(topic.result.synthesis);
  }
  return parts.join(" ");
}

function precheckExhibitionFavorites() {
  if (exhibitionPickIds.size) return;
  const favIds = loadFavoriteIds();
  topicArtistEntries().forEach(({ artistIndex }) => {
    const fid = favoriteEntryId(selectedSeries, artistIndex);
    if (favIds.has(fid) && exhibitionPickIds.size < 3) exhibitionPickIds.add(fid);
  });
}

function focusExhibitionWall() {
  requestAnimationFrame(() => {
    const el = document.getElementById("exhibition-wall-heading");
    if (el) el.focus({ preventScroll: true });
  });
}

function comparePanelHtml(entries) {
  const selected = entries.filter(({ artistIndex }) =>
    compareEntryIds.has(favoriteEntryId(selectedSeries, artistIndex))
  );
  if (!selected.length) {
    return `
      <section class="compare-panel" aria-labelledby="compare-title">
        <h2 id="compare-title">Compare mode</h2>
        <p>Select two artworks below to compare gaze, staging, and material clues side by side.</p>
      </section>
    `;
  }
  const cards = selected
    .map(({ artist, artwork }) => {
      const meaning = artwork?.meaning ? `<p><strong>Reading cue</strong> — ${escapeHtml(artwork.meaning)}</p>` : "";
      return `
        <article class="compare-item">
          <img src="${escapeHtml(artist.image)}" alt="${escapeHtml(artist.imageAlt || artist.name)}" loading="lazy" />
          <div>
            <h3>${escapeHtml(artistDisplayName(artist))}</h3>
            ${artistMetaLine(artist) ? `<p>${escapeHtml(artistMetaLine(artist))}</p>` : ""}
            ${meaning}
          </div>
        </article>
      `;
    })
    .join("");
  const prompt =
    selected.length === 2
      ? "What changes between these two works: who controls the gaze, what feels staged, and where does the image withhold certainty?"
      : "Choose one more artwork to unlock the comparison prompt.";
  return `
    <section class="compare-panel compare-panel--active" aria-labelledby="compare-title">
      <div class="compare-panel-head">
        <h2 id="compare-title">Compare mode</h2>
        <button type="button" class="btn btn--secondary compare-clear" data-compare-clear>Clear</button>
      </div>
      <div class="compare-grid">${cards}</div>
      <p class="compare-prompt">${escapeHtml(prompt)}</p>
    </section>
  `;
}

function visibleFavoriteEntries() {
  const selectedOnly = selectedSeries || null;
  return [...loadFavoriteIds()]
    .map(parseFavoriteEntryId)
    .filter(Boolean)
    .filter((entry) => isSeriesAvailable(entry.seriesId))
    .filter((entry) => !selectedOnly || entry.seriesId === selectedOnly);
}

function hasAnotherTopic() {
  const topics = topicsBySeries[selectedSeries] || [];
  return topics.some((topic) => topic.id !== selectedTopic?.id);
}

function focusViewTitle() {
  requestAnimationFrame(() => {
    const el = document.getElementById("view-title");
    if (el) el.focus({ preventScroll: true });
  });
}

function syncCardA11y(card, expanded) {
  const label = card.getAttribute("data-artist-label") || "";
  card.setAttribute("aria-expanded", expanded ? "true" : "false");
  card.setAttribute(
    "aria-label",
    expanded
      ? `${label} — showing details and insight`
      : `${label} — show back for context and insight`
  );
}

function render() {
  if (state === "landing") {
    app.innerHTML = `
          <div class="landing">
            <div class="landing-hero">
              <div class="landing-copy">
                <p class="landing-kicker">✦ feminist art club</p>
                <h1 class="landing-title" id="view-title" tabindex="-1" aria-label="Learn contemporary art through women artists">
                  <span class="landing-title-line">Learn contemporary art</span>
                  <span class="landing-title-line landing-title-line--emph">through women artists</span>
                </h1>
                <p class="landing-tagline">Five artworks · five minutes · insight that names who made the work and why it matters.</p>
                <div class="landing-actions">
                  <button type="button" class="landing-cta btn btn--primary" id="btn-landing-cta">Begin</button>
                </div>
              </div>
              <div class="landing-visual">
                <figure class="landing-example">
                  <img src="../images/francesca-woodman-card.png" width="400" height="520" loading="lazy" alt="Black-and-white photograph: figure in a doorframe, arms raised." />
                  <figcaption><strong>Example insight.</strong> The doorway is both frame and burden—the pose keeps symbolic weight without leaving the room.</figcaption>
                </figure>
              </div>
            </div>
          </div>
        `;
    document.getElementById("btn-landing-cta").onclick = () => {
      state = "start";
      render();
    };
    focusViewTitle();
    return;
  }

  if (state === "start") {
    const seriesButtons = seriesOptions
      .map(
        (s) => `
          <div class="series-card-wrap">
            <button type="button" class="series-card btn-series" data-series="${escapeHtml(s.id)}"${s.status === "coming-soon" ? " disabled" : ""}>${escapeHtml(s.label)}${s.status === "coming-soon" ? " · Soon" : ""}</button>
            <p class="series-card-blurb">${escapeHtml(s.description)}</p>
          </div>
        `
      )
      .join("");
    app.innerHTML = `
          <header class="view-header">
            <h1 class="view-title" id="view-title" tabindex="-1">Choose a medium</h1>
            <p class="view-lead">Each path is a short, curated series—lens, surface, mass, or live time.</p>
          </header>
          <div class="series-grid">${seriesButtons}</div>
        `;
    app.querySelectorAll(".btn-series").forEach((btn) => {
      btn.onclick = () => {
        selectedSeries = btn.getAttribute("data-series");
        if (!isSeriesAvailable(selectedSeries)) return;
        selectedTopic = null;
        exploredCardIds = new Set();
        state = "topic";
        render();
      };
    });
    focusViewTitle();
    return;
  }

  if (state === "topic") {
    const sl =
      seriesOptions.find((s) => s.id === selectedSeries)?.label ??
      selectedSeries;
    const topics = topicsBySeries[selectedSeries] || [];
    const panels = topics
      .map(
        (t) => `
          <div class="topic-panel">
            ${
              t.previewImage
                ? `<img src="${escapeHtml(t.previewImage)}" alt="${escapeHtml(t.previewImageAlt || "")}" width="400" height="280" loading="lazy" />`
                : ""
            }
            <h2>${escapeHtml(t.title)}</h2>
            ${t.thesis ? `<p class="topic-thesis">${escapeHtml(t.thesis)}</p>` : ""}
            <p>${escapeHtml(t.description)}</p>
            <button type="button" class="topic-explore-cta btn btn--primary" data-topic-id="${escapeHtml(t.id)}">Start exploring</button>
          </div>
        `
      )
      .join("");
    app.innerHTML = `
          <header class="view-header">
            <h1 class="view-title" id="view-title" tabindex="-1">${escapeHtml(sl)}</h1>
            <p class="view-lead">Choose a topic to explore</p>
          </header>
          <div class="topic-grid">${panels || "<p>No topics for this series yet.</p>"}</div>
          <p class="topic-nav-row"><button type="button" class="btn btn--secondary" data-topic-nav="back">Back</button></p>
        `;
    app.querySelectorAll("[data-topic-id]").forEach((btn) => {
      btn.onclick = () => {
        const tid = btn.getAttribute("data-topic-id");
        const list = topicsBySeries[selectedSeries] || [];
        selectedTopic = list.find((x) => x.id === tid) || null;
        exploredCardIds = new Set();
        compareEntryIds = new Set();
        state = "explore";
        render();
      };
    });
    const backTopic = app.querySelector('[data-topic-nav="back"]');
    if (backTopic) {
      backTopic.onclick = () => {
        selectedSeries = null;
        selectedTopic = null;
        compareEntryIds = new Set();
        state = "start";
        render();
      };
    }
    focusViewTitle();
    return;
  }

  if (state === "explore") {
    const topicList = topicsBySeries[selectedSeries] || [];
    if (!selectedTopic && topicList.length) {
      state = "topic";
      render();
      return;
    }
    const seriesLabel =
      currentSeriesOption()?.label ?? selectedSeries;
    const artistEntries = topicArtistEntries();
    const favoriteIds = loadFavoriteIds();
    const notesMap = loadNotes();
    const cards = artistEntries
      .map((entry) => {
        const { artist: a, artistIndex } = entry;
        const fid = favoriteEntryId(selectedSeries, artistIndex);
        const liked = favoriteIds.has(fid);
        const selectedForCompare = compareEntryIds.has(fid);
        const dLabel = escapeHtml(artistDisplayName(a));
        const noteText = notesMap[fid] || "";
        const hasNote = Boolean(noteText);
        return `
          <div class="artist-card-wrap">
            <div class="artist-card" role="button" tabindex="0" aria-expanded="false" data-artist-label="${dLabel}" data-look-fav="${escapeHtml(fid)}" aria-label="${dLabel} — show back for context and insight. Look first before the reveal">
              <div class="artist-card-inner">
                <div class="artist-card-face artist-card-front${a.colorImage ? " artist-card-front--color" : ""}">
                  <img src="${escapeHtml(a.image)}" alt="${escapeHtml(a.imageAlt || a.name)}" width="400" height="520" loading="lazy" />
                  <div class="look-first" aria-hidden="true">
                    <span>Look first</span>
                    <p>${escapeHtml(lookPromptFor(entry))}</p>
                    <div class="look-first-timer">
                      <div class="look-first-ring" style="--ring-progress:1"><span class="look-first-count">20</span></div>
                      <button type="button" class="look-first-skip" data-look-skip>Reveal anyway</button>
                    </div>
                    <small class="look-first-hint">Take 20 seconds. Then activate the card to reveal the insight.</small>
                    <div class="look-first-live sr-only" aria-live="polite"></div>
                  </div>
                </div>
                <div class="artist-card-face artist-card-back">
                  <div class="artist-back-inner">
                    <div class="artist-back-body">
                      <h2 class="artist-back-name">${escapeHtml(artistDisplayName(a))}</h2>
                      ${artistMetaLine(a) ? `<p class="artist-back-meta">${escapeHtml(artistMetaLine(a))}</p>` : ""}
                      <p class="artist-back-desc">${escapeHtml(a.description)}</p>
                      <hr class="artist-back-divider" />
                      <div class="artist-back-insight-section">
                        <p class="artist-key-label">Key insight</p>
                        <p class="artist-back-insight">${escapeHtml(a.insight)}</p>
                      </div>
                      <div class="artist-back-notebook" data-notebook-fav="${escapeHtml(fid)}">
                        <label class="artist-key-label" for="note-${escapeHtml(fid)}">Your notebook · What did you notice?</label>
                        <textarea id="note-${escapeHtml(fid)}" class="artist-note-input" rows="2" maxlength="${NOTE_MAX_LENGTH}" placeholder="One line: a detail, a question, a feeling…" data-note-fav="${escapeHtml(fid)}">${escapeHtml(noteText)}</textarea>
                        <div class="artist-note-meta">
                          <span class="artist-note-status" data-note-status aria-live="polite">${noteText ? "Saved" : ""}</span>
                          <span class="artist-note-count" data-note-count>${noteText.length} / ${NOTE_MAX_LENGTH}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="artist-card-footer artist-card-footer--front">
              <div class="artist-name-tag artist-footer-field">
                <span>${escapeHtml(artistDisplayName(a))}</span>
                <span class="artist-note-marker${hasNote ? " is-active" : ""}" data-note-marker="${escapeHtml(fid)}" aria-label="${hasNote ? "Notebook entry saved" : ""}" title="${hasNote ? "Notebook entry saved" : ""}" aria-hidden="${hasNote ? "false" : "true"}">✎</span>
              </div>
              <button type="button" class="btn-compare${selectedForCompare ? " is-selected" : ""}" data-compare-id="${escapeHtml(fid)}" aria-pressed="${selectedForCompare ? "true" : "false"}" aria-label="${selectedForCompare ? "Remove" : "Compare"} ${escapeHtml(artistDisplayName(a))}" title="${selectedForCompare ? "Remove from comparison" : "Compare"}">
                <span aria-hidden="true">⇄</span>
              </button>
              <button type="button" class="btn-like${liked ? " is-liked" : ""}" data-fav-id="${escapeHtml(fid)}" data-artist-index="${artistIndex}" aria-pressed="${liked ? "true" : "false"}" aria-label="${liked ? "Unlike" : "Like"} ${escapeHtml(artistDisplayName(a))}" title="${liked ? "Unlike" : "Like"}">
                <svg class="heart-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </button>
            </div>
            <div class="artist-card-footer-back">
              <div class="artist-card-footer">
                <p class="artist-learn-field artist-footer-field">
                  <a class="artist-back-learn-link" href="https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(a.name)}" target="_blank" rel="noopener noreferrer">Learn more about the artist</a>
                </p>
                <button type="button" class="btn-compare${selectedForCompare ? " is-selected" : ""}" data-compare-id="${escapeHtml(fid)}" aria-pressed="${selectedForCompare ? "true" : "false"}" aria-label="${selectedForCompare ? "Remove" : "Compare"} ${escapeHtml(artistDisplayName(a))}" title="${selectedForCompare ? "Remove from comparison" : "Compare"}">
                  <span aria-hidden="true">⇄</span>
                </button>
                <button type="button" class="btn-like${liked ? " is-liked" : ""}" data-fav-id="${escapeHtml(fid)}" data-artist-index="${artistIndex}" aria-pressed="${liked ? "true" : "false"}" aria-label="${liked ? "Unlike" : "Like"} ${escapeHtml(artistDisplayName(a))}" title="${liked ? "Unlike" : "Like"}">
                  <svg class="heart-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </button>
              </div>
            </div>
          </div>
        `;
      })
      .join("");
    const seriesPageActions = `
          <p class="quiz-hint" id="explore-readiness-note" aria-live="polite"></p>
          <div class="series-actions">
            <button type="button" class="btn btn--secondary" data-series-nav="back">Back</button>
            <button type="button" class="btn btn--primary" data-series-nav="continue" aria-describedby="explore-readiness-note">Continue to quiz</button>
            <button type="button" class="btn btn--secondary" data-series-nav="favorites">See favorites</button>
          </div>
        `;
    app.innerHTML = `
          <header class="view-header">
            <h1 class="view-title" id="view-title" tabindex="-1">Explore the artworks</h1>
            ${flowStepIndicator(1)}
            <p class="view-lead series-blurb">${escapeHtml(seriesLabel)}${
            selectedTopic
              ? ` · <span class="explore-topic-title">${escapeHtml(selectedTopic.title)}</span>`
              : ""
          }</p>
          </header>
          ${
            selectedTopic
              ? `<p class="explore-topic-line">${escapeHtml(selectedTopic.description)}</p>${selectedTopic.thesis ? `<p class="explore-thesis">${escapeHtml(selectedTopic.thesis)}</p>` : ""}`
              : ""
          }
          ${comparePanelHtml(artistEntries)}
          <div class="artist-grid">
            ${cards}
          </div>
          ${seriesPageActions}
        `;
    app.querySelectorAll(".artist-card").forEach((card) => {
      const favId = card.getAttribute("data-look-fav") || "";
      const toggleFlip = () => {
        if (!card.classList.contains("is-looking") && !card.classList.contains("is-flipped")) {
          card.classList.add("is-looking", "is-look-locked");
          card.setAttribute("aria-label", `${card.getAttribute("data-artist-label") || ""} — looking prompt shown. 20 seconds of guided looking before the reveal is unlocked.`);
          exploredCardIds.add(card.getAttribute("data-artist-label") || "");
          ensureLookTimer(favId);
          startLookTimerLoop();
          updateExploreReadiness();
          return;
        }
        if (card.classList.contains("is-look-locked")) {
          const live = card.querySelector(".look-first-live");
          if (live) live.textContent = "Keep looking—the reveal unlocks when the timer ends, or tap Reveal anyway.";
          return;
        }
        card.classList.toggle("is-flipped");
        card.classList.remove("is-looking", "is-look-ready");
        clearLookTimer(favId);
        syncCardA11y(card, card.classList.contains("is-flipped"));
        exploredCardIds.add(card.getAttribute("data-artist-label") || "");
        updateExploreReadiness();
      };
      syncCardA11y(card, false);
      card.onclick = (e) => {
        if (e.target.closest(".artist-back-learn-link")) return;
        if (e.target.closest(".artist-back-notebook")) return;
        if (e.target.closest("[data-look-skip]")) {
          e.stopPropagation();
          finishLookTimer(card, favId);
          return;
        }
        toggleFlip();
      };
      card.onkeydown = (e) => {
        if (e.target.closest(".artist-back-notebook")) return;
        if (e.key !== "Enter" && e.key !== " ") return;
        if (e.target.closest(".artist-back-learn-link")) return;
        if (e.target.closest("[data-look-skip]")) {
          e.preventDefault();
          e.stopPropagation();
          finishLookTimer(card, favId);
          return;
        }
        e.preventDefault();
        toggleFlip();
      };
      const deadline = lookTimerDeadlines.get(favId);
      if (deadline && deadline > Date.now()) {
        card.classList.add("is-looking", "is-look-locked");
        startLookTimerLoop();
      }
    });
    app.querySelectorAll(".btn-like").forEach((btn) => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-fav-id");
        const idx = Number(btn.getAttribute("data-artist-index"));
        const artist = seriesArtists[selectedSeries]?.[idx];
        const set = loadFavoriteIds();
        if (set.has(id)) {
          set.delete(id);
        } else {
          set.add(id);
        }
        const on = set.has(id);
        const wrap = btn.closest(".artist-card-wrap");
        const label = artist
          ? `${on ? "Unlike" : "Like"} ${artistDisplayName(artist)}`
          : `${on ? "Unlike" : "Like"}`;
        (wrap ? wrap.querySelectorAll(".btn-like") : [btn]).forEach((b) => {
          if (b.getAttribute("data-fav-id") !== id) return;
          b.classList.toggle("is-liked", on);
          b.setAttribute("aria-pressed", on ? "true" : "false");
          b.setAttribute("aria-label", label);
          b.setAttribute("title", label);
        });
        saveFavoriteIds(set);
      };
    });
    app.querySelectorAll(".btn-compare").forEach((btn) => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-compare-id");
        if (!id) return;
        if (compareEntryIds.has(id)) {
          compareEntryIds.delete(id);
        } else {
          if (compareEntryIds.size >= 2) {
            compareEntryIds = new Set([...compareEntryIds].slice(1));
          }
          compareEntryIds.add(id);
        }
        render();
      };
    });
    const clearCompare = app.querySelector("[data-compare-clear]");
    if (clearCompare) {
      clearCompare.onclick = () => {
        compareEntryIds = new Set();
        render();
      };
    }
    app.querySelectorAll("[data-note-fav]").forEach((textarea) => {
      const fid = textarea.getAttribute("data-note-fav");
      const wrap = textarea.closest(".artist-card-wrap");
      const statusEl = wrap?.querySelector("[data-note-status]");
      const countEl = wrap?.querySelector("[data-note-count]");
      const marker = wrap?.querySelector("[data-note-marker]");
      let saveTimer = null;
      let lastSaved = textarea.value;
      const writeStatus = (msg) => {
        if (statusEl) statusEl.textContent = msg;
      };
      const updateCount = () => {
        if (countEl) countEl.textContent = `${textarea.value.length} / ${NOTE_MAX_LENGTH}`;
      };
      const updateMarker = (hasNote) => {
        if (!marker) return;
        marker.classList.toggle("is-active", hasNote);
        marker.setAttribute("aria-hidden", hasNote ? "false" : "true");
        marker.setAttribute("aria-label", hasNote ? "Notebook entry saved" : "");
        marker.setAttribute("title", hasNote ? "Notebook entry saved" : "");
      };
      const commit = () => {
        const value = textarea.value;
        if (value === lastSaved) return;
        setNote(fid, value);
        lastSaved = value;
        writeStatus(value.trim() ? "Saved" : "");
        updateMarker(Boolean(value.trim()));
      };
      textarea.addEventListener("input", () => {
        updateCount();
        writeStatus("Saving…");
        if (saveTimer) clearTimeout(saveTimer);
        saveTimer = setTimeout(commit, 450);
      });
      textarea.addEventListener("blur", () => {
        if (saveTimer) {
          clearTimeout(saveTimer);
          saveTimer = null;
        }
        commit();
      });
      textarea.addEventListener("click", (e) => e.stopPropagation());
      textarea.addEventListener("keydown", (e) => e.stopPropagation());
    });
    app.querySelectorAll("[data-series-nav]").forEach((btn) => {
      btn.onclick = () => {
        const nav = btn.getAttribute("data-series-nav");
        if (nav === "back") {
          selectedTopic = null;
          exploredCardIds = new Set();
          compareEntryIds = new Set();
          state = "topic";
        } else if (nav === "continue") {
          if (exploredCardCount() < minimumExploredCards()) return;
          state = "question";
          questionIndex = 0;
          answers = newEmptyAnswers(selectedTopic);
        } else if (nav === "favorites") {
          state = "favorites";
        }
        render();
      };
    });
    updateExploreReadiness();
    focusViewTitle();
    return;
  }

  if (state === "favorites") {
    const parsed = visibleFavoriteEntries()
      .sort((a, b) => {
        const la =
          seriesOptions.find((s) => s.id === a.seriesId)?.label ?? a.seriesId;
        const lb =
          seriesOptions.find((s) => s.id === b.seriesId)?.label ?? b.seriesId;
        if (la !== lb) return la.localeCompare(lb);
        return a.artist.name.localeCompare(b.artist.name);
      });
    const favoritesNotes = loadNotes();
    const listHtml = parsed
      .map((item) => {
        const sl =
          seriesOptions.find((s) => s.id === item.seriesId)?.label ??
          item.seriesId;
        const fid = favoriteEntryId(item.seriesId, item.index);
        const note = favoritesNotes[fid] || "";
        return `
          <li>
            <div class="fav-meta">
              <div class="fav-series">${escapeHtml(sl)}</div>
              <strong>${escapeHtml(artistDisplayName(item.artist))}</strong>
              <div>${escapeHtml(item.artist.description)}</div>
              ${note ? `<div class="fav-note"><span class="fav-note-label">What you noticed:</span> ${escapeHtml(note)}</div>` : ""}
            </div>
            <button type="button" class="btn-remove-fav" data-fav-id="${escapeHtml(fid)}">Remove</button>
          </li>
        `;
      })
      .join("");
    app.innerHTML = `
          <header class="view-header">
            <h1 class="view-title" id="view-title" tabindex="-1">Your favorites</h1>
            <p class="view-lead">Works you saved with the heart—return anytime to compare notes.</p>
          </header>
          ${parsed.length ? `<ul class="favorites-list">${listHtml}</ul>` : "<p>No favorites yet—tap the heart on a card to save one in this live path.</p>"}
          <div class="series-actions">
            <button type="button" class="btn btn--secondary" id="btn-favorites-back">Back</button>
          </div>
        `;
    app.querySelectorAll(".btn-remove-fav").forEach((btn) => {
      btn.onclick = () => {
        const id = btn.getAttribute("data-fav-id");
        const set = loadFavoriteIds();
        set.delete(id);
        saveFavoriteIds(set);
        render();
      };
    });
    document.getElementById("btn-favorites-back").onclick = () => {
      state = selectedSeries ? "explore" : "start";
      render();
    };
    focusViewTitle();
    return;
  }

  if (state === "question") {
    const bank = quizBank();
    const total = bank.length;
    const q = bank[questionIndex];
    const n = questionIndex + 1;
    const radios = q.choices
      .map(
        (c) => `
          <label class="quiz-option">
            <input class="quiz-option-input" type="radio" name="choice" value="${escapeHtml(c.value)}" />
            <span class="quiz-option-text">${escapeHtml(c.label)}</span>
          </label>
        `
      )
      .join("");
    app.innerHTML = `
          <header class="view-header">
            <h1 class="view-title" id="view-title" tabindex="-1">Quiz on the theme</h1>
            ${flowStepIndicator(2)}
            <p class="view-lead">Choose the answer that fits best.</p>
          </header>
          <p class="quiz-hint">You can’t change an answer after you continue—there is no back button between questions.</p>
          <div class="quiz-stack">
            <p class="quiz-progress">Progress: ${n} of ${total}</p>
            <p class="quiz-topic-banner">Topic: ${selectedTopic ? escapeHtml(selectedTopic.title) : "—"}</p>
            <p class="quiz-question">${escapeHtml(q.text)}</p>
            <div class="quiz-options">${radios}</div>
          </div>
          <p class="quiz-actions"><button type="button" class="btn btn--primary" id="btn-next" disabled>Next</button></p>
        `;
    const nextBtn = document.getElementById("btn-next");
    const radioNodes = app.querySelectorAll('input[name="choice"]');
    const syncNext = () => {
      const picked = app.querySelector('input[name="choice"]:checked');
      nextBtn.disabled = !picked;
    };
    radioNodes.forEach((r) => {
      r.checked = r.value === answers[questionIndex];
      r.onchange = () => {
        answers[questionIndex] = r.value;
        syncNext();
      };
    });
    syncNext();
    nextBtn.onclick = () => {
      const picked = app.querySelector('input[name="choice"]:checked');
      if (!picked) return;
      answers[questionIndex] = picked.value;
      state = "afterQuestion";
      render();
    };
    focusViewTitle();
    return;
  }

  if (state === "afterQuestion") {
    const bank = quizBank();
    const total = bank.length;
    const q = bank[questionIndex];
    const n = questionIndex + 1;
    const ok = answers[questionIndex] === q.correctValue;
    app.innerHTML = `
          <header class="view-header">
            <h1 class="view-title" id="view-title" tabindex="-1">Context for your choice</h1>
            ${flowStepIndicator(2)}
            <p class="view-lead">Here’s a little context after your answer.</p>
          </header>
          <div id="quiz-feedback-live" class="sr-only" aria-live="polite" aria-atomic="true"></div>
          <div class="quiz-stack">
            <p class="quiz-progress">Progress: ${n} of ${total}</p>
            <p class="quiz-topic-banner">Topic: ${selectedTopic ? escapeHtml(selectedTopic.title) : "—"}</p>
            <p class="quiz-question">${escapeHtml(q.text)}</p>
          </div>
          <h2 class="quiz-feedback-heading">Why this answer</h2>
          <p class="quiz-feedback-text" id="line-explanation"></p>
          <h2 class="quiz-feedback-heading">Curator note</h2>
          <p class="quiz-feedback-text" id="line-insight"></p>
          <h2 class="quiz-feedback-heading">About your choice</h2>
          <p class="quiz-feedback-text" id="line-choice-feedback"></p>
          <p class="quiz-actions"><button type="button" class="btn btn--primary" id="btn-continue">Continue</button></p>
        `;
    document.getElementById("line-explanation").textContent = q.explanation;
    document.getElementById("line-insight").textContent = q.insight;
    const pickedChoice = q.choices.find((c) => c.value === answers[questionIndex]);
    document.getElementById("line-choice-feedback").textContent =
      pickedChoice?.feedback ||
      (ok
        ? "That choice tracks the strongest evidence in the work."
        : "That choice is understandable, but it does not name the strongest visual evidence.");
    document.getElementById("quiz-feedback-live").textContent = ok
      ? "Correct."
      : "Not quite—see the notes below for context.";
    document.getElementById("btn-continue").onclick = () => {
      if (questionIndex < total - 1) {
        questionIndex += 1;
        state = "question";
      } else {
        state = "result";
      }
      render();
    };
    focusViewTitle();
    return;
  }

  if (state === "result") {
    const bank = quizBank();
    const total = bank.length;
    let score = 0;
    const lines = bank.map((q, i) => {
      const v = answers[i];
      const correct = v === q.correctValue;
      if (correct) score += 1;
      const label =
        q.choices.find((c) => c.value === v)?.label ?? "(nothing chosen)";
      return `Q${i + 1}: ${label} — ${correct ? "Correct" : "Wrong"}`;
    });
    const keyIdeasText =
      selectedTopic?.keyIdeas ??
      "Take another pass through the artworks—patterns across artists often click on the second look.";
    const res = selectedTopic?.result;
    const learnedIdeas = Array.isArray(res?.learnedIdeas)
      ? res.learnedIdeas
      : [];
    const learnedIdeasHtml = learnedIdeas.length
      ? `<div class="result-learned"><h2>What you practiced</h2><ul>${learnedIdeas
          .map((idea) => `<li>${escapeHtml(idea)}</li>`)
          .join("")}</ul></div>`
      : "";
    const favoriteIds = loadFavoriteIds();
    const topicArtistIndexes = new Set(
      topicArtistEntries().map((entry) => entry.artistIndex)
    );
    const savedInsights = (seriesArtists[selectedSeries] || [])
      .map((artist, idx) => ({
        artist,
        fid: favoriteEntryId(selectedSeries, idx),
        idx,
      }))
      .filter((item) => topicArtistIndexes.has(item.idx))
      .filter((item) => favoriteIds.has(item.fid))
      .slice(0, 3);
    const savedInsightsHtml = savedInsights.length
      ? `<div class="result-learned"><h2>Saved insights</h2><ul>${savedInsights
          .map(
            ({ artist }) =>
              `<li><strong>${escapeHtml(artistDisplayName(artist))}</strong>: ${escapeHtml(artist.insight)}</li>`
          )
          .join("")}</ul></div>`
      : "";
    const notesMap = loadNotes();
    const yourNotesItems = topicArtistEntries()
      .map(({ artist, artistIndex }) => ({
        artist,
        text: notesMap[favoriteEntryId(selectedSeries, artistIndex)] || "",
      }))
      .filter((item) => item.text);
    const yourNotesHtml = yourNotesItems.length
      ? `<div class="result-learned result-notes"><h2>What you noticed</h2><ul>${yourNotesItems
          .map(
            ({ artist, text }) =>
              `<li><strong>${escapeHtml(artistDisplayName(artist))}</strong>: ${escapeHtml(text)}</li>`
          )
          .join("")}</ul></div>`
      : "";
    const resultExtras =
      res && (res.synthesis || res.strongestSkill || res.nextFocus)
        ? `<div class="result-skill-meta">
            ${res.synthesis ? `<p><strong>Synthesis</strong> — ${escapeHtml(res.synthesis)}</p>` : ""}
            ${res.strongestSkill ? `<p><strong>Strongest skill</strong> — ${escapeHtml(res.strongestSkill)}</p>` : ""}
            ${res.nextFocus ? `<p><strong>Next focus</strong> — ${escapeHtml(res.nextFocus)}</p>` : ""}
          </div>`
        : "";
    const nextTopicLabel = hasAnotherTopic()
      ? "Explore another topic"
      : "Review this topic";
    app.innerHTML = `
          <header class="view-header">
            <h1 class="view-title" id="view-title" tabindex="-1">How you did</h1>
            ${flowStepIndicator(3)}
            <p class="view-lead">A calm recap before you choose what to explore next.</p>
          </header>
          <p class="result-score" id="line-score"></p>
          <div class="result-key-ideas" id="block-key-ideas"></div>
          ${learnedIdeasHtml}
          ${savedInsightsHtml}
          ${yourNotesHtml}
          <pre id="line-detail"></pre>
          <div class="series-actions-row series-actions-row--stacked">
            <button type="button" class="btn btn--primary" id="btn-next-topic">${nextTopicLabel}</button>
            <button type="button" class="btn btn--secondary" id="btn-exhibition">Curate a mini exhibition</button>
            <button type="button" class="btn btn--secondary" id="btn-again">Start over</button>
          </div>
        `;
    document.getElementById("line-score").textContent =
      `Score: ${score} of ${total} correct.`;
    document.getElementById("block-key-ideas").innerHTML =
      `<h2>Key ideas from the topic</h2><p>${escapeHtml(keyIdeasText)}</p>${resultExtras}`;
    document.getElementById("line-detail").textContent = lines.join("\n");
    document.getElementById("btn-exhibition").onclick = () => {
      precheckExhibitionFavorites();
      state = "exhibition";
      render();
    };
    document.getElementById("btn-next-topic").onclick = () => {
      questionIndex = 0;
      answers = [];
      exploredCardIds = new Set();
      compareEntryIds = new Set();
      resetExhibitionSession();
      if (hasAnotherTopic()) {
        selectedTopic = null;
        state = "topic";
      } else {
        state = "explore";
      }
      render();
    };
    document.getElementById("btn-again").onclick = () => {
      state = "landing";
      questionIndex = 0;
      answers = [];
      selectedSeries = null;
      selectedTopic = null;
      exploredCardIds = new Set();
      compareEntryIds = new Set();
      resetExhibitionSession();
      render();
    };
    focusViewTitle();
    return;
  }

  if (state === "exhibition") {
    renderExhibition();
    return;
  }
}

function renderExhibition() {
  const topic = selectedTopic;
  const entries = topicArtistEntries();
  const pickCount = exhibitionPickIds.size;
  const pickReady = pickCount === 3;

  if (exhibitionPhase === "pick") {
    const pickCards = entries
      .map(({ artist, artistIndex }) => {
        const fid = favoriteEntryId(selectedSeries, artistIndex);
        const checked = exhibitionPickIds.has(fid);
        const meta = artistMetaLine(artist);
        return `
            <label class="exhibition-pick">
              <input type="checkbox" class="exhibition-pick-input" data-exhibition-pick="${escapeHtml(fid)}" ${checked ? "checked" : ""} />
              <img src="${escapeHtml(artist.image)}" alt="" loading="lazy" />
              <span class="exhibition-pick-text">
                <strong>${escapeHtml(artistDisplayName(artist))}</strong>
                ${meta ? `<span>${escapeHtml(meta)}</span>` : ""}
              </span>
            </label>
          `;
      })
      .join("");
    app.innerHTML = `
          <header class="view-header">
            <h1 class="view-title" id="view-title" tabindex="-1">Choose three works</h1>
            <p class="view-lead">Pick three artworks from this topic for your mini exhibition wall.</p>
          </header>
          <p id="exhibition-pick-live" class="exhibition-live" aria-live="polite">${pickCount} of 3 selected</p>
          <div class="exhibition-picker" role="group" aria-labelledby="view-title">${pickCards}</div>
          <div class="series-actions exhibition-actions">
            <button type="button" class="btn btn--secondary" id="btn-exhibition-back-recap">Back to recap</button>
            <button type="button" class="btn btn--primary" id="btn-exhibition-continue" ${pickReady ? "" : "disabled"}>Continue</button>
          </div>
        `;
    const live = document.getElementById("exhibition-pick-live");
    const continueBtn = document.getElementById("btn-exhibition-continue");
    const syncPick = () => {
      live.textContent = `${exhibitionPickIds.size} of 3 selected`;
      continueBtn.disabled = exhibitionPickIds.size !== 3;
    };
    app.querySelectorAll("[data-exhibition-pick]").forEach((input) => {
      input.onchange = () => {
        const fid = input.getAttribute("data-exhibition-pick");
        if (input.checked) {
          if (exhibitionPickIds.size >= 3) {
            input.checked = false;
            return;
          }
          exhibitionPickIds.add(fid);
        } else {
          exhibitionPickIds.delete(fid);
        }
        syncPick();
      };
    });
    continueBtn.onclick = () => {
      if (exhibitionPickIds.size !== 3) return;
      syncExhibitionOrderFromPicks();
      exhibitionPhase = "order";
      render();
    };
    document.getElementById("btn-exhibition-back-recap").onclick = () => {
      state = "result";
      render();
    };
    focusViewTitle();
    return;
  }

  if (exhibitionPhase === "order") {
    if (!exhibitionOrder.length) syncExhibitionOrderFromPicks();
    const ordered = exhibitionEntriesByIds(exhibitionOrder);
    const orderList = ordered
      .map((entry, i) => {
        const fid = favoriteEntryId(selectedSeries, entry.artistIndex);
        const name = artistDisplayName(entry.artist);
        return `
            <li class="exhibition-order-item" data-exhibition-order-id="${escapeHtml(fid)}">
              <span class="exhibition-order-pos" aria-hidden="true">${i + 1}</span>
              <img src="${escapeHtml(entry.artist.image)}" alt="" loading="lazy" />
              <div class="exhibition-order-meta">
                <strong>${escapeHtml(name)}</strong>
                ${artistMetaLine(entry.artist) ? `<span>${escapeHtml(artistMetaLine(entry.artist))}</span>` : ""}
              </div>
              <div class="exhibition-order-btns">
                <button type="button" class="btn btn--secondary" data-order-move="up" aria-label="Move ${escapeHtml(name)} earlier on the wall" ${i === 0 ? "disabled" : ""}>Move up</button>
                <button type="button" class="btn btn--secondary" data-order-move="down" aria-label="Move ${escapeHtml(name)} later on the wall" ${i === ordered.length - 1 ? "disabled" : ""}>Move down</button>
              </div>
            </li>
          `;
      })
      .join("");
    app.innerHTML = `
          <header class="view-header">
            <h1 class="view-title" id="view-title" tabindex="-1">Order your wall</h1>
            <p class="view-lead">Left to right is how a visitor would encounter your three works.</p>
          </header>
          <ol class="exhibition-order-list">${orderList}</ol>
          <div class="series-actions exhibition-actions">
            <button type="button" class="btn btn--secondary" id="btn-exhibition-back-pick">Back</button>
            <button type="button" class="btn btn--primary" id="btn-exhibition-to-title">Continue</button>
          </div>
        `;
    app.querySelectorAll("[data-order-move]").forEach((btn) => {
      btn.onclick = () => {
        const li = btn.closest("[data-exhibition-order-id]");
        const fid = li.getAttribute("data-exhibition-order-id");
        const idx = exhibitionOrder.indexOf(fid);
        if (idx < 0) return;
        const dir = btn.getAttribute("data-order-move");
        const swap = dir === "up" ? idx - 1 : idx + 1;
        if (swap < 0 || swap >= exhibitionOrder.length) return;
        const next = [...exhibitionOrder];
        [next[idx], next[swap]] = [next[swap], next[idx]];
        exhibitionOrder = next;
        render();
      };
    });
    document.getElementById("btn-exhibition-back-pick").onclick = () => {
      exhibitionPhase = "pick";
      render();
    };
    document.getElementById("btn-exhibition-to-title").onclick = () => {
      exhibitionPhase = "title";
      render();
    };
    focusViewTitle();
    return;
  }

  if (exhibitionPhase === "title") {
    app.innerHTML = `
          <header class="view-header">
            <h1 class="view-title" id="view-title" tabindex="-1">Title your exhibition</h1>
            <p class="view-lead">A short title frames how a visitor reads the three works together.</p>
          </header>
          <label class="exhibition-title-field" for="exhibition-title-input">
            <span class="exhibition-title-label">Exhibition title</span>
            <input type="text" id="exhibition-title-input" class="exhibition-title-input" maxlength="${EXHIBITION_TITLE_MAX}" placeholder="Staged belief under pressure" value="${escapeHtml(exhibitionTitle)}" />
          </label>
          <p class="exhibition-title-hint">Up to ${EXHIBITION_TITLE_MAX} characters.</p>
          <div class="series-actions exhibition-actions">
            <button type="button" class="btn btn--secondary" id="btn-exhibition-back-order">Back</button>
            <button type="button" class="btn btn--primary" id="btn-exhibition-publish" disabled>Publish exhibition</button>
          </div>
        `;
    const titleInput = document.getElementById("exhibition-title-input");
    const publishBtn = document.getElementById("btn-exhibition-publish");
    const syncTitle = () => {
      publishBtn.disabled = !titleInput.value.trim();
    };
    titleInput.oninput = () => {
      exhibitionTitle = titleInput.value.slice(0, EXHIBITION_TITLE_MAX);
      syncTitle();
    };
    syncTitle();
    publishBtn.onclick = () => {
      exhibitionTitle = titleInput.value.trim().slice(0, EXHIBITION_TITLE_MAX);
      if (!exhibitionTitle) return;
      exhibitionPhase = "published";
      render();
    };
    document.getElementById("btn-exhibition-back-order").onclick = () => {
      exhibitionTitle = titleInput.value.trim().slice(0, EXHIBITION_TITLE_MAX);
      exhibitionPhase = "order";
      render();
    };
    focusViewTitle();
    return;
  }

  if (exhibitionPhase === "published") {
    const ordered = exhibitionEntriesByIds(exhibitionOrder);
    const notesMap = loadNotes();
    const wallText = buildWallText({
      topic,
      orderedEntries: ordered,
      title: exhibitionTitle,
      notesMap,
    });
    const wallWorks = ordered
      .map((entry, i) => {
        const meta = artistMetaLine(entry.artist);
        return `
            <li class="exhibition-wall-work">
              <span class="exhibition-wall-pos" aria-hidden="true">${i + 1}</span>
              <img src="${escapeHtml(entry.artist.image)}" alt="${escapeHtml(entry.artist.imageAlt || entry.artist.name)}" loading="lazy" />
              <div>
                <strong>${escapeHtml(artistDisplayName(entry.artist))}</strong>
                ${meta ? `<p>${escapeHtml(meta)}</p>` : ""}
              </div>
            </li>
          `;
      })
      .join("");
    const nextTopicLabel = hasAnotherTopic()
      ? "Explore another topic"
      : "Review this topic";
    app.innerHTML = `
          <header class="view-header">
            <h1 class="view-title" id="view-title" tabindex="-1">Your exhibition</h1>
            <p class="view-lead">A wall label for <strong>${escapeHtml(exhibitionTitle)}</strong>.</p>
          </header>
          <section class="exhibition-wall" aria-labelledby="exhibition-wall-heading">
            <h2 id="exhibition-wall-heading" class="exhibition-wall-title" tabindex="-1">${escapeHtml(exhibitionTitle)}</h2>
            <p class="exhibition-wall-text" id="exhibition-wall-text"></p>
            <ol class="exhibition-wall-works">${wallWorks}</ol>
          </section>
          <div class="series-actions-row series-actions-row--stacked exhibition-published-actions">
            <button type="button" class="btn btn--secondary" id="btn-exhibition-back-recap">Back to recap</button>
            <button type="button" class="btn btn--primary" id="btn-exhibition-next-topic">${nextTopicLabel}</button>
            <button type="button" class="btn btn--secondary" id="btn-exhibition-start-over">Start over</button>
          </div>
        `;
    document.getElementById("exhibition-wall-text").textContent = wallText;
    document.getElementById("btn-exhibition-back-recap").onclick = () => {
      state = "result";
      render();
    };
    document.getElementById("btn-exhibition-next-topic").onclick = () => {
      questionIndex = 0;
      answers = [];
      exploredCardIds = new Set();
      compareEntryIds = new Set();
      resetExhibitionSession();
      if (hasAnotherTopic()) {
        selectedTopic = null;
        state = "topic";
      } else {
        state = "explore";
      }
      render();
    };
    document.getElementById("btn-exhibition-start-over").onclick = () => {
      state = "landing";
      questionIndex = 0;
      answers = [];
      selectedSeries = null;
      selectedTopic = null;
      exploredCardIds = new Set();
      compareEntryIds = new Set();
      resetExhibitionSession();
      render();
    };
    focusExhibitionWall();
    return;
  }

  exhibitionPhase = "pick";
  render();
}

render();
