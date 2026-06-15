import{test,expect,Locator}  from "@playwright/test"


test(" multiselect dropdown ", async({page})=>
{

    await page.goto("https://testautomationpractice.blogspot.com/");

    // await page.locator("#colors").selectOption(['Red','Blue','Green']);

    // await page.locator("#colors").selectOption([{value:'red'},{value:'blue'},{value:'green'}]);

    // await page.locator("#colors").selectOption([{label:'Red'},{label:'Blue'},{label:'Green'}]);

    await page.waitForTimeout(3000);

    const colordropdown:Locator= page.locator("#colors>option"); // not sorted

    // const colordropdown:Locator= page.locator("#animals>option"); // sorted

    // await expect(colordropdown).toHaveCount(7); //colors

    const maindrop:string[] = (await colordropdown.allTextContents()).map(text => text.trim());

    // const dupldrop:string[] = [...maindrop];

    // const sortdrop:string[] = [...dupldrop.sort()];

    
    console.log("Original list:",maindrop);
    // console.log("Sorted list:",sortdrop);
    

    // expect(maindrop).toEqual(sortdrop);
  

})
