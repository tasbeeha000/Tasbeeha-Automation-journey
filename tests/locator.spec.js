import { test, expect } from "@playwright/test";

test("locators", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await expect(page.getByRole("button", { name: "login" })).toBeVisible();
  await expect(page.getByPlaceholder("Username")).toBeEnabled();
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  await page.screenshot({ path: "screenshots/saucedemo-login.png" });

  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText("Products")).toBeVisible();
});
