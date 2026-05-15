# Art learning app (static)

## Run the app locally

Serve the **repository root** (the folder that contains both `project/` and `images/`), then open the app:

- [docs/screens.md](docs/screens.md) — URLs and static server commands.

## Automated E2E smoke tests (Playwright)

From the **repository root** (`Cursor/`, parent of this folder):

```bash
npm ci
env -u PLAYWRIGHT_BROWSERS_PATH npx playwright install chromium
npm test
```

If another local process is already using the default test port (`8000`), run
with a different app port:

```bash
ART_APP_PORT=8002 npm test
```

`postinstall` runs `playwright install chromium` with the same env unset so browsers land in the default OS cache. If your environment sets `PLAYWRIGHT_BROWSERS_PATH` to a cache that was populated for a different CPU architecture, unset it (as above) before install and test.

## Product scope

The current MVP intentionally makes **Photography** the live path. Painting,
Sculpture, and Performance stay visible as coming-soon directions until their
topics have real women-artist entries, preview images, and bespoke quiz content.
The quiz unlocks after a learner flips at least two artwork cards, so assessment
follows observation rather than a skip-through.

Photography currently has two topic modules. Each topic owns its quiz and selects
its five exploration cards with `artistIndexes`, so future topics can reuse the
artist library without accidentally showing the wrong card set.
Every live card is expected to carry title/year/medium metadata, a credit note,
alt text, and a valid self-hosted image or named local study card.

### Coverage

From the repo root, **`npm test`** runs every spec in [e2e/](e2e/), including:

- Landing and grid navigation smoke
- Full quiz run (progress total vs result denominator)
- Direct invariant: `newEmptyAnswers(topic).length === getActiveQuizQuestions(topic).length` for every Photography topic ([`e2e/quiz-data-invariant.spec.ts`](e2e/quiz-data-invariant.spec.ts); see [tasks/release-1/01-unified-playwright-and-quiz-invariant.md](tasks/release-1/01-unified-playwright-and-quiz-invariant.md))
- Content validation for live Photography topics: five card indexes, five quiz questions, metadata, alt text, credit notes, and existing image files.

Deeper flows (back navigation, empty favorites, quiz Next with no selection) are not automated here. There is no second Playwright config under `project/`; the former `project/tests/` suite was merged into `e2e/`.
