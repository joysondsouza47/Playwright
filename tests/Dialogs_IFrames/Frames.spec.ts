import{test, expect, Locator} from "@playwright/test"


test.beforeEach("frame page",async({page})=>{

   await page.goto("https://ui.vision/demo/webtest/frames/");

})

test("frame count", async({page})=>{

   const frames = page.frames();
   console.log("number of frames :", frames.length);

})

test("frame 1", async({page})=>{

    const frame = page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1"});

    if(frame)
    {

    await frame.locator('[name="mytext1"]').fill("joyson dsouza");
    }
    else
    {
   console.log("frame is not available")
    }
})

test("frame 2", async({page})=>{

     const frame2 = page.frameLocator('[src="frame_2.html"]').locator('[name="mytext2"]');

     await frame2.fill("joyson dsouza")

})

test("frame 3", async({page})=>{

    const frame3 = page.frame({ url : "https://ui.vision/demo/webtest/frames/frame_3"});

    if(frame3)
        {
           await frame3.locator("[name='mytext3']").fill("Welcome");
           const innerframe = frame3.childFrames();
           console.log(innerframe.length);
           const radiobutton = innerframe[0].getByLabel("I am a human");
           await radiobutton.check();
           expect(radiobutton).toBeChecked();
           await page.waitForTimeout(2000);
        }
        else
        {
            console.log("frame not available")
        }

})