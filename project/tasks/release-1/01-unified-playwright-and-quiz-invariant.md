# Release 1 — Task 01 — Unified Playwright suite and quiz invariant

**Origin:** Code review — `npm test` (root [playwright.config.ts](../../../playwright.config.ts)) only runs [project/e2e/](../../e2e/); the `getActiveQuizQuestions()` / `newEmptyAnswers()` length invariant lives under [project/tests/smoke.spec.js](../../tests/smoke.spec.js) with a separate [project/playwright.config.js](../../playwright.config.js), so the invariant is easy to miss in the default workflow.

## Goal

One obvious test entrypoint and no duplicated config drift.

## Acceptance criteria

- Running **`npm test` from the repository root** executes **all** automated checks intended for this app, including a direct assertion that `newEmptyAnswers(topic).length === getActiveQuizQuestions(topic).length` for at least one real topic (e.g. photography’s first topic), **or** an equivalent invariant that fails if the bank and answer buffer sizing diverge.
- Either remove the orphan [project/playwright.config.js](../../playwright.config.js) + [project/tests/](../../tests/) setup, or reduce it to a thin documented wrapper that delegates to the root config (no second `testDir` / port story without explanation).
- [project/tasks/README.md](../README.md) and [project/README.md](../../README.md) (if it documents tests) mention the single command and where specs live.

## How to test

1. From a clean shell at repo root: `npm test` — expect the new invariant spec to run and pass.
2. Temporarily break `newEmptyAnswers` or `getActiveQuizQuestions` contract in [project/js/data.js](../../js/data.js); confirm at least one test fails with a clear message.

## Definition of done

- Green `npm test` from workspace root; no conflicting Playwright configs unless explicitly documented.

## Implementation notes (2026-05)

- Invariant lives in [`project/e2e/quiz-data-invariant.spec.ts`](../../e2e/quiz-data-invariant.spec.ts); `project/playwright.config.js` and `project/tests/smoke.spec.js` were removed.
- [`project/tasks/README.md`](../README.md) and [`project/README.md`](../../README.md) document the single `npm test` entrypoint.
