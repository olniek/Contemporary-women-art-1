# Task 00 — Manual review baseline (recorded)

Findings from exercising the flow in `project/docs/screens.md` against `project/index.html` (served per that doc from the workspace root).

## Happy path

- Landing → medium → topic → explore grid → favorites → quiz → result → explore another topic / start over works when served over `http://` with root that includes `project/` and `images/`.

## Edge cases

| Scenario | Behavior (v1) |
|----------|----------------|
| Back from topic grid | Returns to medium selection; topic cleared. |
| Back from explore | Returns to topic list for current medium. |
| Empty favorites | Copy explains how to add hearts; Back returns to explore if a medium was selected, else medium picker. |
| Quiz Next with no selection | **After Task 02:** Next is disabled until a radio is chosen. |
| Hard refresh | Full reset (acceptable for v1; session not persisted beyond `localStorage` favorites). |

## Assets

- Images use `../images/...` (and a few remote placeholders). Serve the **workspace root** (parent of `project/`), not `project/` alone, so `../images/` resolves. See `project/docs/screens.md`.

## UI vs `screens.md`

- Quiz uses topic-specific banks when `topic.quiz` has five items; otherwise a shared art-aligned legacy bank (not “one shared trivia set” only)—doc updated to match.
- In-quiz **Back** is not offered; copy states answers cannot be changed after Continue—doc updated.

## Stakeholders

- Refresh-always-resets (except favorites in `localStorage`) is treated as acceptable for v1 unless product says otherwise.
