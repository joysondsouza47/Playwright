import{test,expect,Locator} from "@playwright/test"


test("project1", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");



    const pages = await page.locator(".pagination li").all(); 


        for (const pagebook of pages) 
           {   
               await pagebook.click(); 
               const rows:Locator[] = await page.locator("#productTable tbody tr").all();
            //    const rowcount:number = await rows.count(); 

                  for(const row of rows) 
                     {     
                        const text = await row.innerText();
                        console.log(text);
                        const checkbox = row.locator("td input[type='checkbox']");
                        await checkbox.check();
                        expect(checkbox).toBeChecked();
                        await page.waitForTimeout(500);
                     }
   
                        
           }


})