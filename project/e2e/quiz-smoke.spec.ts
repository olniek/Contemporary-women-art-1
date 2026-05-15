import { expect, test } from "@playwright/test";

import type { Page } from "@playwright/test";

async function navigateToExploreGrid(page: Page) {
  await page.goto("/project/index.html");
  await page.getByRole("button", { name: "Begin" }).click();
  await page.getByRole("button", { name: "Photography" }).click();
  await page.getByRole("button", { name: "Start exploring" }).first().click();
  await page.locator(".artist-card").nth(0).click();
  await page.locator(".artist-card").nth(1).click();
}

async function parseQuizTotal(page: Page): Promise<number> {
  const progress = page.getByText(/^Progress: \d+ of \d+$/);
  const text = await progress.first().textContent();
  const match = text?.match(/of (\d+)/);
  const total = Number(match?.[1]);
  if (!Number.isFinite(total) || total < 1) {
    throw new Error(`Could not parse quiz total from: ${text ?? "(empty)"}`);
  }
  return total;
}

test("quiz progress total matches result score denominator", async ({
  page,
}) => {
  await navigateToExploreGrid(page);
  await page.getByRole("button", { name: "Continue to quiz" }).click();

  const total = await parseQuizTotal(page);
  expect(total).toBeGreaterThan(0);

  for (let i = 0; i < total; i++) {
    await page.locator('input[name="choice"]').first().check();
    await page.getByRole("button", { name: "Next" }).click();
    await page.getByRole("button", { name: "Continue" }).click();
  }

  await expect(page.locator("#line-score")).toHaveText(
    new RegExp(`Score: \\d+ of ${total} correct\\.`)
  );
});
