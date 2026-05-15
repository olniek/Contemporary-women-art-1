# Task 07 — Exploration cards and live feedback

Harden flip-card accessibility and optionally announce quiz result feedback for screen readers.

## Acceptance criteria

### Exploration cards

- Flipped vs not flipped state is exposed to assistive tech (`aria-expanded` on the control, or an equivalent pattern that passes spot-check).
- Focus styles on `.artist-card` match other buttons (contrast, 2px outline or design-system equivalent).
- `aria-label` (or name) reflects flip state, e.g. includes “showing details” when back face is logically visible—wording consistent with implementation (CSS flip).

### Live regions (optional but scoped)

- If implemented: score or “correct/incorrect” on the after-question screen uses `aria-live="polite"` on a single region without duplicating all question text.
- If not implemented: document “no live region in v1” and rely on focus management (Task 06).

## How to test

1. Keyboard: Tab to a card, Enter/Space to flip, verify announced or visible state change matches card face.
2. Screen reader: flip card, confirm name/state update is sensible.
3. If live region: trigger after-question screen; confirm one polite announcement, no spam on timer.

## Definition of done

- Card criteria met; optional live region either works or is explicitly deferred in this file’s notes.
- No duplicate heart buttons stealing focus unexpectedly (regression check).

**Notes (optional):** Implemented `aria-live="polite"` on the after-question screen (`#quiz-feedback-live`) for a short correct / not quite announcement; exploration cards use `aria-expanded` and updated labels (Task 07 card criteria).
