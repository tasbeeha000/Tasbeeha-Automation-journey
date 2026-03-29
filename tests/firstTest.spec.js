import { test, expect } from "@playwright/test";
test("google has correct title", async ({ page }) => {
  await page.goto("https://www.google.com");
  const title = await page.title();
  console.log("Page title is:", title);
  await expect(page).toHaveTitle(/Google/);
});

test("claude has correct title", async ({ page }) => {
  await page.goto("https://anthropic.com", { timeout: 6000 });
  const title = await page.title();
  console.log("page title is :", title);
  await expect(page).toHaveTitle(/Anthropic/, { timeout: 6000 });
});

test("github has correct title", async ({ page }) => {
  await page.goto("https://github.com", { timeout: 60000 });

  const title = await page.title();
  console.log("Page title is:", title);

  await expect(page).toHaveTitle(/GitHub/, { timeout: 60000 });
});
test("sauce demo has title", async ({ page }) => {
  await page.goto("https://saucedemo.com");
  const title = await page.title();
  console.log("Page title is ", title);
  await expect(page).toHaveTitle(/Swag Labs/);
});
