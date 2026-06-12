import {test, expect, Locator} from "@playwright/test"



test("test title", async ({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/");

   await page.getByPlaceholder("Enter Name").fill("joyson");
   await page.getByPlaceholder("Enter EMail").fill("joysondsouza@gmail.com");
   await page.getByPlaceholder("Enter Phone").fill("9945636877");
   await page.locator("#textarea").fill("area")


   await page.waitForTimeout(3000);

})