import{expect,test} from "@playwright/test"

test(`to test dropbox functionalities`, async({page}) =>{

    //1. Navigate to https://leafground.com/waits.xhtml  
   await page.goto("https://leafground.com/waits.xhtml ");

   //2. Wait for an element to become visible before interacting with it.

   await page.goto(`https://leafground.com/waits.xhtml`)//Navigate to Leafground autowait link 
await page.locator(`//h5[text()='Wait for Visibility (1 - 10 Sec)']/parent::div//span[text()='Click']//parent::button`).click() 
await expect(page.locator(`//h5[text()='Wait for Visibility (1 - 10 Sec)']/parent::div//span[text()='I am here']//parent::button`)).toBeVisible()
await page.locator(`//h5[text()='Wait for Visibility (1 - 10 Sec)']/parent::div//span[text()='I am here']//parent::button`).click()
   //3. Wait for an element to disappear from the page. 

   await page.locator(`//h5[text()='Wait for Visibility (1 - 10 Sec)']/parent::div//span[text()='Click']//parent::button`).click();
   await page.setDefaultTimeout(10000);
   await expect(page.locator(`//h5[text()='Wait for Invisibility (1 - 10 Sec)']/parent::div//span[text()='I am about to hide']//parent::button`)).toBeHidden();

//   4. Wait for an element to become clickable. 

await page.locator(`//h5[text()='Wait for Clickability']/parent::div//span[text()='Click First Button']//parent::button`).click() 
await expect(page.locator(`//h5[text()='Wait for Clickability']/parent::div//span[text()='Click Second']//parent::button`)).toBeEnabled()
await page.locator(`//h5[text()='Wait for Clickability']/parent::div//span[text()='Click Second']//parent::button`).click()

// 5. Check for text changes within an element and respond accordingly.

await page.locator(`(//h5[text()='Wait for Text Change (1 - 10 Sec)']/parent::div//span//parent::button)[2]`).click(); 
await expect(page.locator(`(//h5[text()='Wait for Text Change (1 - 10 Sec)']/parent::div//span//parent::button)[2]`)).toHaveText('I am going to change!')
await page.locator(`//h5[text()='Wait for Text Change (1 - 10 Sec)']/parent::div//span[text()='Click']//parent::button`).click() 
await expect(page.locator(`(//h5[text()='Wait for Text Change (1 - 10 Sec)']/parent::div//span//parent::button)[2]`)).toHaveText('Did you notice?')
await page.locator(`(//h5[text()='Wait for Text Change (1 - 10 Sec)']/parent::div//span//parent::button)[2]`).click()


}
)