# Task 12 — Automated smoke tests

Add minimal automated checks for navigation and quiz invariants so refactors (Tasks 04, 08, 11) do not silently break flows.

## Acceptance criteria

- Test runner chosen (Playwright recommended for full DOM, or Vitest + jsdom if state is exported/testable).
- At least these scenarios automated **or** explicitly deferred with issue link:
  - Landing visible; primary CTA exists.
  - Navigating to first series and first topic reaches artwork grid (or explore state).
  - `getActiveQuizQuestions()` length matches `answers` initialization when entering quiz (if functions are importable). **Implemented:** UI proxy — full quiz run asserts the `Progress: … of N` total matches the result line `Score: … of N correct.` until Task 11 exposes shared quiz helpers or a test hook.
- Tests run with one command documented in root or `project/README.md` (e.g. `npm test`).
- CI optional: GitHub Action or note “run locally before release.” **Note:** Run tests locally before release (no CI wired yet).

## How to test

1. `npm test` (or equivalent) passes on clean install.
2. Intentionally break a selector; confirm test fails.
3. After Task 11, update imports/paths; tests still pass.

## Definition of done

- Green test run; instructions committed.
- Coverage scope documented (smoke only vs deeper a11y).

**Command:** From repository root: `npm ci && env -u PLAYWRIGHT_BROWSERS_PATH npx playwright install chromium && npm test` (see [project/README.md](../../README.md); `postinstall` installs Chromium; unset `PLAYWRIGHT_BROWSERS_PATH` if your environment points at a mismatched browser cache).

**Coverage scope:** Smoke only — landing CTA, first-series/first-topic grid, quiz length consistency via UI. Not deep a11y; manual cases in Task 00 remain optional future specs.
