import { expect } from "chai";
import { mkdirSync, rmSync, writeFile } from "fs";
import { Context } from "mocha";
import { driver } from "../configs/driver";
import { HandbookPage } from "../pageObjects/handbookPage";
import { PageFactory } from "../pageObjects/pageFactory";
import { customDriver } from "../utils/customDriver";
import { FEEDBACK_TYPES, HANDBOOK_SIDEBAR_ITEMS, NAVIGATION_ITEMS, PAGES } from "../utils/types";

const screensDir = "patterns/screenshots";
let testsCounter = 1;

const homePage = PageFactory.getPage(PAGES.HOME);
const handbookPage = PageFactory.getPage(PAGES.HANDBOOK) as HandbookPage;

describe("Typescript Official Site Tests", () => {
    before(() => {
        rmSync(screensDir, { recursive: true, force: true });
        mkdirSync(screensDir, { recursive: true });
    });

    it("Should display page title correctly", async () => {
        await homePage.visitPage();
        await customDriver.maximizeWindow();
        await homePage.navigationBar.clickOnNavigationItemByInnerText(NAVIGATION_ITEMS.HANDBOOK);
        await handbookPage.waitForTitleToContain("The TypeScript Handbook");
    });

    for (const item in HANDBOOK_SIDEBAR_ITEMS) {
        const buttonName = HANDBOOK_SIDEBAR_ITEMS[item as keyof typeof HANDBOOK_SIDEBAR_ITEMS];
        it(`${buttonName} sidebar item state should be correct by default`, async () => {
            const navigationButtonElement = await handbookPage.getSideNavigationItemByInnerText(buttonName);
            expect(await navigationButtonElement.getAttribute("class"))
                .to
                .include(buttonName === HANDBOOK_SIDEBAR_ITEMS.HANDBOOK ? "open" : "close");
        });
    }

    it("Should display the feedback section text correctly depending on the feedback given", async () => {
        expect(await handbookPage.getFeedbackElementInnerText()).to.be.equal("Is this page helpful?");
        await handbookPage.leaveFeedback(FEEDBACK_TYPES.LIKE);
        expect(await handbookPage.getFeedbackElementInnerText()).to.be.equal("Thanks for the feedback");
    });

    it("Should redirect to the correct page after click on navigation bar item", async () => {
        const pageHeader = "Classes";
        await handbookPage.clickButtonOfTheOpenedSidebarItemByText(pageHeader);
        await handbookPage.waitTillPageHeaderIs(pageHeader);
    });

    it("Should redirect to the correct page after the page search", async () => {
        const pageHeader = "Enums";
        await handbookPage.navigationBar.searchFor(pageHeader);
        await handbookPage.waitTillPageHeaderIs(pageHeader);
    });

    afterEach(async function () {
        const data = await driver.takeScreenshot();
        writeFile(`${screensDir}/${testsCounter++}. ${(this as Context).currentTest?.title}.png`, data, 'base64', function (err) {
            if (err) console.log(err.message);
        });
    });

    after(async () => {
        await customDriver.quitBrowser();
    });
})
