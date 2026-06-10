import{test,expect,Locator} from "@playwright/test"
import { compressDeflate } from "node:zlib/iter";


test("css test 2", async({page})=>{


await page.goto("https://www.saucedemo.com/")

await page.locator("//input[@placeholder='Username']").fill("standard_user");
await page.locator("//input[@data-test='password']").fill("secret_sauce");                                                   // relative xpath starts with //tag[@attribute]
await page.locator("//html/body/div/div/div[2]/div[1]/div/div/form/input[@type='submit']").click();                         // absolute xpath starts with // and between tag we use /

await page.locator("//button[@id='add-to-cart-sauce-labs-backpack' and @name='add-to-cart-sauce-labs-backpack']").click();   // xpath with and operator
await page.locator("//button[@id='remove-sauce-labs-backpack' or @name='add-to-cart-sauce-labs-backpack']").click();         // Xpath with or operator


await page.locator("//button[@id='add-to-cart-sauce-labs-bike-light'][@name='add-to-cart-sauce-labs-bike-light']").click();  //multiple attributes

await page.locator("//button[contains(@id,'sauce-labs-bike')]").click();   //contain() function

await page.locator("//button[starts-with(@id,'add-to-cart-sauce-labs-bolt')]").click();   //starts-with function


// yet to complete
// text()
// last()
// position()

})  