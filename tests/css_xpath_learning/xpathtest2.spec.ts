import {test,expect, Locator} from"@playwright/test"



test("test1", async({page})=>{


await page.goto("https://testpages.eviltester.com/styled/basic-web-page-test.html");


await expect(page.getByRole('heading', {name: "Basic Web Page"})).toBeVisible();

await expect(page.locator("//p[contains(text(),'Very simple')]")).toBeVisible();
await page.locator("//button[text()='Click Me']").click();

await expect(page.locator("//p[@id='click-message']")).toHaveText("You clicked the button!");

const pages:Locator = page.locator("//span[text()='Pages']");

await expect(pages).toHaveCount(2);


await page.locator("//div[@class='taxonomy taxonomy-terms-article taxo-tags']//li[position()=2]").click();

//normalize-space


})

test("text 2",async({page})=>{


    await page.goto("https://www.w3schools.com/html/html_tables.asp");
    await expect(page.locator("//th[position()=3]")).toHaveText("Country");


})