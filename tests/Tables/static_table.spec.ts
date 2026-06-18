import{test,expect,Locator} from "@playwright/test"


test("Table title",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table:Locator = page.locator("table[name=BookTable]>tbody");

    const rows:Locator = table.locator("tr");

    console.log(await rows.allInnerTexts());

    const rowscount:number= await rows.count();

    console.log(rowscount);

    const columns:Locator = rows.nth(1).locator("td");

    const columncount:number = await columns.count();

    console.log(columncount);

    console.log(await columns.allInnerTexts());

    



})