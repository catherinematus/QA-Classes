import { expect } from "chai";
import { mkdirSync, rmSync, writeFile } from "fs";
import { Context } from "mocha";
import { By, Builder, Capabilities, until, ThenableWebDriver, Key } from "selenium-webdriver";
import { baseUrl, defaultWaitingTime } from "../../constants";

const driver: ThenableWebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

const screensDir = "selenium/home/screenshots";
let testsCounter = 1;

describe("Typescript Official Site Tests", () => {
    before(() => {
        rmSync(screensDir, { recursive: true, force: true });
        mkdirSync(screensDir, { recursive: true });
    });

    it("Should display page title correctly", async function () {
        await driver.manage().window().maximize();
        await driver.get(baseUrl);
        const addressToFollow = "/docs/handbook/intro.html";
        await driver.findElement(By.css(`nav a[href="${addressToFollow}"]`)).click();
        await driver.wait(until.urlContains(addressToFollow), defaultWaitingTime);
        const title = await driver.getTitle();
        expect(title).to.include("The TypeScript Handbook");
    });

    it("Should redirect to the page with correct URL", async function () {
        const addressToFollow = "/docs/handbook/2/classes.html"
        await driver.findElement(By.xpath(`//a[@href="${addressToFollow}"]`)).click();
        await driver.wait(until.urlIs(`${baseUrl}${addressToFollow}`), defaultWaitingTime);
    });

    it("Should highlight the link in the navigation bar as active", async function () {
        const classesLink = await driver.findElement(By.xpath("//a[text()='Classes']/.."));
        expect(await classesLink.getAttribute("class")).to.be.equal("highlight");
    });

    it("Should change text after like being submitted", async function () {
        await driver.navigate().back();
        await driver.findElement(By.css("aside #like-button")).click();

        const thanksMessage = await driver.findElement(By.id("like-dislike-subnav")).getText();
        expect(thanksMessage).to.be.equal("Thanks for the feedback");
    });

    it("Should redirect a user to the page that corresponds to the search", async function () {
        const pageToSearch = "Enums";
        const searchInput = await driver.findElement(By.id("search-box-top"));
        await driver.actions()
            .click(searchInput)
            .sendKeys(pageToSearch)
            .pause(defaultWaitingTime * 2)
            .sendKeys(Key.RETURN)
            .perform();
        const pageHeader = await driver.findElement(By.css("#handbook-content h1"));
        await driver.wait(until.elementTextIs(pageHeader, pageToSearch));
    });

    afterEach(async function () {
        const data = await driver.takeScreenshot();
        writeFile(`${screensDir}/${testsCounter++}. ${(this as Context).currentTest?.title}.png`, data, 'base64', function (err) {
            if (err) console.log(err.message);
        });
    });

    after(async () => {
        await driver.quit();
    });
})
