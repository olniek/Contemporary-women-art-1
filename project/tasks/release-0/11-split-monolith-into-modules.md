# Task 11 — Split monolith into modules

Separate CSS, data, and application logic from [../../index.html](../../index.html) to ease content edits and linting.

## Acceptance criteria

- Stylesheet(s) in dedicated file(s) (e.g. `styles/main.css`); linked from HTML.
- Application JS in one or more modules (`state`, `render`, `data` or equivalent); loaded via `type="module"` or a small bundler if chosen.
- Topic/series/artist data can be edited without scrolling through UI logic (separate `data/*.js` or JSON + fetch).
- Opening the app via the documented server still works; relative paths to images remain correct after move.
- README or comment lists build/serve steps if a bundler is added.

## How to test

1. From clean clone, follow serve instructions; complete happy path.
2. Change one string in data file; reload; confirm UI updates without editing render logic.
3. Run formatter/linter if configured; CI optional.

## Definition of done

- [../../index.html](../../index.html) is shell + entry script only (or minimal inline bootstrap).
- No behavior regressions vs pre-split (Task 00 or Task 12 smoke).

**Out of scope unless specified:** npm dependency upgrades, framework migration.
