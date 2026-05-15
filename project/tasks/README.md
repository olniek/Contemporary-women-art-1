# Task backlog

Breakdown of [../plan/app-review-and-improvements.md](../plan/app-review-and-improvements.md). Work is grouped by **release**; acceptance criteria in each task file stay authoritative.

**Agent / engineering checklist:** [`.cursor/rules/project-tasks-implementation.mdc`](../../.cursor/rules/project-tasks-implementation.mdc) — Cursor project rule (update paths below when implementing).

| Release | Scope | Folder |
|--------|--------|--------|
| **Release 0** | Baseline shipped: tasks 00–13 (manual baseline, copy, quiz UX, a11y, data, meta, split app, smoke, flow stepper) | [release-0/](release-0/) |
| **Release 1** | Follow-ups from engineering review (tests, resilience, a11y polish, deploy URLs, assets) | [release-1/](release-1/) |

## Release 0 (completed)

| ID | Task |
|----|------|
| 00 | [Manual review walkthrough](release-0/00-manual-review-walkthrough.md) |
| 01 | [Learner-facing screen copy](release-0/01-learner-facing-screen-copy.md) |
| 02 | [Quiz answer requirement](release-0/02-quiz-answer-requirement.md) |
| 03 | [In-quiz navigation decision](release-0/03-in-quiz-navigation-decision.md) |
| 04 | [Rename explore screen state](release-0/04-rename-explore-screen-state.md) |
| 05 | [Semantic landmarks and headings](release-0/05-semantic-landmarks-headings.md) |
| 06 | [Focus management on navigation](release-0/06-focus-management-on-navigation.md) |
| 07 | [Exploration cards and live feedback](release-0/07-exploration-cards-live-feedback.md) |
| 08 | [Quiz selection rules and reset](release-0/08-quiz-selection-rules-and-reset.md) |
| 09 | [Art-aligned quiz content](release-0/09-art-aligned-quiz-content.md) |
| 10 | [Meta tags and image strategy](release-0/10-meta-tags-and-image-strategy.md) |
| 11 | [Split monolith into modules](release-0/11-split-monolith-into-modules.md) |
| 12 | [Automated smoke tests](release-0/12-automated-smoke-tests.md) |
| 13 | [Flow step indicator](release-0/13-flow-step-indicator.md) |

Baseline notes: [release-0/REVIEW-NOTES.md](release-0/REVIEW-NOTES.md)

**Task 02 (R0) implementation:** Option A — the **Next** control stays **disabled** until a quiz radio is selected (documented in `project/js/app.js`).

## Release 1 (active)

| ID | Task |
|----|------|
| 01 | [Unified Playwright suite and quiz invariant](release-1/01-unified-playwright-and-quiz-invariant.md) |
| 02 | [Favorites `localStorage` resilience](release-1/02-favorites-localstorage-resilience.md) |
| 03 | [Quiz feedback heading structure](release-1/03-quiz-feedback-heading-structure.md) |
| 04 | [Production Open Graph and hosting URLs](release-1/04-production-open-graph-and-hosting.md) |
| 05 | [Self-hosted artist placeholder images](release-1/05-self-hosted-artist-placeholder-images.md) |
| 06 | [Mini exhibition capstone](release-1/06-mini-exhibition-capstone.md) |

Suggested order: **01** (CI truth), **02** (small hardening), **03** (pairs with R0 Tasks 05–07), **04**–**05** when preparing a public deploy, **06** after result flow is stable.

**Tests:** Run **`npm test` from the repository root** (see root `playwright.config.ts`). All specs live under [e2e/](e2e/); Release 1 Task 01 folded the old `project/tests/` invariant into that folder and removed the duplicate `project/playwright.config.js`.
