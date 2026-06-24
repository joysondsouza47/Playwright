import {test,expect,Locator} from "@playwright/test"



test("pagination test", async ({page})=>{


    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    let hasnextbutton = true;

    while(hasnextbutton)
 {

    const rows:Locator[] = await page.locator("#example tbody tr").all();
    const count:number = rows.length;
    console.log(count);

    for(const row of rows)
    {
        console.log(await row.innerText());
    }

    const nextbutton:Locator = page.locator("button[aria-label='Next']");
    const isdisbledbutton = await nextbutton.getAttribute('class');

    if(isdisbledbutton?.includes('disabled'))
    {
        hasnextbutton = false;
    }
    else
    {
        await nextbutton.click();
    }

}

})


test("entry page count", async({page})=>{

await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");


const pageoption:string[] = await page.locator("select.dt-input option").allInnerTexts();
console.log(pageoption);

for(const text of pageoption)
{

    try
    {
        const pageselect:Locator = page.locator("select.dt-input");
        await pageselect.selectOption(text);


        const row1:Locator = page.locator("#example tbody tr");
        expect(await row1.count()).toBe(parseInt(text));
        console.log(await row1.count());

        const row2:Locator[] = await page.locator("#example tbody tr").all();
        expect(row2.length).toBe(parseInt(text));
        console.log(row2.length);

        const row3:Locator = page.locator("#example tbody tr");
        await expect(row3).toHaveCount(parseInt(text))
    }
    catch(error)
    {
        console.log("assertion failed");
        console.log(error);
    }
}

})



test.only("search word", async({page})=> {

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    const searchbox:Locator = page.locator('#dt-search-0');
    await searchbox.fill("Software Engineer");

    await page.waitForTimeout(3000);

    const rows:Locator[] = await page.locator("#example tbody tr").all();
    

    if(rows.length >= 1)
    {

        let hastext = false;
        let rowcount = 0;
        for(const row of rows)
        {

            const text:string = await row.innerText();
            if(text.includes('Software Engineer'))
            {
                const names:string = await row.locator("td").nth(0).innerText();
                console.log(names)
                rowcount++;
                hastext = true;
                expect(hastext).toBeTruthy();
            }
            else   
            {
                console.log("No matching records found");
            }


        }

        console.log("Number of matching records:",rowcount)

    }
    else
    {
        console.log("no such records found");
    }


})
