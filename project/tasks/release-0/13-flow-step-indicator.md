# Task 13 — Flow step indicator (Explore → Quiz → Result)

Add a small, **UI-only** progress strip on the artwork exploration, quiz, and result views so learners see where they are in the session flow. No new navigation behavior, URL state, or persistence.

## Acceptance criteria

- Exploration (artwork grid), quiz (question and post-answer steps), and result screens each show the same **three-step** pattern with labels appropriate to the product tone (e.g. Explore → Quiz → Result, or equivalent learner-facing wording consistent with [../../index.html](../../index.html)).
- The **current** step is visually distinct from completed and upcoming steps (e.g. weight, color, or simple stepper styling).
- Steps are **not** interactive controls unless every implied action already exists today; default is **plain text** so users are not invited to jump backward in the quiz.
- Optional but recommended: the active step exposes `aria-current="step"` (or equivalent) on the appropriate element for assistive tech.
- No regression in escaping: any dynamic text still uses `escapeHtml` or `textContent` as appropriate; static copy only is fine for this strip.
- Implementation lives in existing render paths and styles ([../../js/app.js](../../js/app.js) or split modules after Task 11, plus [../../styles/main.css](../../styles/main.css)).

## How to test

1. From a topic, open the exploration grid: confirm the strip shows **step 1** active.
2. Start the quiz: confirm **step 2** active on both the question view and the post-answer (feedback) view.
3. Finish the quiz: on the result screen, confirm **step 3** active.
4. Resize to a narrow viewport: strip remains readable without overlapping primary actions.
5. Keyboard / screen reader spot-check: strip does not trap focus; optional announcement of `aria-current` is sensible.

## Definition of done

- Acceptance criteria above are met with no new console errors.
- If Task 12 specs assert fixed copy or layout, update [../../e2e/](../../e2e/) in the same change so `npm test` stays green; otherwise note “no E2E change required” in the PR/commit if smoke remains unchanged.
