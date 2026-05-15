# Design reference — tokens & typography

Source of truth: [project/styles/main.css](project/styles/main.css). Update this file only when tokens change materially.

## Color tokens

| Token | Role |
|-------|------|
| `--color-bg` | Page background base (`#f6f2ff`) |
| `--color-surface` | Cards, buttons default fill |
| `--color-text` | Primary copy |
| `--color-text-subtle` | Slightly softer body |
| `--color-muted` | Supporting copy, stepper inactive |
| `--color-faint` | Upcoming flow steps |
| `--color-border` | Light purple tint borders |
| `--color-border-strong` | Emphasis borders |
| `--color-accent` | Purple focus / links (`#7c3aed`) |
| `--color-accent-2` | Magenta gradient stop |
| `--color-accent-hover` | Darker purple hover |
| `--color-accent-contrast` | Text on gradient buttons |
| `--color-accent-muted` | Soft purple wash backgrounds |
| `--color-lime` | Accent highlight (use sparingly) |
| `--gradient-brand` | Primary CTA, current flow step |
| `--gradient-soft` | Subtle fills |
| `--series-photo-*` … `--series-video-*` | Per-medium icon color, card gradient, ring tint (see `:root` in main.css) |

### Medium card modifiers

Each `seriesOptions` id maps to `.series-card--{id}` (`photography`, `painting`, `sculpture`, `performance`, `videoArt`). Cards set `--series-icon-color`, `--series-card-bg`, and `--series-card-ring` from the `--series-*` token group. Do not add inline colors in templates.

## Space, radius, shadow

| Token | Value role |
|-------|------------|
| `--space-xs` … `--space-xl` | Vertical rhythm between blocks |
| `--radius-ui` / `--radius-sm` | Panels, inputs |
| `--radius-lg` | Larger cards |
| `--radius-pill` | Buttons, stepper chips, skip link |
| `--shadow-apple` | Default elevation (also `--shadow-card`, etc.) |
| `--max-w` | `68.75rem` — app column |
| `--ease` | `0.25s cubic-bezier(0.25, 0.1, 0.25, 1)` |

## Typography

| Token | Usage |
|-------|--------|
| `--font-system` | Headings `h1–h3`, UI chrome |
| `--font-display` | Bricolage Grotesque — landing display lines |
| `--font-body` | Body, buttons |
| Base size | `16px`, `line-height: 1.55` on `body` |
| `.view-title` | `clamp(1.4rem, 3.8vw, 2rem)`, weight 600 |
| `.landing-title` | Larger display; emphasis line uses gradient text class |

## Background mesh

Fixed pseudo-layer on `body::before`: three radial gradients (magenta, purple, lime) over `--color-bg`. Do not duplicate heavy gradients on every card—use `--color-surface` + `--color-border` for local depth.

## Favorites & icons

Heart / favorite controls use existing classes in main.css (grep `favorite`). Keep hit area ≥ 44px and an accessible name (`aria-label` / visible text).

## Image assets

- Paths relative to serve root (see project docs); prefer `loading="lazy"` on grids.
- Card images: rounded corners consistent with `.artist-card` inner radius.
- Placeholder strategy documented in release-1 tasks—do not break aspect ratio boxes when swapping assets.

## View → primary classes

| View (screens.md) | Key classes |
|-------------------|-------------|
| Landing | `.landing`, `.landing-hero`, `.landing-example` |
| Series selection | `.series-grid`, `.series-card-wrap`, `.series-card`, `.series-card--{id}`, `.series-card-icon`, `.series-card-svg`, `.series-card-label`, `.series-card-blurb` |
| Topic selection | `.topic-grid`, `.topic-panel` |
| Artwork exploration | `.artist-grid`, `.artist-card`, favorites controls |
| Quiz | `.quiz-stack`, `.quiz-progress`, `.quiz-option` |
| Result | `.view--center`, score/result blocks in render templates |
| Favorites | `.view-header`, empty state copy |

## E2E-sensitive copy (update specs if changed)

Landing CTA, series/topic labels, quiz progress text (`Progress: … of N`), result score line—these are asserted in [project/e2e/](project/e2e/).
