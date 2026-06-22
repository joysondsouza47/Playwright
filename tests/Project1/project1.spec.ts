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

    const checkboxes:Locator[] = checkdays.map(index => page.getByLabel(index));

    // check any specific checkbox

    // await page.getByLabel("Sunday").check();


    // check all the check box

    for(const checkbox of checkboxes)
    {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }

    await page.waitForTimeout(2000);

    // uncheck last 3 checkboxes

    for (const checkbox of checkboxes.slice(-3))
    {

        await checkbox.uncheck()
        await expect(checkbox).not.toBeChecked();
    }

    await page.waitForTimeout(2000);

    // uncheck all
    for(const checkbox of checkboxes)
    {
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

        await checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked();
    }
    await page.waitForTimeout(2000);


    const selectoption:Locator = page.locator("#country");
    const dropdown:Locator = page.locator('select#country option');

    console.log(await dropdown.count()); 
    console.log(await dropdown.allInnerTexts())
    const dropdowntext:string[] = (await dropdown.allTextContents()).map(text=> text.trim());
    console.log(dropdowntext);

    for(const text of dropdowntext){

        await selectoption.selectOption(text);
        

    }

    

    const selectoption2:Locator = page.locator("#colors");
    const dropdown2:Locator = page.locator('select#colors option');

    console.log(await dropdown2.count()); 
    console.log(await dropdown2.allInnerTexts())
    const dropdowntext2:string[] = (await dropdown2.allTextContents()).map(text=> text.trim());
    console.log(dropdowntext2);

    for(const text of dropdowntext2){

        await selectoption2.selectOption(text);
        await page.waitForTimeout(2000);

    }

})
