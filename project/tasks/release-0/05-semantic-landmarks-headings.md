# Task 05 — Semantic landmarks and headings

Improve document outline and landmarks so each screen has a proper heading structure and main region.

## Acceptance criteria

- Primary app content lives inside a single `<main>` element (in static HTML shell or injected wrapper), with `id` suitable for skip links if desired.
- Each distinct view exposes one primary heading (`<h1>`) **or** a single `<h2>` with `aria-labelledby` pointing to visible title text—pick one pattern and apply consistently.
- Decorative or redundant `<p>` tags used only for layout titles are replaced with headings where they introduce a section.
- No heading level skips that confuse assistive tech (e.g. `h1` then `h4` without `h2`/`h3`).

## How to test

1. Install or use browser accessibility tree inspector (Firefox, Chrome) and list headings for landing, series select, topic select, explore, quiz, result, favorites.
2. Run WAVE or axe on each major screen and fix landmark/heading warnings introduced by this change.
3. Keyboard-only: Tab from page load; first focusable should be sensible relative to `<main>`.

## Definition of done

- Validator / a11y tool shows improved or stable heading/landmark structure.
- Visual design unchanged unless headings require minor CSS class reuse.
- Documented in PR or commit message which pattern (`h1` per view vs. `h2` + labelledby) was chosen.
