import { test, expect } from "@playwright/test";

// test("sauce demo login", async ({ page }) => {
//   await page.goto("https://www.saucedemo.com");
//   await expect(page.getByRole("button", { name: "login" })).toBeVisible();
//   await expect(page.getByPlaceholder("Username")).toBeEnabled();
//   await page.getByPlaceholder("Username").fill("standard_user");
//   await page.getByPlaceholder("Password").fill("secret_sauce");
//   await page.getByRole("button", { name: "Login" }).click();
//   await page.screenshot({ path: "screenshots/saucedemo-login.png" });

//   await expect(page).toHaveURL(/inventory/);
//   await expect(page.getByText("Products")).toBeVisible();
// });
//login test for the
// test("login Test Positive", async ({ page }) => {
//   await page.goto("https://practicetestautomation.com/practice-test-login/");
//   await page.getByLabel("Username").fill("student");
//   await page.getByLabel("Password").fill("Password123");
//   await page.getByRole("button", { name: "Submit" }).click();
//   await expect(page).toHaveURL(
//     "https://practicetestautomation.com/logged-in-successfully/",
//   );
//   await expect(page.getByText(/successfully logged in/)).toBeVisible();
// });

test("Negative - invalid username", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await page.getByLabel("Username").fill("incorrectUser");
  await page.getByLabel("Password").fill("Password123");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.locator("#error")).toBeVisible();
  await expect(page.locator("#error")).toHaveText("Your username is invalid!");
});

test("Negative - invalid password", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await page.getByLabel("Username").fill("student");
  await page.getByLabel("Password").fill("incorrectPassword");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.locator("#error")).toBeVisible();
  await expect(page.locator("#error")).toHaveText("Your password is invalid!");
});
