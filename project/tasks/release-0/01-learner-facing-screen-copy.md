# Task 01 — Learner-facing screen copy

Replace developer-oriented labels on quiz and result screens with copy that matches the product tone (calm, curatorial, learner-centered).

## Acceptance criteria

- No user-visible strings that read literally as `"Question screen"` or `"Result screen"`.
- Section labels on the post-answer step are learner-facing (not raw `"Explanation"` / `"Curator insight"` unless wrapped in clearer hierarchy, e.g. “Why this answer” / “Curator note”).
- New copy is consistent with the landing page voice (see [../../index.html](../../index.html) title and subtitle).
- No regression in escaping: user- or data-driven text still uses `escapeHtml` or `textContent` as appropriate.

## How to test

1. Complete a full quiz through the feedback step and the result screen.
2. Search the rendered DOM or source for the old strings (`Question screen`, `Result screen`) and confirm they do not appear in the UI.
3. Spot-check one topic with a custom quiz and one path that uses the legacy question bank (if still present after other tasks).

## Definition of done

- Changes are in [../../index.html](../../index.html) (or split modules if Task 11 is done).
- A second person or quick self-review confirms wording reads naturally on mobile width.
- This task’s acceptance criteria are satisfied with no new console errors.
