import  { test,chromium,firefox } from "@playwright/test"

/* //Create Lead 

 test(`Test to Create Lead `,async({page}) => { // => fat arrow
await page.goto("https://login.salesforce.com/");
await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com");
await page.locator(`#password`).fill("TestLeaf@2025");
await page.locator(`#Login`).click();
await page.waitForTimeout(2000)
await page.locator(`//div[@class='slds-icon-waffle']`).click();
await page.locator(`//button[contains(text(),'View All')]`).click();
await page.waitForTimeout(5000)
await page.locator(`//p[text()='Sales']`).click();
await page.locator(`//a[@title='Leads']`).click();
await page.locator(`//div[@title='New']`).click();
await page.locator(`//label[text()='Salutation']/following::button[1]`).click();
await page.locator(`//span[@title='Mrs.']`).click();

//await page.locator(`//label[text()='Salutation']/following::button[1]]`).click();
await page.waitForTimeout(5000)
//await page.selectOption(`//select[//label[text()='Salutation']/following::button[1]]//]`,{value:"Mrs."}) // value
await page.locator(`//input[@name='lastName']`).fill("Anupriya")
await page.waitForTimeout(5000)
await page.locator(`//input[@name='Company']`).fill("Perficient")
await page.waitForTimeout(5000)
await page.locator(`//button[@name='SaveEdit']`).click();
await page.waitForTimeout(5000)

}
)  */
/* 
//Assignment: 2 Edit Lead
//Login to https://login.salesforce.com 
test(`Test to Edit Lead `,async({page}) => { // => fat arrow
await page.goto("https://login.salesforce.com/");
await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com");
await page.locator(`#password`).fill("TestLeaf@2025");
await page.locator(`#Login`).click();

//Click on toggle menu button from the left corner 
await page.locator(`//div[@class='slds-icon-waffle']`).click();

//Click view All and click Sales from App Launcher  
await page.locator(`//button[contains(text(),'View All')]`).click();
await page.waitForTimeout(5000)
await page.locator(`//p[text()='Sales']`).click();

//Navigate to the Leads tab  
await page.locator(`//a[@title='Leads']`).click();

//Click on Edit button  
await page.locator(`//input[@name='Lead-search-input']`).fill("Anupriya");
await page.keyboard.press('Enter')
await page.locator(`//span[text()='Anupriya']`).click();
await page.locator(`//button[@name='Edit']`).click();

//Update the necessary fields (e.g., Salutation, Last Name, or Company Name) 
await page.locator(`//button[@name='salutation']`).click();
await page.locator(`//span[@title='Dr.']`).click();
await page.locator(`//input[@name='lastName']`).fill("Anupriya Rajaram");
await page.locator(`//input[@name='Company']`).clear();
await page.locator(`//input[@name='Company']`).fill("Perficient PVT Ltd")
await page.locator(`//button[@name='SaveEdit']`).click();
await page.waitForTimeout(1000)
}
) */

/* 
//Assignment: 3 Create Individuals 
 //Login to https://login.salesforce.com 
 test(`Test to Create Individuals `,async({page}) => { // => fat arrow
await page.goto("https://login.salesforce.com/");
await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com");
await page.locator(`#password`).fill("TestLeaf@2025");
await page.locator(`#Login`).click();

//Click on the toggle menu button from the left corner  
await page.locator(`//div[@class='slds-icon-waffle']`).click();


// Click View All and click Individuals from App Launcher  
await page.locator(`//button[contains(text(),'View All')]`).click();
await page.waitForTimeout(5000)
await page.locator(`//p[text()="Individuals"]`).click();

 //Click on the Dropdown icon in the Individuals tab  
 await page.locator(`(//a[@title='Individuals'])//following-sibling::one-app-nav-bar-item-dropdown`).click();

//Click on New Individual 
  await page.locator(`//span[contains(text(),"New Individual")]`).click();

//Enter the Last Name  
await page.locator(`//input[@placeholder='Last Name']`).fill("Anupriya")
//Click save and verify Individuals Name 
await page.locator(`//span[text()='Save']`).click(); 

 }
)
 */

//Assignment: 4 Edit Individuals Test
 //Login to https://login.salesforce.com 
 test(`Test to Edit Individuals `,async({page}) => { // => fat arrow
await page.goto("https://login.salesforce.com/");
await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com");
await page.locator(`#password`).fill("TestLeaf@2025");
await page.locator(`#Login`).click();

//Click on the toggle menu button from the left corner  
await page.locator(`//div[@class='slds-icon-waffle']`).click();


// Click View All and click Individuals from App Launcher  
await page.locator(`//button[contains(text(),'View All')]`).click();
await page.waitForTimeout(5000)
await page.locator(`//p[text()="Individuals"]`).click();

// Click on the Individuals tab  
await page.locator(`//a[@title='Individuals']//span`).click();

 //Search the Individuals last name 
await page.locator(`//input[@name='Individual-search-input']`).fill("Anupriya");
await page.keyboard.press('Enter')

//Click on the Dropdown icon and Select Edit  
await page.locator('(//span[text()="Show Actions"]/parent::button)[1]').click()
        await page.locator('//a[@class="highlightButton" and @title="Edit"]').click()

         //Select Salutation as 'Mr'
        
        
        await page.locator('//div[@class="salutation compoundTLRadius compoundTRRadius compoundBorderBottom form-element__row uiMenu"]//a').click()
       
        await page.locator('//a[text()="Mr."]/parent::li').click()

        // enter the first name
        await page.locator('//input[@class="firstName compoundBorderBottom form-element__row input"]').fill("Rajaram")

        await page.locator('//span[text()="Save"]').click()
        await page.waitForTimeout(3000)

      }
)

