# Release 1 — Task 03 — Quiz feedback heading structure

**Origin:** Code review — post-answer screen uses `<p class="quiz-feedback-heading">` for sections such as “Why this answer” and “Curator note,” which are structural titles, not body copy. Release 0 [Task 05](../release-0/05-semantic-landmarks-headings.md) asked for consistent real headings where layout titles carry meaning.

## Acceptance criteria

- Quiz feedback view uses real heading elements (e.g. `h2`/`h3`) for those section titles, consistent with the chosen pattern for the rest of the app (one `h1` per view remains on the feedback step).
- No skipped heading levels relative to the rest of that view; styling matches current visual design (reuse classes as needed).
- If [project/e2e/](../../e2e/) asserts roles/text, update specs in the same change.

## How to test

1. VoiceOver / NVDA (or accessibility tree in DevTools): section titles are announced as headings.
2. `npm test` still green.

## Definition of done

- Criteria above met; note any deferral in this file with rationale.

## Implementation notes (2026-05)

- Post-answer sections **Why this answer** and **Curator note** are `<h2 class="quiz-feedback-heading">` under the view `<h1>`. Styling unchanged via existing class. No E2E role assertions required updates.
