/* eslint-disable @typescript-eslint/no-explicit-any */
import { By, until, Builder, Capabilities } from "selenium-webdriver";
import { baseUrl, defaultWaitingTime } from "./constants";

const driver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

(async function openTSHandBook() {
    try {
        await driver.manage().window().maximize();
        await driver.get(baseUrl);
        await driver.findElement(By.css('nav a[href="/docs/handbook/intro.html"]')).click();
        await driver.wait(until.titleContains('The TypeScript Handbook'), defaultWaitingTime);
    } catch (error: any) {
        console.log(error.message)
        await driver.quit()
    }

    try {
        const addressToFollow = "/docs/handbook/2/classes.html"
        await driver.findElement(By.xpath(`//a[@href="${addressToFollow}"]`)).click();
        await driver.wait(until.urlIs(`${baseUrl}${addressToFollow}`), defaultWaitingTime);

        await driver.sleep(defaultWaitingTime);
        await driver.navigate().back();

        await driver.sleep(defaultWaitingTime);
        await driver.findElement(By.css("aside #like-button")).click();
        await driver.sleep(defaultWaitingTime);

        const thanksMessage = await driver.findElement(By.id("like-dislike-subnav"));
        await driver.wait(until.elementTextIs(thanksMessage, "Thanks for the feedback"), defaultWaitingTime);
        await driver.sleep(defaultWaitingTime);
    } catch (error: any) {
        console.log(error.message)
    } finally {
        await driver.quit()
    }
})();