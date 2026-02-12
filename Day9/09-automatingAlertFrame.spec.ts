import { expect, test } from "@playwright/test";
test.only(`Automating Alert & Frame Interactions`,async ({page,context}) => {
//Load the URL (https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm)  
await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
page.on("dialog",async(alert)=>{
const message = alert.message(); //.message() inbuilt method to get the message out from the alert
console.log(message); 

const alertType = alert.type(); // .type() inbuilt method to get the type of the alert and to handle it accordingly using an if condition
console.log(`The type of the alert is ${alertType} `);


if(alertType==="confirm"){
await alert.accept()
}else if(alertType==="prompt"){
await alert.accept("Testleaf")
}else
    await alert.dismiss(); // any other alerts other than "confirm" or "prompt" will be handled here and dismissed
})
const frame = page.frameLocator(`#iframeResult`)
await frame.locator(`//button[@onclick='myFunction()']`).click();

const awaitMsg = await frame.locator(`//p[@id='demo']`).innerText();

await expect(awaitMsg).toContain("You pressed OK!")
console.log(awaitMsg);


}
)
