import {test, expect, Locator} from "@playwright/test"



test("singledropdown", async({page})=>
{

    await page.goto("https://testautomationpractice.blogspot.com/");

    // await page.getByLabel("Country:").selectOption("France");

    // await page.waitForTimeout(2000);

    // await page.getByText("Country:").selectOption("Australia");

    // await page.waitForTimeout(2000);

    // await page.locator("#country").selectOption("Canada");

    // await page.waitForTimeout(2000);

    // await page.locator("#country").selectOption({value:'uk'});

    // await page.waitForTimeout(2000);

    // await page.locator("#country").selectOption({label:'Japan'});

    // await page.waitForTimeout(2000);

    // await page.locator("#country").selectOption({index:7});

    // await page.waitForTimeout(2000);

    const dropdown:Locator = page.locator("select#country>option");

    await expect(dropdown).toHaveCount(10)

    const newarray:string[]= (await dropdown.allTextContents()).map(text=> text.trim());

    console.log(newarray);

    for(const word of newarray)
    {
        await page.locator("#country").selectOption(word);
        await page.waitForTimeout(2000);
    }

})