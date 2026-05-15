# Release 1 — Task 05 — Self-hosted artist placeholder images

**Origin:** Code review — [project/js/data.js](../../js/data.js) uses `https://picsum.photos/...` for many [seriesArtists](../../js/data.js) entries. That adds a runtime dependency on a third party (availability, privacy, CSP, layout stability).

## Acceptance criteria

- Replace remote placeholder URLs with assets under the repo’s [images/](../../../images/) tree (or a single documented CDN you control), keeping paths consistent with “serve workspace root” documented elsewhere.
- Document in [project/docs/screens.md](../../docs/screens.md) or README if operators must sync assets.
- If any external images remain, justify in this file (e.g. licensed hotlinking only) and note CSP implications.

## How to test

1. Airplane mode or block `picsum.photos`: explore grid still loads images for all cards.
2. `npm test` / visual spot-check unchanged layout.

## Definition of done

- No accidental production dependency on `picsum.photos` unless explicitly accepted and documented here.

## Implementation notes (2026-05)

- Practice-artist rows in [`project/js/data.js`](../../js/data.js) use **`../images/placeholders/*.svg`** (repo-local). Operators need only keep the workspace root served so `../images/` resolves; no sync step beyond the repo. **No** third-party placeholder CDN; curated real artworks still use existing PNGs under `images/`.
