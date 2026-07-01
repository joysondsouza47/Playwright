import { test, expect, Locator} from "@playwright/test"


 test.beforeEach("Page URL", async ({page}) => {

        await page.goto("https://testautomationpractice.blogspot.com/");

    });


test.describe("group 1", () => {

    
    test("mouse hover", async ({ page }) => {


        const Pointme_button = page.getByRole('button', { name: 'Point Me' });

        await Pointme_button.hover();

        const laptopOption = page.locator(".dropdown-content a:has-text('Laptops')");

        await laptopOption.hover();

        await page.waitForTimeout(2000);

        const inputbox = page.locator("//input[@id='field1']");

        await inputbox.fill("joyson");

        const copybutton = page.getByRole('button', { name: 'Copy Text' });

        await copybutton.dblclick();

        await page.waitForTimeout(2000);

        const source = page.getByText('Drag me to my target');

        const target = page.getByText('Drop here');

        // await source.hover();

        // await page.mouse.down();

        // await target.hover();

        // await page.mouse.up();

        await page.waitForTimeout(3000);

        // approach 2

        await source.dragTo(target);

        await page.waitForTimeout(3000);


    });

    test.skip("mouse right click", async ({ page }) => {

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    const rightclick = page.locator('span:has-text("right click me")');

    await rightclick.click({ button: "right" });

    const hoverOption = page.locator(':text-is("Copy")');

    await hoverOption.hover();

    await hoverOption.click();

    await page.waitForTimeout(5000);


})

})


