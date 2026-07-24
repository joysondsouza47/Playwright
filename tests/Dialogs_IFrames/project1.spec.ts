import{test,expect, Locator, BrowserContext, Page} from "@playwright/test"



test.describe("group1",()=>{

    let context:BrowserContext;
    let page:Page;


test.beforeAll(async({browser})=>
    
{

  context = await browser.newContext();
  page = await context.newPage();

  await page.goto("https://testautomationpractice.blogspot.com/");

})

test.afterAll(async()=>{

    await context.close();
    await page.close();
})


test.skip("Data Entry", async()=>{

await page.getByPlaceholder('Enter Name').fill("joyson");
await page.getByPlaceholder('Enter EMail').fill("joysondsouza47@gmail.com");
await page.getByPlaceholder('Enter Phone').fill("9945636877");
await page.getByLabel('Address:').fill("bvnagar, bangalore");

})

test("radio check", async()=>{

const maleradiobuttonpage = page.getByText('Male', { exact: true });
await maleradiobuttonpage.check();
await expect(maleradiobuttonpage).toBeChecked();  

const femaleradiobuttonpage = page.getByLabel('Female');
await femaleradiobuttonpage.check();
await expect(femaleradiobuttonpage).toBeChecked();   
await expect(maleradiobuttonpage).not.toBeChecked(); 


})

test("day checkbox", async()=>{

let days:string[] = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

for(let i=0;i<days.length;i++)
{
    const daycheckbox = page.getByLabel(days[i]);
    await daycheckbox.check();
    await expect(daycheckbox).toBeChecked();    

}   
})

test("country check", async()=>{

    const countrydropdown = page.getByRole('combobox', { name: 'Country' });
    await countrydropdown.selectOption('India');

})

test("color check", async()=>{

    const colordropdown = page.locator('#colors');
    await colordropdown.selectOption('Blue');

})


test("sorted list check", async()=>{

    const sortedlistdropdown = page.locator("#animals")
    await sortedlistdropdown.selectOption('Cheetah');
  
})

test("Date picker check", async()=>{

    const datepicker = page.locator('#datepicker');
    await datepicker.fill("07/02/2027");
    await expect(datepicker).toHaveValue("07/02/2027");
   

})

test("Date picker check 2", async()=>{

    let month = "Jun";
    let year = "2027";
    let date = "6"; 

    const datepicker1 = page.locator("input#txtDate");
    await datepicker1.click();

    const monthdropdown = page.locator('.ui-datepicker-month');
    await monthdropdown.selectOption(month);     

    const yeardropdown = page.locator('.ui-datepicker-year');
    await yeardropdown.selectOption(year);

    const rows:Locator[] = await page.locator('table.ui-datepicker-calendar tbody tr td').all();
    for (const row of rows) {
        const cellText = await row.innerText();
        if (cellText === date) {
            await row.click();
            break;
        }       
    }
console.log("Date selected successfully");
await expect(datepicker1).toHaveValue("06/06/2027");
console.log("hello its done!");


})
})