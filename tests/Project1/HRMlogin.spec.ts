import {test, expect, Locator} from "@playwright/test"


test("Login test", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const titlepage:string = await page.title();
    console.log(titlepage);

    expect(titlepage).toBe("OrangeHRM")

    const loginusername:Locator = page.getByPlaceholder("Username");
    const loginpassword:Locator = page.getByPlaceholder("Password");
    const loginbutton:Locator = page.getByRole('button',{name:'Login'});

    await loginusername.fill("Admin");
    await loginpassword.fill("admin123");
    await loginbutton.click();

    await page.waitForTimeout(2000);

    const dashboardPIM:Locator = page.locator("a[href='/web/index.php/pim/viewPimModule']");
    await dashboardPIM.click();

    const addbutton:Locator = page.locator("button[class='oxd-button oxd-button--medium oxd-button--secondary']");
    await addbutton.click();

    const addfirstname:Locator = page.getByPlaceholder('First Name');
    const addmiddlename:Locator = page.getByPlaceholder('Middle Name');
    const addlastname:Locator = page.getByPlaceholder('Last Name');
    const addemployeeid:Locator = page.getByLabel('Employee Id');

    await addfirstname.fill("joyson")
    await addmiddlename.fill("");
    await addlastname.fill("Dsouza");

    await page.waitForTimeout(2000);

})

 