import {test,expect,Locator} from "@playwright/test"



test("test 1" , async({page})=> {

    await page.goto("https://www.w3schools.com/html/html_tables.asp")

    //self

    await expect(page.locator("//td[text()='Germany']/self::td")).toBeVisible();

    // child

    await expect(page.locator("//table[@id='customers']//tr[2]/child::td[2]")).toHaveText("Maria Anders");

    // parent

    const coulms:Locator = page.locator("//th[text()='Company']/parent::tr");

    console.log(await coulms.textContent());

    // 
})