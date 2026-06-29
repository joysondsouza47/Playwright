import { test, expect, Locator } from "@playwright/test"


test("auto-wait", async ({ page }) => {

    //test.setTimeout(50000);

    //let timestamp = Date.now();
   function getTimestamp(): string {
    const now = new Date();

    return now
    .toLocaleString("sv-SE") // Format: YYYY-MM-DD HH:mm:ss
    .replace(" ", "_")
    .replace(/:/g, "-");
}

const timestamp = getTimestamp();

    await page.goto("https://www.demoblaze.com/index.html");

    await page.screenshot({path:'screenshots/homepage'+timestamp+'.png'});

    await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

    const login = page.getByRole('link', { name: 'Log in' });
    await login.click();

    const loginusername = page.locator('#loginusername');
    const loginpassword = page.locator('#loginpassword');
    const loginbutton = page.getByRole('button', { name: 'Log in' });
    const cancelbutton = page.locator('button.btn.btn-secondary:visible');

    page.once('dialog', async (Dialog) => {

        console.log("error message : ", Dialog.message());
        await Dialog.accept();
        expect(Dialog.message()).toBe("Please fill out Username and Password.");
    })
    //await loginbutton.screenshot({path:'screenshots/homepage'+timestamp+'.png'}); screen shot
    await loginbutton.click();

    await page.waitForTimeout(1000);

    await loginusername.fill("joyson");
    await loginpassword.fill("joy123");
    await loginbutton.click();
    //await cancelbutton.click();
    //await page.waitForTimeout(1000);
    //await expect.soft(page.getByRole('link', { name: 'Log in' })).toBeVisible({ timeout: 6000 });// soft assertion
    //
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible({ timeout: 6000 }); // expect timeout 
    

})