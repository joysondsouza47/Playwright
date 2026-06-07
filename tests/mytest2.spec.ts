import {test,expect} from "@playwright/test"

/* test("title",()=>{

    //step1
    //step2
    //step3
})  */

// async - await 

// fixture = global variable -- page, browser etc
    test("verify page URL",async({page})=>{
        await page.goto("https://playwright.dev/docs/intro");
        let url:string = await page.url();
        console.log(url);
        await expect(page).toHaveURL("https://playwright.dev/docs/intro"); // /playwright.dev/
    }) 