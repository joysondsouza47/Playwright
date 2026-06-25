import {test,expect,Locator}   from "@playwright/test"


test("project2", async({page})=>{

    // Step 1: Launch the Website
    await page.goto("https://blazedemo.com/")

    // Step 2: Select Departure and Destination 
    // Select "Boston" as the departure city and "London" as the destination using the dropdown options. 

    const selectdeparture:Locator = page.locator("select.form-inline").nth(0);
    const selectdestination:Locator = page.locator("select.form-inline").nth(1);
    const findflightbutton:Locator = page.locator("input[value='Find Flights']");

    await selectdeparture.selectOption('Boston');
    await selectdestination.selectOption('London');
    
    // Step 3: Search for Flights 
    // Click on the Find Flights button after selecting cities. 

    await findflightbutton.click();

    //  Step 4: Capture Flight Prices 
    //  Locate the results table and extract flight prices. 
    //  Store all prices in an array and print the total number of available flights. 

    const resulttable:Locator[] = await page.locator("table.table tbody tr").all();

    let flightprices = [];

    for(const result of resulttable)
    {
        const price:Locator = result.locator("td").nth(5);
        flightprices.push(await price.innerText());
    }
    const numberofflights = resulttable.length;
    console.log(flightprices);
    console.log("Total number of available flights are :", numberofflights)

    // Step 5: Identify the Lowest Price 
    // Sort the array of prices and determine the flight with the lowest fare. 


    let lowestprice = Number.MAX_VALUE;
    let lowestairline = "";


    for(const row of resulttable)
    {

        const airlinename = await row.locator("td").nth(2).innerText();
        const airlineprice = await row.locator("td").nth(5).innerText();

        const price:number = parseFloat(airlineprice.replace("$",""));

        if(price < lowestprice)
        {
            lowestprice = price;
            lowestairline = airlinename;
        }

    }

    console.log("flight with the lowest fare is : ", lowestairline);
    console.log("lowest airline price is: ", lowestprice , "$");

    
    // Step 6: Choose the Cheapest Flight 
    // Find the corresponding table row with the lowest price and click Choose This Flight. 

    for(const row of resulttable)
    {
        const airlineprice = await row.locator("td").nth(5).innerText();
        const price:number = parseFloat(airlineprice.replace("$",""));


        if(price === lowestprice)

            {
                const chooseflight = row.locator("td").nth(0);
                await chooseflight.click();
                break;
            }
    }

    // Enter Passenger Information  
 

    const Name:Locator = page.getByPlaceholder("First Last");
    const Address:Locator = page.getByPlaceholder("123 Main St.");
    const City:Locator = page.getByPlaceholder("Anytown");
    const State:Locator = page.getByPlaceholder("State");
    const ZipCode:Locator = page.getByPlaceholder("12345");
    const CardType:Locator = page.locator("select.form-inline");
    const CreditCardNumber:Locator = page.getByPlaceholder("Credit Card Number");
    const Month:Locator = page.getByPlaceholder("Month");
    const Year:Locator = page.getByPlaceholder("Year");
    const NameonCard:Locator = page.getByPlaceholder("John Smith");
    const PurchaseFlight:Locator = page.locator("input[type='submit']");

    await Name.fill("John");
    await Address.fill("1403 American Beauty Ln");
    await City.fill("Columbus");
    await State.fill("OH");
    await ZipCode.fill("43240");
    await CardType.selectOption("American Express");
    await CreditCardNumber.fill("6789 0673 4523 1267");
    await Month.fill("07");
    await Year.fill("2026");
    await NameonCard.fill("John Canedy");
    await PurchaseFlight.click();


   const sucessmessage = await page.locator("div.container h1").innerText();

   if(sucessmessage.includes("Thank you for your purchase today!"))
   {
    console.log("Success !! Passed");
   }
   else
   {
    console.log("Failed");
   }


   expect(sucessmessage).toBe("Thank you for your purchase today!");
   console.log("Your flight has been booked successfully!");



})