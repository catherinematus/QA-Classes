import { expect } from "chai";
import { By, Builder, Capabilities, until, ThenableWebDriver } from "selenium-webdriver";
import { baseUrl, defaultWaitingTime } from "../constants";

const driver: ThenableWebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

describe("Typescript Official Site Tests", () => {
    it("Should display page title correctly", async () => {
        await driver.manage().window().maximize();
        await driver.get(baseUrl);
        const addressToFollow = "/docs/handbook/intro.html";
        await driver.findElement(By.css(`nav a[href="${addressToFollow}"]`)).click();
        await driver.wait(until.urlContains(addressToFollow), defaultWaitingTime);
        const title = await driver.getTitle();
        expect(title).to.include("The TypeScript Handbook");
    });

    after(async () => {
        await driver.quit();
    });
})
