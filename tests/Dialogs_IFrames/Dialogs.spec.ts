import {test, expect, Locator}  from "@playwright/test"


// alert(): Displays a message with an OK button. 
// confirm(): Displays a message with OK and Cancel buttons. 
// prompt(): Asks for user input. 



test("dialog alert type", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const alertbutton = page.getByRole('button',{name : "Simple Alert"});

    page.on('dialog', async(dialog)=>{

    console.log("Type of Dialog is :", dialog.type());
    console.log("Dialog message displayed is :", dialog.message());   
    // expect should be within the function
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toBe("I am an alert box!")
    
    await dialog.accept();

    })
    await alertbutton.click();
    await page.waitForTimeout(2000);

})

test("dialog confirm type", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const alertbutton = page.getByRole('button',{name : "Confirmation Alert"});

    page.on('dialog', async(dialog)=>{

    console.log("Type of Dialog is :", dialog.type());
    console.log("Dialog message displayed is :", dialog.message());   
    // expect should be within the function
    expect(dialog.type()).toBe("confirm");
    expect(dialog.message()).toBe("Press a button!")
    
    //await dialog.accept();
    await dialog.dismiss();

    })
    await alertbutton.click();
    await page.waitForTimeout(2000);

})

test.only("dialog prompt type", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const alertbutton = page.getByRole('button',{name : "Prompt Alert"});

    let name = "joyson dsouza";
    let cancelmessage = "User cancelled the prompt."

    page.on('dialog', async(dialog)=>{

    console.log("Type of Dialog is :", dialog.type());
    console.log("Dialog message displayed is :", dialog.message());   
    // expect should be within the function
    expect(dialog.type()).toBe("prompt");
    expect(dialog.message()).toBe("Please enter your name:")
    
    await dialog.accept(name);
    //await dialog.dismiss();

    })
    await alertbutton.click();
    await page.waitForTimeout(2000);

    const messagedisplayed = await page.locator("#demo").innerText();
    if(cancelmessage===messagedisplayed)
    {
        console.log(messagedisplayed);
        expect(messagedisplayed).toBe("User cancelled the prompt.");
    }
    else
    {
        console.log("User accepted the box with prompt as: ", name)
        console.log("Final Message received is :", messagedisplayed)
        expect(messagedisplayed).toBe(`Hello ${name}! How are you today?`);
    }

})