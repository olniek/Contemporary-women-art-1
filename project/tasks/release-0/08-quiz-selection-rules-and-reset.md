# Task 08 — Quiz selection rules and reset

Document and fix how topic quizzes are selected vs legacy `questions`, and align answer array sizing on “Start over” with `quizTotal()` / `getActiveQuizQuestions()`.

## Acceptance criteria

- Rule for when `getActiveQuizQuestions()` uses topic `quiz` vs fallback is documented in code (comment) and matches behavior (e.g. “exactly 5 items” vs “any non-empty array” if changed).
- If the rule changes (e.g. accept `quiz.length > 0`), every topic with partial data behaves predictably—no silent fallback to unrelated trivia without a dev-only warning or user-facing notice.
- “Start over” initializes `answers` with the same length helper used when entering the quiz from explore (e.g. `Array(quizTotal()).fill("")` **after** resetting topic/series if that affects length—or explicit order documented).
- No off-by-one when legacy `questions` length changes in the future.

## How to test

1. Pick a topic with a full 5-item `quiz`; complete quiz; Start over; re-enter quiz; confirm length and scoring still correct.
2. Pick a topic that lacks `quiz` or has fewer than the threshold; confirm which bank loads and that answers array length matches question count.
3. Temporarily add a sixth legacy question in dev; confirm Start over and “Continue to quiz” both size `answers` correctly (or add automated test in Task 12).

## Definition of done

- Comment block above `getActiveQuizQuestions()` explains the contract.
- Reset path uses one shared helper for “new empty answers for current bank” if feasible.
- Task 09 aligned: placeholder legacy questions may be replaced, but rules remain correct.
