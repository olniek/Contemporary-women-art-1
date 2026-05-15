# Task 03 — In-quiz navigation decision

Decide whether users can move backward between questions during the quiz, and implement or document the decision.

## Acceptance criteria

- **If implementing Back:** User can return to a previous question; prior selections remain; `questionIndex` and `answers` stay in sync; no duplicate or skipped indices.
- **If not implementing:** UX or help text states that quiz cannot be edited after “Next” (or equivalent), OR users can exit only via browser refresh / restarting flow—this limitation is documented in [../../docs/screens.md](../../docs/screens.md) or in-app copy.
- Decision is recorded in this repo (this file’s “Decision” section below, or linked doc).

## How to test

### If Back is implemented

1. Answer Q1, go to Q2, press Back; confirm Q1 shows the saved answer.
2. Change Q1 answer, proceed through remaining questions; confirm scoring uses the updated answer.
3. From Q1, Back either exits to explore or is hidden—behavior matches spec.

### If not implemented

1. Confirm documentation and/or UI messaging match actual behavior.
2. Confirm support or FAQ (if any) does not promise in-quiz editing.

## Decision

_Record the chosen approach here after product review._

- **Chosen approach:** No backward navigation between quiz questions in v1.
- **Rationale:** Keeps scoring and state simple; users are warned on each question that they cannot change an answer after continuing. Full reset remains available via **Start over** on the result screen or by restarting from the landing flow.

## Definition of done

- “Decision” section above is filled in.
- Implementation or docs match the decision; Task 00 scenarios updated if needed.
