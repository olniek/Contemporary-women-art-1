import { expect, test } from "@playwright/test";

import type { Page } from "@playwright/test";

async function openApp(page: Page) {
  await page.goto("/project/index.html");
}

test("landing shows title and primary CTA", async ({ page }) => {
  await openApp(page);

  await expect(
    page.getByRole("heading", {
      name: "Learn contemporary art through women artists",
    })
  ).toBeVisible();

  const cta = page.locator("#btn-landing-cta");
  await expect(cta).toBeVisible();
  await expect(cta).toHaveText("Begin");

  await cta.click();
  await expect(page.getByRole("button", { name: "Photography" })).toBeVisible();
});

test("all curated media paths are visible and enabled", async ({ page }) => {
  await openApp(page);
  await page.getByRole("button", { name: "Begin" }).click();

  await expect(page.getByRole("button", { name: "Photography" })).toBeEnabled();
  await expect(page.getByRole("button", { name: "Painting" })).toBeEnabled();
  await expect(page.getByRole("button", { name: "Sculpture" })).toBeEnabled();
  await expect(page.getByRole("button", { name: "Performance" })).toBeEnabled();
  await expect(page.getByRole("button", { name: "Video Art" })).toBeEnabled();
});
