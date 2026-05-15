import { expect, test } from "@playwright/test";

import type { Page } from "@playwright/test";

async function navigateToExploreGrid(page: Page) {
  await page.goto("/project/index.html");
  await page.getByRole("button", { name: "Start your first series" }).click();
  await page.getByRole("button", { name: "Photography" }).click();
  await page.getByRole("button", { name: "Start exploring" }).first().click();
}

test("first series and first topic reach artwork grid", async ({ page }) => {
  await navigateToExploreGrid(page);

  await expect(page.locator(".artist-card").first()).toBeVisible();
  const continueButton = page.getByRole("button", { name: "Continue to quiz" });
  await expect(continueButton).toBeVisible();
  await expect(continueButton).toBeDisabled();
  await expect(page.locator("#explore-readiness-note")).toHaveText(
    "Flip 2 cards before the quiz. 0 of 2 viewed."
  );

  await page.locator(".artist-card").nth(0).click();
  await page.locator(".artist-card").nth(1).click();

  await expect(page.locator("#explore-readiness-note")).toHaveText(
    "You have enough context to try the quiz."
  );
  await expect(continueButton).toBeEnabled();
});

test("topics control which artwork cards appear", async ({ page }) => {
  await page.goto("/project/index.html");
  await page.getByRole("button", { name: "Start your first series" }).click();
  await page.getByRole("button", { name: "Photography" }).click();
  await page
    .getByRole("button", { name: "Start exploring" })
    .nth(1)
    .click();

  await expect(
    page.getByRole("button", {
      name: /Susan Meiselas — show back for context and insight/,
    })
  ).toBeVisible();
  await expect(
    page.getByRole("button", {
      name: /Carrie Mae Weems — show back for context and insight/,
    })
  ).toHaveCount(0);
});

test("favorites screen ignores saved entries from disabled media", async ({
  page,
}) => {
  await page.goto("/project/index.html");
  await page.evaluate(() => {
    localStorage.setItem(
      "quizArtistFavorites",
      JSON.stringify(["photography:0", "painting:1"])
    );
  });

  await page.getByRole("button", { name: "Start your first series" }).click();
  await page.getByRole("button", { name: "Photography" }).click();
  await page.getByRole("button", { name: "Start exploring" }).first().click();
  await page.getByRole("button", { name: "See favorites" }).click();

  await expect(page.getByText("Zanele Muholi")).toBeVisible();
  await expect(page.getByText("Emil Corot")).toHaveCount(0);
});

test("compare mode accepts two artworks", async ({ page }) => {
  await navigateToExploreGrid(page);

  await page.getByRole("button", { name: /Compare Zanele Muholi/ }).click();
  await expect(page.getByText("Choose one more artwork")).toBeVisible();

  await page.getByRole("button", { name: /Compare Nan Goldin/ }).click();
  await expect(page.locator(".compare-item")).toHaveCount(2);
  await expect(page.getByText(/What changes between these two works/)).toBeVisible();
});
