import { test, expect } from "@playwright/test";

test("playwright has correct title", async ({ page }) => {
  await page.goto("https://playwright.dev", { timeout: 6000 });
  const title = await page.title();
  console.log("page title is :", title);
  await expect(page).toHaveTitle(/Playwright/, { timeout: 6000 });
});

test("wikipeida has correct title", async ({ page }) => {
  await page.goto("https://www.wikipedia.org/", { timeout: 6000 });
  const title = await page.title();
  console.log("page title is :", title);
  await expect(page).toHaveTitle(/Wikipedia/, { timeout: 6000 });
});

test("sauce demo has title", async ({ page }) => {
  await page.goto("https://saucedemo.com", { timeout: 6000 });
  const title = await page.title();
  console.log("page title is :", title);
  await expect(page).toHaveTitle(/djflds/);
});
