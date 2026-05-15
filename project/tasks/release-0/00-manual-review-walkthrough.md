# Task 00 — Manual review walkthrough

Establish a baseline of current behavior and gaps before or alongside code changes.

## Acceptance criteria

- Happy path in [../../docs/screens.md](../../docs/screens.md) is exercised end-to-end at least once (landing through result, including favorites).
- Edge cases are recorded: back navigation from topic grid, empty favorites, quiz “Next” with no option selected, hard refresh mid-flow.
- Asset loading is confirmed for the intended environment (e.g. local static server vs `file://`).
- A short note lists any mismatch between live UI and the screens doc (copy, counts, interactions).

## How to test

1. Open [../../index.html](../../index.html) the same way users will (document the URL or command, e.g. `npx serve`).
2. Run through: landing → pick each series once → one topic → flip cards → like/unlike → favorites → quiz → result → “Explore another topic” and “Start over”.
3. From topic selection, use Back; from favorites, use Back with and without a series context.
4. On a quiz question, press Next without selecting a radio; note stored behavior and UI.
5. Reload the browser during explore and during quiz; note whether state reset is acceptable.
6. Confirm images load (no broken `../images/...` icons).

## Definition of done

- Findings are written down (this repo’s issue list, a `REVIEW-NOTES.md`, or annotated checklist in this folder).
- Stakeholders agree whether refresh-always-resets is acceptable for v1.
- Checklist items in [../../plan/app-review-and-improvements.md](../../plan/app-review-and-improvements.md) can be checked off or explicitly deferred with rationale.
