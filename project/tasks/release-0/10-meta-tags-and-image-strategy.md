# Task 10 — Meta tags and image strategy

Improve shareability, SEO basics, and image delivery for real deployment.

## Acceptance criteria

- `<head>` includes a concise `<meta name="description" content="...">` aligned with the landing promise.
- Open Graph tags present: `og:title`, `og:description`, `og:type`, `og:url` (or note if URL is placeholder), `og:image` pointing to an existing absolute or deploy-relative asset if applicable.
- Document in [Tasks index](../README.md) or [screens.md](../../docs/screens.md): recommended way to serve the app so `../images/` resolves (local server root, static host structure).
- **Optional stretch:** `srcset` or WebP variants for hero or card images; document fallback.

## How to test

1. View page source; validate meta tags with Facebook Sharing Debugger or similar (if URL public).
2. Load app from documented base path; all images 200 OK in network tab.
3. Lighthouse “SEO” category: no missing description warning.

## Definition of done

- Meta requirements met; image paths verified for chosen host.
- Optional image formats documented if not implemented.
