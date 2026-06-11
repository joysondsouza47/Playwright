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

    // ancestor
    const ancestor:Locator = page.locator("//td[text()='Francisco Chang']/ancestor::table");

    await expect(ancestor).toHaveAttribute('id','customers');

    // descendant

    await expect(page.locator("//table[@id='customers']/descendant::th[2]")).toHaveText("Contact");


    // following

    await expect(page.locator("//td[normalize-space()='Germany']/following::td[3]")).toHaveText("Mexico");

    // following-sibling

    await expect(page.locator("//td[normalize-space()='Alfreds Futterkiste']/following-sibling::td")).toHaveCount(2);

    // preceding

    const predceding:Locator = page.locator("//td[normalize-space()='Mexico']/preceding::td");

    await expect(predceding).toHaveCount(5);

    console.log(await predceding.allTextContents());

    // preceding-sibling

    await expect(page.locator("//td[normalize-space()='Canada']/preceding-sibling::td")).toHaveCount(2);

})