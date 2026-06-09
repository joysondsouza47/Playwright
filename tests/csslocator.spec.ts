import{test,expect,Locator} from "@playwright/test"

//relative css locators
//bytag#id
//bytag.class
//bytag[attribute=value]
//bytag.class[attribute=value]

test("first test", async({page})=>{

    // tag#id
    await page.goto("https://www.saucedemo.com/")

    await page.locator("input#user-name").fill("standard_user");
    await page.locator("input#password").fill("secret_sauce");

    // tag.class
    await page.locator("input.submit-button").click();

    await page.getByText("Sauce Labs Backpack").click();

    // tag[attribute=value]
    await page.locator("button[data-test=add-to-cart]").click();
    await page.locator("button[name=back-to-products]").click();

    // tag.class[attribute=value]
    await page.locator("span.shopping_cart_badge[data-test=shopping-cart-badge]").click();

    await page.locator("button[class*='btn_small']").click();

    await page.locator("button[class$='btn_medium']").click();

    await page.getByRole('button', {name: "Open Menu"}).click();

    await page.locator("a#logout_sidebar_link").click();

    await expect(page.getByTestId("login-button")).toBeVisible();

    //^  starts with.
    //$  ends with
    //*  contains
})