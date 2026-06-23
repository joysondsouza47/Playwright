import {test,expect,Locator} from "@playwright/test"


test("dynamic table", async({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/")

    const dynamictable:Locator = page.locator("table#taskTable tbody");

    const rows:Locator[] = await dynamictable.locator(" tr").all();


    console.log(await rows[1].allInnerTexts());


let cpuvalue ;
    for(const row of rows)
{
        const name:string = await row.locator("td").nth(0).innerText();

        if(name=='Chrome')
        {
            cpuvalue = await row.locator('td:has-text("%")').innerText();
            console.log(cpuvalue);
            break;
        }

}


 const cpuwebvalue:string = await page.locator("strong.chrome-cpu").innerText();

 expect(cpuvalue === cpuwebvalue);
  console.log("Cpu table value:",cpuvalue);
  console.log("cpu web value:",cpuwebvalue);


})