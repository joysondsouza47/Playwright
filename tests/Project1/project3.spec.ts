import{test,expect,Locator} from "@playwright/test"



test("date picker 1",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const datepicker:Locator = page.locator("input#datepicker");
    await datepicker.fill("06/26/2026");

    await page.waitForTimeout(2000);

    let month = "June";
    let year = "2027";
    let date = 26;

    

    while(true)
    {

        
        const calendarmonth = await page.locator(".ui-datepicker-month").innerText();
        const calendaryear= await page.locator(".ui-datepicker-year").innerText();
    
        if(calendarmonth==month && calendaryear == year)
        {
            const dates = page.locator(`table.ui-datepicker-calendar tbody tr td:has-text("${date}")`);
            await dates.click();
            break;
        }
        else        
        {
                const Nextbutton = await page.locator("//span[text()='Next']").click();
                //const Prevbutton = await page.locator("//span[text()='Prev']").click();
        }
    }
    
        await page.waitForTimeout(2000);
    


})


test
("date picker 2",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const datepicker= await page.locator("input#txtDate").click();

    await page.waitForTimeout(2000);

    let month = "Jun";
    let year = "2027";
    let date = 26;

        const calendarmonth = page.locator("select.ui-datepicker-month");
        const calendaryear= page.locator("select.ui-datepicker-year");

        const monthcount = await calendarmonth.count();
        const yearcount = await calendaryear.count();

        await calendarmonth.selectOption(month);
        await calendaryear.selectOption(year);

        const dates = page.locator(`table.ui-datepicker-calendar tbody tr td:has-text("${date}")`);
        await dates.click()

        await page.waitForTimeout(2000);



        await page.locator("#start-date").click()
        // const Fromdate = await page.getByPlaceholder("Start Date").fill("03-05-2027");
        // const Todate =await page.getByPlaceholder("End Date").fill("03-09-2027");

        // expect(Fromdate).toBe("03-05-2027")

        //   await page.waitForTimeout(2000);


})

test.only
("date picker 3",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

        
        const startdate = page.getByPlaceholder("Start Date");
        const enddate = page.getByPlaceholder("End Date");
         await page.locator("#start-date").click()

         await startdate.fill("2025-10-20");
         await enddate.fill("2027-10-20")
         expect(await startdate.inputValue()).toContain("2025-10-20");
         expect(await enddate.inputValue()).toContain("2027-10-20");


         await page.locator('button.submit-btn').click();

         const sucessmessage = page.locator("div.result");
         await expect(sucessmessage).toBeVisible();

        await page.waitForTimeout(2000);


})