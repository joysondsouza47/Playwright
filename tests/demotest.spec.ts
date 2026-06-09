import{test,expect,Locator} from "@playwright/test"

// getByText
// getByAltText
// getByLabel
// getByPlaceholder
// getByTestId
// getByRole
// getByTitle
 
// page.getByRole()        Locate elements by accessibility roles like button, checkbox, heading, etc. 
// page.getByText()        Locate by visible text content. 
// page.getByLabel()       Locate form controls using associated label text. 
// page.getByPlaceholder() Locate inputs via placeholder text. 
// page.getByAltText()     Locate images by their alternative text (alt attribute). 
// page.getByTitle()       Locate elements by their title attribute. 
// page.getByTestId()      Locate by a custom data attribute like data-testid.


test("demo title", async({page})=>{

await page.goto("https://demowebshop.tricentis.com/");

// page.getByRole() 
await expect(page.getByRole('heading',{name: "Welcome to our store"})).toBeVisible();

// page.getByText()
await expect(page.getByText("Welcome to our store")).toBeVisible();

// page.getByLabel()
await page.getByLabel("Excellent").click();

// page.getByAltText()
await expect(page.getByAltText("Tricentis Demo Web Shop")).toBeVisible();

// page.getByTitle()
const titlepage:string = await page.title();
console.log(titlepage);
await expect(page.getByTitle("Demo Web Shop")).toBeHidden();


})

test("second test", async({page})=>{

await page.goto("https://www.saucedemo.com/");

// page.getByPlaceholder()
await page.getByPlaceholder("Username").fill("standard_user")
await page.getByPlaceholder("Password").fill("secret_sauce")

// page.getByTestId()
await page.getByTestId("login-button").click();

})