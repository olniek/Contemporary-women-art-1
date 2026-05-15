# Task 02 — Quiz answer requirement

Make quiz progression explicit: either require a selected option before continuing or offer a labeled “Skip” (or equivalent) so empty answers are intentional, not accidental.

## Acceptance criteria

- **Option A (recommended for simplicity):** “Next” is disabled until a radio is selected, OR clicking “Next” without a selection shows an inline message and does not advance.
- **Option B:** A visible “Skip for now” (or similar) stores an intentional empty/sentinel state and “Next” requires one of {selection, skip}.
- Product copy briefly explains what skipping means for scoring (e.g. counts as incorrect or “not answered”).
- Behavior is the same for every question in the active bank (`getActiveQuizQuestions()`).

## How to test

1. Reach the first quiz question; without choosing an option, try to proceed—verify the chosen option A or B behavior.
2. Select an option, proceed, return is not required if not implemented; verify answer is stored and reflected on the result screen.
3. If skip exists: skip one question, finish quiz, confirm result summary labels that row clearly.
4. Keyboard: Tab to radios, select with Space, activate primary button with Enter.

## Definition of done

- Implementation matches written acceptance (A or B) and is documented in a one-line comment or in [Tasks index](../README.md) under the task table.
- No silent empty answers unless the user explicitly skipped (if skip is implemented).
- Task 00 edge case “Next with no selection” is re-tested and closed.
