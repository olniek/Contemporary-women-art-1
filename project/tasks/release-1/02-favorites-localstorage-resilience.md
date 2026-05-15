# Release 1 — Task 02 — Favorites `localStorage` resilience

**Origin:** Code review — [project/js/app.js](../../js/app.js) wraps `loadFavoriteIds` in `try/catch` but `saveFavoriteIds` calls `localStorage.setItem` unguarded; private mode, quota, or disabled storage can throw and break the favorite toggle handler.

## Acceptance criteria

- Writes to favorites storage do not surface as uncaught exceptions to the user: wrap save path (and any other `setItem` on the same key) in a defensive pattern.
- If persistence fails, UX remains usable (e.g. in-session toggle still updates UI; optional subtle non-blocking feedback is acceptable if copy is learner-appropriate and not dev-jargony).
- Behavior documented in this file if you choose silent degradation vs visible message.

## How to test

1. Happy path: like/unlike still persists when storage works.
2. Simulate failure (DevTools → Application → Local Storage → block, or quota / override `setItem` in a debug build): toggling favorites must not blank the page or leave controls broken.

## Definition of done

- Manual or automated check noted here; no new console errors on the happy path.

## Implementation notes (2026-05)

- **`saveFavoriteIds`** in [`project/js/app.js`](../../js/app.js) wraps `localStorage.setItem` in `try/catch`. **Behavior:** silent degradation—hearts still update in-session when storage throws (private mode, quota, blocked storage), but the choice is not persisted across reloads. No toast or banner (keeps copy non-technical).
- **Manual check:** toggle hearts with storage working; with Application panel blocking storage for the origin, confirm toggles still flip pressed state and the page does not throw.
- **`saveNotes`** uses the same silent `try/catch` pattern as favorites (2026-05 explore polish).
