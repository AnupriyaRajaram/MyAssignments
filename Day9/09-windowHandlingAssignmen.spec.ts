import { expect, test } from "@playwright/test";
test.only(`Automating  Window Handling`,async ({page,context}) => {
//Navigate to http://leaftaps.com/opentaps/control/main
page.goto("http://leaftaps.com/opentaps/control/main")

//const newPage = context.waitForEvent('page')// enable a listener before an event occurs // click action

//Enter the username
await page.locator(`#username`).fill("Demosalesmanager")

//Enter the password
await page.locator(`#password`).fill("crmsfa")

//Click the Login button
await page.locator(`.decorativeSubmit`).click();

// Click CRM/SFA 
await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();

//Click Leads 
await page.locator(`//a[text()='Leads']`).click();

//Click Merge Leads 
await page.locator(`//a[text()='Merge Leads']`).click();

//Click From Lead widget 
const [childPage] = await Promise.all([context.waitForEvent('page'), page.locator(`//img[@src='/images/fieldlookup.gif']`).nth(0).click()]); // array of promise resolved
//Here the pages are captured usiung the concept called destructuring of array to resolve the promise of all the actions performed

//Select the first resulting lead id 
await childPage.locator(`//a[@class='linktext']`).nth(0).click();
await page.bringToFront();

//Click To Lead widget 
const [childPage2] = await Promise.all([context.waitForEvent('page'), page.locator(`//img[@src='/images/fieldlookup.gif']`).nth(1).click()]); // array of promise resolved
//Here the pages are captured usiung the concept called destructuring of array to resolve the promise of all the actions performed

//Select the second resulting lead id 
await childPage2.locator(`(//a[@class='linktext'])[5]`).click();
await page.bringToFront();



//Get the message and type of the alert 
page.on("dialog",async(alert)=>{

const message = alert.message(); //.message() inbuilt method to get the message out from the alert
console.log(message); 
// accept() => Ok and dismiss() => cancel both are inbuilt methods


const alertType = alert.type(); // .type() inbuilt method to get the type of the alert and to handle it accordingly using an if condition
console.log(`The type of the alert is ${alertType} `);


if(alertType==="confirm"){
await alert.accept()
}else if(alertType==="prompt"){
await alert.accept("Testleaf")
}else


await alert.dismiss(); // any other alerts other than "confirm" or "prompt" will be handled here and dismissed

}) 

//Click Merge button 
await page.locator(`//a[text()='Merge']`).click();


}
)