import{test, expect, Locator} from "@playwright/test"


test("css test 1", async({page})=>{

await page.goto("https://www.saucedemo.com/");

await expect(page.getByTitle("Swag Labs")).toBeHidden();

await page.locator("input#user-name").fill("standard_user");
await page.locator("html>body>div>div>div:last-child>div:first-child>div>div>form>div:nth-child(2)>input#password").fill("secret_sauce"); // absolute cssselector
await page.locator("html>body>div>div>div:last-child>div:first-child>div>div>form>input.submit-button").click();


await expect(page.locator("span.title")).toBeVisible()
await page.locator("button[name=add-to-cart-sauce-labs-bike-light][id=add-to-cart-sauce-labs-bike-light]").click();   // multiple attribute both should match
await page.locator("button[name=add-to-cart-sauce-labs-backpack]:not([id=add-o-cart-sauce-labs-backpack])").click();  // :not second attribute is wrong
await page.locator("button:not([name=ad-to-cart-sauce-labs-bike-light])[id=add-to-cart-sauce-labs-bolt-t-shirt]").click(); // :not first is wrong

const majorlink:Locator = page.locator("button:not([name=ad-to-cart-sauce-labs-bike-light]):not([id=add-to-cart-sauce-labs-bolt-t-shirt])"); 

await page.locator("button[id$=labs-onesie]").click();   // $ last words
await page.locator("button[name*=red]").click(); //* contains these words
await page.locator("button.btn[name=add-to-cart-sauce-labs-fleece-jacket]").click();  // tag.class[attribute=value]



})