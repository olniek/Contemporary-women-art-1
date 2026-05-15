import { expect, test } from "@playwright/test";

import type { Page } from "@playwright/test";

async function completeQuizToResult(page: Page) {
  await page.goto("/project/index.html");
  await page.getByRole("button", { name: "Begin" }).click();
  await page.getByRole("button", { name: "Photography" }).click();
  await page.getByRole("button", { name: "Start exploring" }).first().click();
  await page.locator(".artist-card").nth(0).click();
  await page.locator(".artist-card").nth(1).click();
  await page.getByRole("button", { name: "Continue to quiz" }).click();

  const progress = page.getByText(/^Progress: \d+ of \d+$/);
  const text = await progress.first().textContent();
  const match = text?.match(/of (\d+)/);
  const total = Number(match?.[1]);
  if (!Number.isFinite(total) || total < 1) {
    throw new Error(`Could not parse quiz total from: ${text ?? "(empty)"}`);
  }

  for (let i = 0; i < total; i++) {
    await page.locator('input[name="choice"]').first().check();
    await page.getByRole("button", { name: "Next" }).click();
    await page.getByRole("button", { name: "Continue" }).click();
  }

  await expect(page.getByRole("heading", { name: "How you did" })).toBeVisible();
}

test("mini exhibition publishes wall text with learner title", async ({
  page,
}) => {
  await completeQuizToResult(page);

  await page
    .getByRole("button", { name: "Curate a mini exhibition" })
    .click();
  await expect(
    page.getByRole("heading", { name: "Choose three works" })
  ).toBeVisible();

  const picks = page.locator("[data-exhibition-pick]");
  const count = await picks.count();
  expect(count).toBeGreaterThanOrEqual(5);

  for (let i = 0; i < 3; i++) {
    const box = picks.nth(i);
    if (!(await box.isChecked())) await box.check();
  }

  await page.getByRole("button", { name: "Continue" }).click();
  await expect(
    page.getByRole("heading", { name: "Order your wall" })
  ).toBeVisible();

  await page.getByRole("button", { name: "Continue" }).click();
  await expect(
    page.getByRole("heading", { name: "Title your exhibition" })
  ).toBeVisible();

  const title = "Staged belief under pressure";
  await page.getByLabel("Exhibition title").fill(title);
  await page.getByRole("button", { name: "Publish exhibition" }).click();

  await expect(
    page.getByRole("heading", { name: "Your exhibition" })
  ).toBeVisible();
  await expect(page.locator("#exhibition-wall-heading")).toHaveText(title);
  await expect(page.locator("#exhibition-wall-text")).not.toBeEmpty();
  await expect(page.locator("#exhibition-wall-text")).toContainText(title);
});
