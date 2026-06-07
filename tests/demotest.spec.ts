import {test,expect,Locator} from"@playwright/test"


test("demo test", async({page})=>{

//getByAltText
await page.goto("file:///D:/Automation_Playwright_learning/Playwright/tests/app.html");
const logo:Locator = page.getByAltText("logo image")  //getByAltText
await expect(logo).toBeVisible();

const text:Locator = page.getByText("This paragraph contains some ");  //getByText
await expect(text).toBeVisible();  

await page.getByRole('button',{name:"Primary Action"}).click();
// await page.getByRole('link',{name:"Home"}).click();

await page.getByLabel("username").fill("joyson dsouza");
await page.getByLabel("Email Address:").fill("joysondsouza@gmail.com");
await page.getByLabel("Your Age:").fill("27");
await page.getByLabel(" Standard").click();


await page.getByPlaceholder("Enter your full name").fill("joyson dsouza")
await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("joyson dsouza")
await page.getByPlaceholder("Type your message here...").fill("joyson dsouza")
await page.getByPlaceholder("Search products...").fill("joyson dsouza")

await page.getByRole("button",{name:'Search'}).click();

await expect(page.getByTitle("Home page link")).toHaveText("Home");
await expect(page.getByText("This text has a tooltip")).toBeVisible();


await expect(page.getByTestId("profile-email")).toHaveText("john.doe@example.com");
await expect(page.getByTestId("profile-name")).toHaveText("John Doe");
// await expect(page.getByTestId("product-price")).toHaveText("$19.99");
//await page.getByTestId("edit-profile-btn-email").click();


})
