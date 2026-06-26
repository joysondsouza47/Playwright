import {test, expect, Locator,Page} from "@playwright/test"


async function selectDate(page: Page, targetYear: string, targetMonth: string, targetDate: string) {

  // Select the year
  const yearDropdown = page.locator('select.ui-datepicker-year');
  await yearDropdown.selectOption(targetYear);

  // Select the month
  const monthDropdown = page.locator('select.ui-datepicker-month');
  await monthDropdown.selectOption(targetMonth);

  // Click on the desired date
  const dates:Locator[] = await page.locator("table.ui-datepicker-calendar tbody tr td").all();

  for(const date of dates)
    {
        const datetext = await date.innerText();
         if(datetext===targetDate)
        {
              await date.click();
              break;
        }

  }

}



test("project 4", async({page})=>{

    await page.goto("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

//     Select Ticket Type:
//     Select "Dummy ticket for Visa Application" radio button.

          await page.locator('#product_549').check();

          const productselected = await page.locator("li:has-text('Dummy ticket for Visa Application')").innerText();
          const [product, productprice] = productselected.split("—").map(item => item.trim());
          console.log("Initial product selected is : ",product);
          console.log("Selected product price is : ",productprice);


            await page.getByPlaceholder('first and middle name as on passport').fill("Akash");
            await page.getByPlaceholder('last name as on passport').fill("Ratore");
            await page.getByPlaceholder('Notes about your order, e.g. special notes for delivery.').fill("hi my name is akash ratore am from banaglore");


            await page.waitForTimeout(2000);


              // Desired date
                let year = '';
                let month = '';
                let date = '';

            await page.locator("//label[@for='dob']").click();

            await selectDate(page, year='2000', month='Mar', date ='2');

            await page.locator('label').filter({ hasText: 'Male' }).first().check();

            await page.getByLabel('One Way').check();

            await page.locator('#fromcity').fill("Toronto");

            await page.locator('#tocity').fill("Mumbai");

            await page.locator('#departon').click();

            await selectDate(page, year='2026', month='Nov', date='25');

            await page.locator('#notes').fill("Need visa as soon as possible");

            await page.locator("p[id='reasondummy_field'] b[role='presentation']").click();

            await page.locator('#appoinmentdate').click();

            await selectDate(page, year='2027', month='Dec', date='10');

            await page.getByLabel('Email', { exact: true }).check();

            await page.locator('#billname').fill("Akash Rathore");

            await page.locator('#billing_email').fill("abc.123@gmail.com");

            await page.locator("span[aria-label='Country'] b[role='presentation']").click();

            await page.locator('li:has-text("Canada")').click();

            await page.getByPlaceholder('House number and street name').fill("123 Scott Street, Niagara Falls, Ontario, L2C 6M1");

            await page.locator('#billing_city').fill("chikmagalore");

            await page.locator('#select2-billing_state-container:visible').click();

            await page.locator('li:has-text("Yukon Territory")').click();

            await page.locator('#billing_postcode').fill("K1A 0B1");

            await page.locator('#billing_phone').fill("9945636877");


            const finalproduct = await page.locator("div.product-details").innerText();

            const orderfinalamount = await page.locator("tr.order-total").innerText();

            expect(product.includes(finalproduct));
            expect(productprice.includes(orderfinalamount))
            await page.waitForTimeout(5000);

            await page.getByRole('button', { name: 'Place order' }).click();

            await page.waitForTimeout(5000);

            console.log("final product selected is :",finalproduct);
            console.log("The order total is :",productprice);


})