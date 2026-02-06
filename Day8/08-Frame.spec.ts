//Navigate to https://leafground.com/frame.xhtml

import {expect, test} from "@playwright/test"

test(`to test frame functionalities`, async({page}) =>{
    await page.goto("https://leafground.com/frame.xhtml")
    const frame= page.frames();
    //console.log(frame);
 
    
    
//Interact with the Click Me button inside frame
const frame1 = page.frameLocator(`[src="default.xhtml"]`)
await frame1.locator("#Click").click();

//Assert the text changed after clicking the button
await expect(frame1.locator("#Click")).toHaveText("Hurray! You Clicked Me.")

//Get the total count of frames present in the page 
 
    console.log(`Total no of frmaes : ${frame.length}`);
    //console.log(`Total no.of frames available in this webpage is ${flength}`)
   

    //Interact with the Click Me button present inside the nested frames

  const frame2 = page.frameLocator(`[src="page.xhtml"]`)
  //const frame3 = frame2.frameLocator(`[src="framebutton.xhtml]`)
   const frame3=frame2.frameLocator(`[id="frame2"]`);
await frame3.locator("#Click").click();
await expect(frame3.locator("#Click")).toHaveText("Hurray! You Clicked Me.")
    
}
)
