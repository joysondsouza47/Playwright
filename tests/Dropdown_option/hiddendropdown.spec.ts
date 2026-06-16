import {test, expect, Locator} from "@playwright/test"


test("hidden dropdown", async({page})=>{

    await page.goto("https://www.flipkart.com/")

    await page.waitForTimeout(5000)

    await page.locator("span[class='b3wTlE']").click();

    await page.locator("input:visible").fill("mobile")

    await page.waitForTimeout(5000)

    const options:Locator = page.locator("ul>li");

    await page.waitForTimeout(3000);

    const count = await options.count();

    // console.log(await options.allInnerTexts());

    // console.log(await options.nth(2).innerText());
 

    for(let  i=0; i<count; i++)
    {
        console.log("option",i,":",await options.nth(i).textContent());
        
    }

})  