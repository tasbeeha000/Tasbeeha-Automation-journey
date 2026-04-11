import { test, expect } from "@playwright/test";

test.describe("Login Test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com");
  });

  test("valid login", async ({ page }) => {
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();
    await page.waitForURL(/inventory/);
    await expect(page).toHaveURL(/inventory/);
  });

  test("invalid login", async ({ page }) => {
    // page is already on saucedemo — no need to goto again!
    await page.getByPlaceholder("Username").fill("wronguser");
    await page.getByPlaceholder("Password").fill("wrongpass");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.locator('[data-test="error-button"]')).toBeVisible();
  });
  test("Empty login", async ({ page }) => {
    // page is already on saucedemo — no need to goto again!
    await page.getByPlaceholder("Username").fill("");
    await page.getByPlaceholder("Password").fill("");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.locator('[data-test="error-button"]')).toBeVisible();
  });

  test("logout", async ({ page }) => {
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();
    await page.waitForURL(/inventory/);
    await expect(page).toHaveURL(/inventory/);
    await page.getByRole("button", { name: "Open Menu" }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await expect(page).toHaveURL(/saucedemo.com/);
    await expect(page.getByPlaceholder("Username")).toBeVisible();
  });
});
