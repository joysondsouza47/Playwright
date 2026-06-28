import{test,expect,Locator,chromium} from "@playwright/test"


test("browser context page1 ", async({browser})=>{


    // const browser = await chromium.launch();
    const context = await browser.newContext();


// creating pages
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await page1.goto("https://testautomationpractice.blogspot.com/");
    const title1 = await page1.title();
    expect(title1).toBe("Automation Testing Practice")
    await page1.waitForTimeout(1000);


    await page2.goto("https://www.saucedemo.com/");
    const title2 = await page2.title();
    expect(title2).toBe("Swag Labs")
    await page1.waitForTimeout(1000);

})

test("browser context page2", async({})=>{


    const browser = await chromium.launch();
    const context = await browser.newContext();


// creating pages
    const page1 = await context.newPage();

    await page1.goto("https://testautomationpractice.blogspot.com/");
    const title = await page1.title();
    expect(title).toBe("Automation Testing Practice")
    await page1.waitForTimeout(1000);

    const [page2] = await Promise.all([context.waitForEvent('page'),page1.getByRole('button', { name: 'New Tab' }).click()])

    const pages = context.pages();
    console.log("number of pages:", pages.length);

    console.log("title of the main page:", await page1.title());
    console.log("title of the child page:", await page2.title());

    console.log("title of the main page:", await pages[0].title());
    console.log("title of the child page:", await pages[1].title());


})

test.only("browser context page3", async({})=>{


    const browser = await chromium.launch();
    const context = await browser.newContext();


// creating pages
    const page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");
    const title = await page.title();
    expect(title).toBe("Automation Testing Practice")
    await page.waitForTimeout(1000);

    await Promise.all([page.waitForEvent('popup'),page.locator("#PopUp").click()])  // creating a child page
    await Promise.all([context.waitForEvent('page'),page.getByRole('button', { name: 'New Tab' }).click()])  //creating a child page


    await page.waitForTimeout(3000);
    const pages = context.pages();
    console.log("number of pages:", pages.length);
    
    for(const i in pages)
    {
        console.log("URL of the pages:", pages[i].url());
    }


    for(const p1 of pages)
    {
        const title = await p1.title()
        console.log("title of pages:",await p1.title())
        if(title.includes("Playwright"))
        {
            await p1.locator('.getStarted_Sjon').click();
            await page.waitForTimeout(500);
            await p1.close();
            await page.waitForTimeout(500);
        }

    }
        await pages[1].close();
    await page.waitForTimeout(1000);
})