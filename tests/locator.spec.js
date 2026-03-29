import { test, expect } from "@playwright/test";
// test("explore saucedemo locators", async ({ page }) => {
//   await page.goto("https://www.saucedemo.com", { timeout: 6000 });
//   await page
//     .getByPlaceholder("Usernagg me")
//     .fill("standard_user", { timeout: 6000 });
//   await page
//     .getByPlaceholder("Password")
//     .fill("secret_sauce", { timeout: 6000 });
//   await page.getByRole("button", { name: "Login" }).click({ timeout: 8000 });
//   console.log("URL after login:", page.url({ timeout: 6000 }), {
//     timeout: 6000,
//   });
//   await expect(page).toHaveURL(/inventory/, { timeout: 60000 });
//   await page.waitForTimeout(6000); // wait 3 seconds before closing
// });
// test("explore sauce demo locator", async ({ page }) => {
//   await page.goto("https://www.saucedemo.com");

//   // const text = page.getByText("Accepted usernames are:");
//   // await expect(text).toBeVisible();
//   // const button = page.getByRole("button");
//   // await expect(button).toBeVisible();
//   //toBeVisible

//   await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
//   //toBeEnanled
//   await expect(page.getByPlaceholder('Username')).toBeEnabled();
//   //toHaveUrl
//   await expect(page).toHaveURL(/invertory/)
// });

test("locators", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await expect(page.getByRole("button", { name: "login" })).toBeVisible();
  await expect(page.getByPlaceholder("Username")).toBeEnabled();
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText("Products")).toBeVisible();
});
