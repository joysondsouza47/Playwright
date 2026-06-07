import{test,expect} from "@playwright/test"


test("verify url",async({page})=>{

    await page.goto("https://playwright.dev/");
    let label:any = await page.title();
    console.log("lbl:", label);
    await expect(page).toHaveTitle(/Playwright/);
})

// import{test,expect} from "@playwright/test"


// test("test title", async({page})=>{

// await page.goto("URL");
// let title:string = await page.title();
// console.log("title", title);

// await expect(page).toHaveTitle("title");

// })