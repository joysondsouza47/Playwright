import {test, expect, Locator} from "@playwright/test"


test("demo locator TITLE", async({page})=>{
await page.goto("https://www.saucedemo.com/");
const title:string = await page.title();
console.log(title);
await expect(page).toHaveTitle("Swag Labs");
await expect(page.getByText("Swag Labs")).toBeVisible();


await page.getByPlaceholder("Username").fill("standard_user");
await page.getByPlaceholder("Password").fill("secret_sauce");

await page.getByTestId("login-button").click();

await expect(page.getByAltText("Sauce Labs Backpack")).toBeVisible();
await expect(page.getByText(/29.99/)).toBeVisible();

await page.getByTestId("add-to-cart-sauce-labs-backpack").click();
await page.getByTestId("shopping-cart-link").click();
await page.getByTestId("shopping-cart-link").click();


await page.getByText

})


