# Release 1 — Task 04 — Production Open Graph and hosting URLs

**Origin:** Code review — [project/index.html](../../index.html) still uses `https://example.com/...` for `og:url` and `og:image`. Release 0 [Task 10](../release-0/10-meta-tags-and-image-strategy.md) added tags; production needs a real origin so share previews resolve.

## Acceptance criteria

- `og:url` and `og:image` (and related tags if you add them) resolve for the **actual** deployment base URL, or are generated from a single documented build-time variable / comment block that operators must fill (no permanent `example.com` in the shipped default without an explicit “template” callout).
- [project/docs/screens.md](../../docs/screens.md) or [project/README.md](../../README.md) states how static hosting maps `/project/` and `/images/` so crawlers and users get a working `og:image` URL.
- Optional: verify with a sharing debugger (Facebook, Slack, iMessage) and record result in this task’s notes.

## How to test

1. Deploy or serve from the real host; fetch `index.html` and confirm absolute OG URLs return 200 for `og:image`.
2. Relative image paths in the app still work per documented server root.

## Definition of done

- No placeholder domain left in production artifact unless product accepts a documented template build step.

## Implementation notes (2026-05)

- [`project/index.html`](../../index.html) uses **root-relative** `og:url` and `og:image` (no `example.com`). Hosting and crawler resolution are documented in [`project/docs/screens.md`](../../docs/screens.md) and [`project/README.md`](../../README.md).
- **Optional sharing-debugger pass:** not run in this environment; verify on deploy with Facebook Sharing Debugger or Slack unfurl if needed.
