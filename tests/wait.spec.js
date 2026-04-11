import { test, expect } from "@playwright/test";
test("waits practice - saucedemo", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // Wait for URL to change
  await page.waitForURL(/inventory/);

  // Wait for product list to appear
  await page.waitForSelector(".inventory_list");

  // Now assert both
  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText("Products")).toBeVisible();

  //logout
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

  //assert back to login page
  await expect(page).toHaveURL(/saucedemo.com/);
  await expect(page.getByPlaceholder("Username")).toBeVisible();

  console.log("All waits passed!");
});
