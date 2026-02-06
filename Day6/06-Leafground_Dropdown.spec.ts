import{test} from "@playwright/test"

test(`to test dropbox functionalities`, async({page}) =>{

    //1. Navigate to https://leafground.com/select.xhtml 
   await page.goto("https://leafground.com/select.xhtml ");

    //2. Select your favorite UI automation tool using the different select options 

    page.selectOption(`//select[@class='ui-selectonemenu']`,{value :"Playwright"})
await page.waitForTimeout(2000)

//3. Get the count and print of all the values 

const dropDown = page.locator(`//select[@class='ui-selectonemenu']/Option`);
const dropDowncount =await dropDown.count();

for(let index=0; index < dropDowncount; index++)
{
console.log(await page.locator('//select[@class="ui-selectonemenu"]/option').nth(index).innerText()); 
}

//4. Choose your preferred Country
await page.locator(`//h5[text()='Choose your preferred country.']/parent::div//label`).click()//click on select country
await page.locator(`//li[text()='Brazil']`).click();

//5. Confirm Cities belongs to Country is loaded

await page.locator(`//label[text()='Select City']`).click();
await page.locator(`//li[text()='Rio de Janerio']`).click();

//6.Choose any three courses from the dropdown
await page.locator(`//span[@class='ui-button-text']`).click();
await page.locator(`//li[text()='Playwright']`).click();
await page.locator(`//span[@class='ui-button-text']`).click();
await page.locator(`//li[text()='RestAssured']`).click();
await page.locator(`//span[@class='ui-button-text']`).click();
await page.locator(`//li[text()='Selenium WebDriver']`).click();

//7. Choose a language and print all the values from the dropdown. 
await page.locator(`//h5[text()='Choose language randomly']/parent::div//label`).click()//click on the down arrow in the choose language
await page.locator(`//li[text()='English']`).click()


  
 const dropDownLanguage = page.locator(`(//ul[@class='ui-selectonemenu-items ui-selectonemenu-list ui-widget-content ui-widget ui-corner-all ui-helper-reset'])[2]`);
const dropDowncountLang =await dropDownLanguage.count();

for(let index=0; index < dropDowncountLang; index++)
{
console.log(await page.locator(`(//ul[@class='ui-selectonemenu-items ui-selectonemenu-list ui-widget-content ui-widget ui-corner-all ui-helper-reset'])[2]`).nth(index).innerText() + ""); 
}
 
//8. Select 'Two' irrespective of the language chosen
await page.locator(`//h5[text()="Select 'Two' irrespective of the language chosen"]/parent::div//label`).click()
await page.locator(`//li[text()="Two"]`).click()//click on Two option 



}
)
