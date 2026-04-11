import { test, expect } from "@playwright/test";

test("assertions practice", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  // 1. toBeVisible — element exists and is visible and getByRole is a locator
  await expect(page.getByRole("button", { name: "Login" })).toBeVisible();

  // 2. toBeEnabled — element is clickable
  await expect(page.getByPlaceholder("Username")).toBeEnabled();

  // 3. toHaveTitle — page title matches
  await expect(page).toHaveTitle(/Swag Lab/);

  // 4. toHaveURL — URL matches
  await expect(page).toHaveURL(/saucedemo/);

  // 5. toHaveValue — input field has specific value
  await page.getByPlaceholder("Username").fill("standard_user");
  await expect(page.getByPlaceholder("Username")).toHaveValue("standard_user");
});
//wait practice
