# Screens (UX Structure)

## 1. Landing

### Purpose
Introduce the product and encourage entry.

### Elements
- Title
- Subtitle
- Example (image + insight)
- Primary call to action (medium selection follows on the next screen)

---

## 2. Series Selection

### Purpose
Let user choose a medium.

### Elements
- Page header: **Choose a medium** + lead line
- Grid of five medium cards (Photography, Painting, Sculpture, Performance, Video Art)
- Each card: decorative SVG icon (`.series-card-icon`), label, optional **Soon** badge when disabled, and description blurb below the button
- Per-medium color via modifier classes (`.series-card--photography`, `--painting`, `--sculpture`, `--performance`, `--videoArt`); icons from `seriesIconMarkup()` in `project/js/app.js`

---

## 3. Topic Selection

### Purpose
Introduce curatorial themes within a series.

### Elements
- Topic title
- Short description
- Preview image
- Start button

Example:
"Christian figures in contemporary photography"

Photography currently includes two live topics:
- "Christian figures in contemporary photography"
- "Staged selves and performed identity"

---

## 4. Artwork Exploration

### Purpose
Let user explore the topic visually before being tested.

### Structure (card-based)

Each card includes:
- Image (primary)
- Artist name
- Work/study title, year, medium
- Short description (context)
- Key insight (meaning)

### Interaction
- **Implemented:** five artworks in a **grid**; **flip** a card to read description and key insight; **notebook** field pinned at the bottom of the card back (scroll artist copy above); **favorites** (hearts) optional. No quiz on this screen.
- **Quiz readiness:** Continue to quiz unlocks only after at least two cards have been flipped.
- Focus on observation and interpretation

---

## 5. Quiz Screen

### Purpose
Test understanding of the topic as a whole.

### Structure
- Question related to theme (not specific artwork)
- 3 answer options
- **Next** is available only after you select an option (empty answers are not submitted by accident)
- Copy notes that you cannot revise an answer after **Continue**; there is no in-quiz **Back**

### After answer
- **Why this answer** (short explanation)
- **Curator note** (interpretive insight)
- **Continue** (there is no “Back” to change a prior answer; see Implementation notes)

---

## 6. Result Screen

### Purpose
Summarize understanding and guide continuation.

### Elements
- Score
- Key ideas from the topic
- What you practiced
- Saved insights from favorited artists, when present
- **Curate a mini exhibition** (optional capstone)
- Next topic button
- Start over button

---

## 7. Mini Exhibition (post-result capstone)

### Purpose
Let the learner synthesize three works from the topic into a titled mini show with generated wall text.

### Flow
1. **Choose three works** — Checkboxes on the five topic cards; favorites may be pre-selected; Continue requires exactly three.
2. **Order your wall** — Move up / move down on the chosen trio (left-to-right encounter).
3. **Title your exhibition** — Required text field (max 80 characters).
4. **Your exhibition** — Read-only wall label (template from topic thesis, work insights, optional notebook note or topic synthesis) plus ordered work list.

### Exit
- **Back to recap** returns to the result screen without clearing quiz scores.
- **Explore another topic** / **Start over** from the published screen (same as result actions); exhibition session state resets on topic change or start over.

---

## Implementation notes (`project/index.html`)

| UX section | In the app today |
|------------|------------------|
| Landing | Title, subtitle, example figure (image + sample insight), **Start your first series**. |
| Series selection | All five media are selectable cards with per-medium icons and gradient fills; responsive grid (2 → 3 → 5 columns). Each medium has three topics with five-card grids and dedicated quiz banks. |
| Topic selection | One panel per topic (Photography topics use preview images); **Start exploring** → grid. **Back** returns to series selection. |
| Artwork exploration | Five flip cards in a **grid**; interaction is flip and favorites, not swipe. Each topic chooses its own card set via `artistIndexes`. Card backs show artist, work/study metadata, context, and key insight. **Continue to quiz** unlocks after two flipped cards. |
| Quiz | Shows **Topic:** line; uses the topic’s `quiz` array when it has **five** items, otherwise the shared **legacy** bank (`legacyQuizQuestions` in `project/js/data.js`)—all aligned to the art mission, not generic trivia. No backward navigation between questions. |
| Result | Score, detail lines, **Key ideas from the topic**, **What you practiced**, optional **Saved insights** and **What you noticed**, **Curate a mini exhibition**, **Explore another topic** when another topic exists, **Start over** (landing + cleared session). |
| Mini exhibition | Post-result optional flow: pick 3 → order → title → published wall text (`state === "exhibition"` in `project/js/app.js`). |

## Decisions (confirmed)

Matches `flow.md`: **favorites**, **flip cards**, **five-card grid**, and a focused Photography MVP. Non-Photography media stay visible as coming soon until real women-artist topics, images, and quizzes are ready. Some live Photography artists use named local study cards until final licensed/self-hosted artwork imagery is added; every live card should still have title/year/medium metadata and a credit note in `seriesArtists`.

---

## Local static server

The app loads images via paths like `../images/...` from [`project/index.html`](../index.html). Styles and logic load as `./styles/main.css` and `./js/app.js` (ES modules). Serve the **workspace root** (the directory that contains both `project/` and `images/`), not the `project/` folder alone, so those URLs resolve.

| Path on the server | Maps to |
|-------------------|---------|
| `/project/index.html` | App entry |
| `/images/...` | Curated PNGs and [`images/placeholders/`](../../images/placeholders/) SVG study tiles |

1. From the workspace root: `python3 -m http.server 8000`
2. Open: `http://localhost:8000/project/index.html`

Alternative: `npx --yes serve .` from the same root, then open `/project/index.html` on the URL the tool prints.

Use `http://` (not `file://`) when checking asset loading.

## Deploy on Vercel

1. Import [Contemporary-women-art-1](https://github.com/olniek/Contemporary-women-art-1) and leave **Root Directory** empty (repository root, not `project/`). `images/` must sit beside `project/` so `../images/...` paths resolve.
2. Framework preset: **Other** (no build). Root [`vercel.json`](../../vercel.json) sets `outputDirectory` to `.` and rewrites `/` → `/project/index.html`.
3. Production URL: open the deployment root or `/project/index.html` directly.

## Share / SEO (`<head>`)

- The page includes `meta description` and Open Graph tags. **`og:url` and `og:image` use root-relative paths** (`/project/index.html`, `/images/francesca-woodman-card.png`) so crawlers resolve them against the **same origin** as the shared link. If you deploy behind an unusual base path or CDN that does not treat those as site-root paths, replace them in [`project/index.html`](../index.html) with full `https://…` URLs for your host.
