import {test,expect, Locator} from "@playwright/test"




test("Project1", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const loginusername:Locator = page.getByPlaceholder("Enter Name");
    const loginemail:Locator = page.getByPlaceholder("Enter EMail");
    const loginphonenumber:Locator = page.getByPlaceholder("Enter Phone");
    const loginaddress:Locator = page.getByLabel("Address:");

    const maleradiobutton:Locator = page.locator("#male");
    const femaleradiobutton:Locator = page.getByLabel("Female");

    await loginusername.fill("Joyson Dsouza");
    await loginemail.fill("joysondsouza@gmail.com");
    await loginphonenumber.fill("9945636877");
    await loginaddress.fill("Blue bell corner Near St Mary's SchooL, Undedhasarahalli, Chikmagalore: 577101");

    await maleradiobutton.check();
    await page.waitForTimeout(2000);
    await expect(maleradiobutton).toBeChecked();
    await femaleradiobutton.check();
    await expect(maleradiobutton).not.toBeChecked();
    await expect(femaleradiobutton).toBeChecked();

  
    let checkdays:string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    // check any specific checkbox

    // await page.getByLabel("Sunday").check();


    // check all the check box

    for(const text of checkdays)
    {

        const checkbox:Locator = page.getByLabel(text);
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }

    await page.waitForTimeout(2000);

    // uncheck last 3 checkboxes

    for (const text of checkdays.slice(-3))
    {

        const checkbox:Locator = page.getByLabel(text);
        await checkbox.uncheck()
        await expect(checkbox).not.toBeChecked();
    }

    await page.waitForTimeout(2000);

    // uncheck all
    for(const text of checkdays)
    {
        const checkbox:Locator = page.getByLabel(text);
        if(await checkbox.isChecked())
            
        {
            await checkbox.uncheck();
        }
        await expect(checkbox).not.toBeChecked();

    }
     await page.waitForTimeout(2000);
    // check random checkboxes

    const index:number[] = [0,2,4,6];
    for (const i of index)
    {

        const checkbox:Locator = page.getByLabel(checkdays[i]);
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
    await page.waitForTimeout(2000);
})
