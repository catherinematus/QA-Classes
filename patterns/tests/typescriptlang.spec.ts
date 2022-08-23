import { expect } from "chai";
import { mkdirSync, rmSync, writeFile } from "fs";
import { Context } from "mocha";
import { Builder, Capabilities, WebDriver } from "selenium-webdriver";
import { HandbookPage } from "../pageObjects/handbookPage";
import { PageFactory } from "../pageObjects/pageFactory";
import { FEEDBACK_TYPES, HANDBOOK_SIDEBAR_ITEMS, NAVIGATION_ITEMS, PAGES } from "../utils/types";

const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

const screensDir = "patterns/screenshots";
let testsCounter = 1;

const homePage = PageFactory.getPage(driver, PAGES.HOME);
const handbookPage = PageFactory.getPage(driver, PAGES.HANDBOOK) as HandbookPage;

describe("Typescript Official Site Tests", () => {
    before(() => {
        rmSync(screensDir, { recursive: true, force: true });
        mkdirSync(screensDir, { recursive: true });
    });

    it("Should display page title correctly", async function () {
        await homePage.visitPage();
        await homePage.maximizeWindow();
        await homePage.clickOnNavigationItemByInnerText(NAVIGATION_ITEMS.HANDBOOK);
        await handbookPage.waitForTitleToContain("The TypeScript Handbook");
    });

    for (const item in HANDBOOK_SIDEBAR_ITEMS) {
        const buttonName = HANDBOOK_SIDEBAR_ITEMS[item as keyof typeof HANDBOOK_SIDEBAR_ITEMS];
        it(`${buttonName} sidebar item state should be correct by default`, async function () {
            const navigationButtonElement = await handbookPage.getSideNavigationItemByInnerText(buttonName);
            expect(await navigationButtonElement.getAttribute("class"))
                .to
                .include(buttonName === HANDBOOK_SIDEBAR_ITEMS.HANDBOOK ? "open" : "close");
        });
    }

    it("Should display the feedback section text correctly depending on the feedback given", async function () {
        expect(await handbookPage.getFeedbackElementInnerText()).to.be.equal("Is this page helpful?");
        await handbookPage.leaveFeedback(FEEDBACK_TYPES.LIKE);
        expect(await handbookPage.getFeedbackElementInnerText()).to.be.equal("Thanks for the feedback");
    });

    it("Should redirect to the correct page after click on navigation bar item", async function () {
        const pageHeader = "Classes";
        await handbookPage.clickButtonOfTheOpenedSidebarItemByText(pageHeader);
        expect(await handbookPage.getHeaderText()).to.be.equal(pageHeader);
    });

    it("Should redirect to the correct page after the page search", async function () {
        const pageHeader = "Enums";
        await handbookPage.searchFor(pageHeader);
        expect(await handbookPage.getHeaderText()).to.be.equal(pageHeader);
    });

    afterEach(async function () {
        const data = await driver.takeScreenshot();
        writeFile(`${screensDir}/${testsCounter++}. ${(this as Context).currentTest?.title}.png`, data, 'base64', function (err) {
            if (err) console.log(err.message);
        });
    });

    after(async () => {
        await handbookPage.quitBrowser();
    });
})
