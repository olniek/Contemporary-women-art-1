# Task 04 — Rename explore screen state

Rename the `state === "series"` branch (artwork grid / topic exploration) to a name that reflects UX (e.g. `"explore"`) and update all transitions.

## Acceptance criteria

- The string literal used for the artwork-grid screen is meaningful (e.g. `"explore"`), not `"series"`.
- Every transition that set or read `"series"` for this screen is updated (`topic` → explore, explore → `question`, favorites return, etc.).
- Favorites and quiz flows still work; no dead states.
- Comments or small doc note in code clarifies: “series” = medium (photography, …), “explore” = artwork grid for chosen topic.

## How to test

1. Grep the codebase for the old state token and confirm it only appears in historical docs if at all.
2. Full flow: landing → series → topic → explore → favorites → back → continue to quiz → result.
3. Regression: “Back” from explore returns to topic selection with correct series context.

## Definition of done

- All references updated; `render()` has no branch for the old name.
- Manual test pass complete; optional: add assertion in Task 12 tests for state names if tests inspect internals.
