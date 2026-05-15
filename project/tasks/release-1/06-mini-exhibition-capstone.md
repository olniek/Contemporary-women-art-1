# Release 1 — Task 06 — Mini exhibition capstone

**Origin:** Product plan — post-result synthesis: learners choose three works, order them, title the show, and read template-generated wall text.

## Acceptance criteria

1. **Entry:** Result screen offers **Curate a mini exhibition**; exhibition is optional (Explore another topic / Start over remain available from recap).
2. **Flow:** Session state `exhibition` with steps: select exactly 3 of 5 topic works → reorder (move up/down) → title (required, max 80 chars) → publish shows wall text.
3. **Wall text:** Deterministic template from `topic.thesis` / `keyIdeas`, selected artists’ metadata and insights, optional notebook line, else `topic.result.synthesis` — no external API.
4. **Exit:** Back to recap returns to `result` without clearing quiz; topic change and Start over reset exhibition session vars.
5. **A11y:** One `h1` per exhibition step; selection count in `aria-live="polite"`; order buttons have descriptive `aria-label`; focus on wall-text heading after publish.
6. **Docs:** [screens.md](../../docs/screens.md) documents section 7.
7. **E2E:** Playwright path result → exhibition → 3 picks → title → wall text visible; `npm test` green.

## How to test

1. Complete a topic through quiz → result → **Curate a mini exhibition**.
2. Select 3 works, reorder, enter a title, **Publish exhibition** — wall text includes title and artist names.
3. **Back to recap** → result unchanged; re-enter exhibition keeps picks in session.
4. **Explore another topic** or **Start over** clears exhibition state.
5. Run `npm test` from repository root.

## Deferrals

- `localStorage` persistence of past exhibitions.
- Curator Challenge (12-word label) on the same screen — follow-up task.

## Definition of done

- Criteria 1–7 met; full Playwright suite passes.

## Implementation notes (2026-05)

- Exhibition flow wired in [`project/js/app.js`](../../js/app.js) (`state === "exhibition"`, phases pick → order → title → published); result CTA **Curate a mini exhibition**; [`project/e2e/exhibition.spec.ts`](../../e2e/exhibition.spec.ts); section 7 in [`project/docs/screens.md`](../../docs/screens.md).

## Implementation notes (2026-05)

- **`state === "exhibition"`** with phases `pick` → `order` → `title` → `published` in [`project/js/app.js`](../../js/app.js); `renderExhibition()` helper; session vars reset via `resetExhibitionSession()` on Start over / next topic.
- **Entry:** Result screen **Curate a mini exhibition**; favorites in topic pre-checked on first open when picks empty.
- **Wall text:** `buildWallText()` — template from thesis, work lines, notebook note or `topic.result.synthesis`.
- **E2E:** [`project/e2e/exhibition.spec.ts`](../../e2e/exhibition.spec.ts). Run `npm test` (use `ART_APP_PORT` if port 8000 is busy).
