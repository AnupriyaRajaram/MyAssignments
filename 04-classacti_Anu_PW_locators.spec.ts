import  { test,chromium,firefox,webkit } from "@playwright/test"



test(`Test to launch firefox browser`,async() => { // => fat arrow

const browser=await firefox.launch({headless:false})
const context = await browser.newContext()
const page1 = await context.newPage()
await page1.goto("https://www.redbus.in/")
await page1.waitForTimeout(5000)
console.log( page1.title() );
await page1.waitForTimeout(5000)
console.log( page1.url());



})
test(`Test to launch webkit browser`,async() => { // => fat arrow

const browser1=await webkit.launch({headless:false})
const context1 = await browser1.newContext()
const page2 = await context1.newPage()
await page2.goto("https://www.flipkart.com/")

console.log( page2.title() );
await page2.waitForTimeout(5000)
console.log( page2.url());
await page2.waitForTimeout(5000)
})

