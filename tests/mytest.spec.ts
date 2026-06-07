import {test,expect,Locator} from "@playwright/test"

/* test("title",()=>{

    //step1
    //step2
    //step3
})  */

// async - await 

// fixture = global variable -- page, browser etc
    test("verify page title",async({page})=>{
        await page.goto("https://playwright.dev/docs/intro");
        let word:string = await page.title();
        console.log(word);
        await expect(page).toHaveTitle("Playwright");
    }) 