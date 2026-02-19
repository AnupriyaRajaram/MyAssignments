import { expect, test } from "@playwright/test";
import path from "path";


 test('Learn fileUpload',async ({page}) => {
// Upload a document without clicking the Upload button on the page
await page.goto("https://the-internet.herokuapp.com/upload");
const filePromise = page.waitForEvent("filechooser")
//Case1: when we have type="file" in DOM we are not clicking the button to upload the file rather we will inject the file directly using the method called setInputFiles()

const uploadFile = page.locator(`(//input[@type="file"])[1]`)

await uploadFile.setInputFiles(path.join(__dirname,'../../Data/Sample.txt'))

await page.locator(`//div[@id='drag-drop-upload']`).click();
const uploadImage = await filePromise
await uploadImage.setFiles(path.join(__dirname,'../../Data/Testleaf.jpeg'))

const confirmationMsg =await page.locator(`(//div[@class='dz-details']//div)[1]`).innerText();
await page.waitForTimeout(5000)
console.log(confirmationMsg);

//Assert that the file has been uploaded
expect(confirmationMsg).toContain("Testleaf.jpeg")

await page.waitForTimeout(5000)




}) 