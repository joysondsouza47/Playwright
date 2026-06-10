import{test,expect,Locator} from "@playwright/test"


test("css test 2", async({page})=>{


await page.goto("https://www.saucedemo.com/")

await page.locator("//input[@placeholder='Username']").fill("standard_user");
await page.locator("//input[@data-test='password']").fill("secret_sauce");
await page.locator("//html/body/div/div/div[2]/div[1]/div/div/form/input[@type='submit']").click();

})