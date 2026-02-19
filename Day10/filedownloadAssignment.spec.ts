import { expect, test } from "@playwright/test";
import path from "path";


test('Learn filedownload', async ({ page }) => {
    // Upload a document without clicking the Upload button on the page
    await page.goto("https://the-internet.herokuapp.com/download");

    // having the listener before thw click action 
    const filePromise = page.waitForEvent("download")

    await page.getByText(`upload.txt`, { exact: true }).click();

    //our download file willbe here
    const fDown = await filePromise

    // Create timestamp: 2026-02-08_10-45-30
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

    const filePath = path.join(__dirname, `../../Data/Download_${timestamp}.txt`);

    await fDown.saveAs(filePath);
    //await fDown.saveAs("D:\\JanPWDownload.png")

    await page.waitForTimeout(3000)

    //Assert that the file has been downloaded in the required path 

    expect(filePath).toContain("Download")

}) 