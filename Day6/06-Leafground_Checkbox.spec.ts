/* Learn to automate testing of checkbox functionalities using Playwright, ensuring correct 
behavior through effective use of assertions */

//Navigate to https://leafground.com/checkbox.xhtml 
import {expect, test} from "@playwright/test"

test(`to test checkbox functionalities`, async({page}) =>{
    await page.goto("https://leafground.com/checkbox.xhtml")

    //step 2 :- Click on the "Basic Checkbox.”
    await page.locator(`((//span[text()='Basic'])/preceding-sibling::div)[2]`).click();

    //step 3:- Click on the "Notification Checkbox." 
    await page.locator(`((//span[text()='Ajax'])/preceding-sibling::div)[2]`).click();

    // stpe 4:- Verify that the expected message is displayed. 

    expect((page.locator(`//span[text()='Checked']`))).toBeVisible();

    //step 5 :- Click on your favorite language (assuming it's related to checkboxes).    
    await page.locator(`//label[text()='Java']`).click();

    //step 6 :- Click on the "Tri-State Checkbox." 
    await page.locator(`//h5[text()='Tri State Checkbox']/parent::div//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']`).click();

    //Verify which tri-state option has been chosen. 
    const innerText= await page.locator(`//span[@class='ui-growl-title']`).nth(1).innerText();
    expect(innerText).toContain("State")
   
    // step 8 :- Click on the "Toggle Switch." 

    await page.locator(`//div[@class='ui-toggleswitch-slider']`).click();
 
    // 9. Verify that the expected message is displayed. 
    const innerTextslider= await page.locator(`//span[@class='ui-growl-title']`).nth(0).innerText();
    expect(innerTextslider).toContain("Checked");

    //10. Verify if the Checkbox is disabled.

const tobedisbaled = await page.locator(`//h5[text()='Verify if check box is disabled']/parent::div//div[@class='ui-selectbooleancheckbox ui-chkbox ui-widget']`)

expect(tobedisbaled).toBeDisabled;

//11. Select multiple options on the page (details may be needed).
await page.locator(`//ul[@class='ui-selectcheckboxmenu-multiple-container ui-widget ui-inputfield ui-state-default ui-corner-all']`).click()

await page.locator(`//label[text()='Miami']/preceding-sibling::div[@class='ui-chkbox ui-widget']`).click()
await page.locator(`//label[text()='London']/preceding-sibling::div[@class='ui-chkbox ui-widget']`).click()
await page.locator(`//a[@class='ui-selectcheckboxmenu-close ui-corner-all']`).click()
}




)