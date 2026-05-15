# Task 06 — Focus management on navigation

After each full `render()` that replaces `#app` content, move focus to a predictable element so keyboard and screen-reader users are oriented.

## Acceptance criteria

- On every state transition that calls `render()`, focus moves to either the view’s `<h1>` (via `tabindex="-1"` and `.focus()`) or the primary CTA, per a documented rule.
- No focus trap that prevents leaving the page; focus order follows visual order.
- Focus ring remains visible (do not `outline: none` without replacement).
- Special cases handled: modals none; favorites list returns focus to “Back” or heading consistently.

## How to test

1. Use keyboard only: from landing, activate CTA; verify focus lands on first interactive control or announced heading target on the next screen.
2. Repeat for: series → topic → explore → quiz → after-question → result.
3. Open VoiceOver (macOS) or NVDA (Windows): navigate after transition; virtual cursor or focus should encounter the title quickly.
4. Check that `document.activeElement` after each transition matches the chosen rule.

## Definition of done

- Focus target is consistent and documented (code comment at top of `render` or helper `focusView()`).
- No regression in click behavior; Safari and Chrome both tested if available.
