import {test, expect, Locator} from "@playwright/test"



test("input test", async ({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/");

   const inputname:Locator = page.locator("#name");

   await expect(inputname).toBeVisible();

   await expect(inputname).toBeEnabled();

   await expect(inputname).not.toBeDisabled();

   const attributevalue = await inputname.getAttribute("maxlength");

   expect(attributevalue).toBe("15");

   await inputname.fill("joyson dsouza");

   const inputtext = await inputname.inputValue();   //inputValue = value given to input field   // innerText = text value already present in the element

   console.log(inputtext);

   expect(inputtext).toBe("joyson dsouza")

   await page.waitForTimeout(3000);

})  //.only runs only the mentioned test

test.only("Radio test",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

const inputname:Locator = page.locator("#name");
await inputname.fill("joyson dsouza");
const radiomalecheck:Locator = page.locator("#male");
await expect(radiomalecheck).toBeVisible();
await expect(radiomalecheck).toBeEnabled();
await expect(radiomalecheck).not.toBeDisabled();
await radiomalecheck.check();
await expect(radiomalecheck).toBeChecked();

// const malebuttonchecked:boolean= await radiomalecheck.isChecked();
// console.log(malebuttonchecked);
// expect(malebuttonchecked).toBe(true)

expect(await radiomalecheck.isChecked()).toBe(true);


})