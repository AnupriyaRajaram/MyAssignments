import  { test,chromium,firefox } from "@playwright/test"

//Create Lead 

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
) 

 //Assignment: 2 Edit Lead
test(`Test to Edit Lead `,async({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")
   await page.locator(`#username`).fill("Demosalesmanager")

//await page.locator(`input[id='password']`).fill("TestLeaf@2025")
await page.locator(`#password`).fill("crmsfa")
await page.waitForTimeout(1000)
await page.locator(`.decorativeSubmit`).click()
await page.locator(`//a[contains(text(),'CRM/SFA')]`).click()
await page.waitForTimeout(10000);
await page.locator(`//a[contains(text(),'Leads')]`).click()
await page.locator(`//a[contains(text(),'Create Lead')]`).click()
await page.locator('//input[@id="createLeadForm_companyName"]').fill("Testleaf");
await page.locator('//input[@id="createLeadForm_firstName"]').fill("Ravindran");
await page.locator('//input[@id="createLeadForm_lastName"]').fill("R"); 
await page.locator(`//input[@value='Create Lead']`).click();
await page.locator(`//a[text()='Edit']`).click();
await page.locator(`(//input[@name='companyName'])[1]`).clear();

await page.locator(`(//input[@name='companyName'])[2]`).fill("TestLeaf2");
await page.locator(`(//input[@value='Update'])`).click();
await page.waitForTimeout(10000);
}
) 

 //Create Individuals 
test(`Test to Create Individuals `,async({page}) => { // => fat arrow
await page.goto("https://login.salesforce.com/");
await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com");
await page.locator(`#password`).fill("TestLeaf@2025");
await page.locator(`#Login`).click();
await page.waitForTimeout(2000);
await page.locator(`//div[@class='slds-icon-waffle']`).click();
await page.locator(`//button[contains(text(),'View All')]`).click();
await page.waitForTimeout(5000)
await page.locator(`//p[text()="Individuals"]`).click();
await page.locator(`//span[contains(text(),"Individuals List")]`).click();
await page.locator(`//span[contains(text(),"New Individual")]`).click();
await page.locator(`//input[@placeholder='Last Name']`).fill("Anupriya")
await page.locator(`//span[text()='Save']`).click();


}
)
 

//Edit Individuals 
test(`Test to Edit Individuals `,async({page}) => { // => fat arrow
await page.goto("https://login.salesforce.com/");
await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com");
await page.locator(`#password`).fill("TestLeaf@2025");
await page.locator(`#Login`).click();
await page.locator(`//div[@class='slds-icon-waffle']`).click();
await page.locator(`//button[contains(text(),'View All')]`).click();
await page.waitForTimeout(2000);
await page.locator(`//p[text()="Individuals"]`).click();
await page.locator(`//input[@name='Individual-search-input']`).fill("Anupriya");
await page.locator(`//input[@name='Individual-search-input']`).click();
await page.keyboard.press('Enter') //Enter key the search box

await page.locator('(//span[text()="Show Actions"]/parent::button)[1]').click()
await page.locator('//a[@class="highlightButton" and @title="Edit"]').click()
await page.locator('//div[@class="salutation compoundTLRadius compoundTRRadius compoundBorderBottom form-element__row uiMenu"]//a').click()
await page.locator('//a[text()="Mr."]/parent::li').click()
await page.locator('//input[@class="firstName compoundBorderBottom form-element__row input"]').fill("Rajaram")
await page.locator('//span[text()="Save"]').click()
await page.waitForTimeout(1000)
}
)

