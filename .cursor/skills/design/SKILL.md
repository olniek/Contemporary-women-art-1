---
name: design
description: >-
  Applies the Women Artists learning app visual system—Gen Z feminist aesthetic,
  design tokens, shared components, learner-facing copy, and accessible UI patterns.
  Use when styling screens, polishing layout, adding UI components, improving visual
  hierarchy, choosing colors/typography, or doing design review on project/index.html,
  project/styles/main.css, or render templates in project/js/.
user-invocable: true
allowed-tools: "Read Write Edit Glob Grep"
metadata:
  version: "1.0.0"
---

# Design — Women Artists app

## Before changing anything

1. Read [project/styles/main.css](project/styles/main.css) `:root` tokens and the component block you will touch (grep class names first).
2. Read [project/docs/screens.md](project/docs/screens.md) for the view’s purpose, elements, and interaction rules.
3. Skim existing markup in [project/js/](project/js/) for the target view—reuse class names; do not invent parallel styling.
4. After UI changes, run `npm test` from the repo root if flows or selectors may shift.

## Design intent

| Principle | Application |
|-----------|-------------|
| **Calm learning** | Generous whitespace, one primary action per view, muted secondary text |
| **Contemporary + feminist** | Purple–magenta brand gradient, soft mesh background (`body::before`), lime accent sparingly |
| **Card-first exploration** | Frosted surfaces, pill buttons, light shadows—not heavy borders or skeuomorphism |
| **Accessible by default** | Visible `:focus-visible`, 44px+ touch targets, semantic headings, no focus traps |

Voice matches the landing page: warm, curious, learner-facing—never dev labels (`Question screen`, raw `Explanation` headers).

## Workflow

```
Understand view (screens.md) → Reuse tokens & classes → Minimal CSS delta →
Verify keyboard/focus → npm test if DOM/classes changed
```

### CSS rules

- **Tokens first:** New colors, radii, spacing → add or reuse `--*` variables in `:root`; avoid raw hex in component rules unless documenting a one-off.
- **Extend, don’t fork:** Prefer `.btn`, `.btn--primary`, `.view-header`, `.view-title`, `.artist-card`, `.quiz-option` over new button/card systems.
- **Motion:** Respect `@media (prefers-reduced-motion: reduce)`—disable transforms/transitions on interactive elements when adding animation.
- **Focus:** Never remove outlines without an equivalent. Global pattern: `outline: 2px solid var(--color-accent); outline-offset: 3px` on `:focus-visible`.
- **Layout width:** Content lives in `main#app` (`max-width: var(--max-w)`). Use `clamp()` for responsive type like existing `.view-title` / `.landing-title`.

### Markup rules (rendered HTML)

- **One `<main>`** — already `#app` in [project/index.html](project/index.html); views render inside it.
- **Heading pattern:** One logical `h1` per view (or documented `h2` + `aria-labelledby`); no skipped levels for visual-only titles.
- **Buttons:** `<button type="button">` with `.btn` modifiers; primary CTA gets `.btn--primary`.
- **User strings:** Keep `escapeHtml` for interpolated text; static copy can be literal in templates.
- **Post-render focus:** After full `render()`, focus documented target (`h1[tabindex="-1"]` or primary CTA)—match existing view behavior.

### Copy checklist

- Learner-facing section titles (e.g. “Why this answer”, “Curator note”)—not internal doc names.
- Hints: short, `color: var(--color-muted)`, max ~42ch (see `.view-lead`, `.quiz-hint`).
- CTAs: verb-first (“Explore photography”, “Continue to quiz”)—not “Submit” unless form semantics require it.

## Component quick reference

| Pattern | Classes | Notes |
|---------|---------|-------|
| Page header | `.view-header`, `.view-title`, `.view-lead` | Frosted panel; title + supporting line |
| Primary / secondary CTA | `.btn`, `.btn--primary`, `.btn--secondary` | Pill shape; min-height ~2.85rem |
| Flow progress | `.flow-stepper`, `.flow-step--current` etc. | UI-only; current step uses brand gradient |
| Landing | `.landing`, `.landing-hero`, `.landing-title`, `.landing-cta` | Display emphasis via `.landing-title-line--emph` |
| Medium pick | `.series-grid`, `.series-card`, `.series-card--{id}`, `.series-card-icon`, `.series-card-label`, `.series-card-blurb` | Per-medium gradient + icon color via `--series-*` tokens; SVG from `seriesIconMarkup()` in `app.js` (`aria-hidden` on icon) |
| Topic pick | `.topic-panel`, `.exhibition-pick` | Hover uses token borders/shadows |
| Artwork grid | `.artist-grid`, `.artist-card`, `.is-flipped` | Flip state must be clear to AT (`aria-expanded` / labels) |
| Quiz | `.quiz-stack`, `.quiz-option`, `.quiz-feedback-heading` | Selected option: `:has(.quiz-option-input:checked)` |
| Screen-reader only | `.sr-only` | Visually hidden, available to AT |

Full token list and typography scale: [reference.md](reference.md).

## Accessibility (non-negotiable)

- **Contrast:** Body text on `--color-bg` / `--color-surface`; primary buttons use `--color-accent-contrast` on gradient.
- **Touch:** Interactive controls ≥ 44px where possible (buttons, skip link, flip cards).
- **Cards:** `role="button"` controls need visible focus matching `.artist-card:focus-visible` / global outline.
- **States:** Disabled buttons stay visibly disabled; don’t rely on color alone for quiz selection (checked radio + border).
- **Reduced motion:** Any new transition must be listed in the existing `prefers-reduced-motion` block.

## Scope boundaries

| Do | Don’t |
|----|-------|
| Token tweaks, new utility classes, view-specific layout | Framework migration, dependency upgrades, redesign unrelated views |
| Match [screens.md](project/docs/screens.md) structure | Change quiz length rules or navigation without product task |
| Update E2E specs if copy/selectors change | Remove skip link or focus management without replacement |

## Verification

1. **Visual:** Serve from documented root ([project/docs/screens.md](project/docs/screens.md)); check mesh background, gradient CTAs, card grid at mobile + desktop.
2. **Keyboard:** Tab order matches visual order; Space/Enter on cards and radios; Enter on primary button.
3. **Automated:** `npm test` — update [project/e2e/](project/e2e/) if visible copy or roles change.

## Anti-patterns

- New color palette outside `:root` tokens
- Generic “card” with box-shadow unrelated to `--shadow-apple`
- All-caps labels (app uses sentence case, slight negative letter-spacing on titles only)
- Hiding focus for “cleaner” UI
- Dev-facing or Wikipedia-tone copy on learner screens
- Inline `style=""` in templates when a class exists or should be added once in CSS
