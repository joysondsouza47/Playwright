import{test,expect,Locator} from "@playwright/test"


test("duplicate dropdown", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");


    // const duplicateoption:Locator = page.locator("#colors>option");
    // const locatorcolors:Locator = page.locator("#colors");
    const duplicateoption:Locator=page.locator('#animals>option'); 
    const locatorcolors:Locator = page.locator("#animals"); 

    const mainarray:string[]= (await duplicateoption.allTextContents()).map(text=>text.trim());

    const setoption = new Set<string>();  // set collection

    const arrayoption:string[]=[];   // array collection

    for(const text of mainarray){

     if(setoption.has(text))
        {
            arrayoption.push(text);
        }
     else
        {
            setoption.add(text);
        }

    }

    if(arrayoption.length>0)
    {
        console.log("dupliacte options present....")
        console.log(arrayoption);
    }
    else
    {
        console.log("no dupliacte options present....")
    }

    expect(arrayoption.length).toBe(0);

    for(const text of mainarray)
    {
        await locatorcolors.selectOption(text);
        await page.waitForTimeout(2000);
    }
    
    await page.waitForTimeout(2000);

})