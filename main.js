const puppeteer = require('puppeteer');
const url = "https://www.crowd.live/GSSGS";
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('#firstName');
    await page.type("#firstName", "Rick - AI5A");
    await page.type("#city", "South Central Austin");
    await page.click("#anonymousLoginButton");
    await page.waitForSelector('#firstName', {hidden: true});
    await page.screenshot({
        path: "./screenshot.png",
        fullPage: true
    });
    await page.close();
    await browser.close();
})();
