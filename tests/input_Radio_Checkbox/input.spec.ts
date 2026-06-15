import {test, expect, Locator} from "@playwright/test"
import { captureRejectionSymbol } from "node:events";



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

test("Radio test",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

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

test.only("checkbox test",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

   const inputname:Locator = page.locator("#name");
   await inputname.fill("joyson dsouza");
   const radiomalecheck:Locator = page.locator("#male");
   await radiomalecheck.check();
   // 1. Select specific checkbox (Sunday) using getByLabel and assert
   // await page.getByLabel("Sunday").check();

   // 2. Select all checkboxes and assert each is checked
   let days:string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

   const checkboxes:Locator[] = days.map(index => page.getByLabel(index))

   for(const checkbox of checkboxes)
   {
      await checkbox.check();
      await expect(checkbox).toBeChecked();
   }
  
   await page.waitForTimeout(3000);

   // 3. Uncheck last 3 checkboxes and assert
   for(const checkbox of checkboxes.slice(-3))
   {
      await checkbox.uncheck();
      await expect(checkbox).not.toBeChecked();
   }
  
   await page.waitForTimeout(3000);

   //  4. Toggle checkboxes: 
   for(const checkbox of checkboxes)
   {
      if(await checkbox.isChecked())
      {
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
      }
      else
      {
            await checkbox.check();
            await expect(checkbox).toBeChecked();
      }

   }
   await page.waitForTimeout(3000);

   // 5.  Uncheck all
   
   for(const checkbox of checkboxes)

      if(await checkbox.isChecked())
      {
         await checkbox.uncheck();
      }

   await page.waitForTimeout(3000);  

   // 6. Randomely select check boxes - Select checkboxes by index (0,2,4,6) and assert
      const indexes:number[] = [0,2,4,6];

      for(const i of indexes)
      {
            await checkboxes[i].check();
            await expect(checkboxes[i]).toBeChecked();
      }
   await page.waitForTimeout(3000);   

   // 7. select checkbox by label name 

   const weekname:string = 'Friday'

   for(const label of days)
   {
      if(weekname.toLowerCase()===label.toLowerCase())
      {
          const checkboxlabel = page.getByLabel(label);
          await checkboxlabel.check();
          await expect(checkboxlabel).toBeChecked();
         
      }
   }

   await page.waitForTimeout(3000);  
})