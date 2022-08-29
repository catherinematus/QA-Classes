import { baseUrl } from "../utils/constants";
import { customDriver } from "../utils/customDriver";
import { FEEDBACK_TYPES, HANDBOOK_SIDEBAR_ITEMS, SELECTOR_TYPES } from "../utils/types";
import { HomePage } from "./homePage";

export class HandbookPage extends HomePage {
    protected static instance: HandbookPage;

    protected url: string;

    protected constructor() {
        super();

        this.url = `${baseUrl}/docs/handbook/intro.html`;
    }

    static getInstance() {
        if (!(this.instance instanceof HandbookPage)) {
            this.instance = new HandbookPage();
        }

        return HandbookPage.instance;
    }

    public async leaveFeedback(feedbackType: FEEDBACK_TYPES) {
        await (await customDriver.findElement(SELECTOR_TYPES.CSS, `div #${feedbackType}-button`)).click();
    }

    public async getFeedbackElementInnerText() {
        return await (await customDriver.findElement(SELECTOR_TYPES.CSS, "nav #like-dislike-subnav h5")).getText();
    }

    public async getHeaderText() {
        return await (await customDriver.findElement(SELECTOR_TYPES.CSS, "#handbook-content h1")).getText();
    }

    public async getSideNavigationItemByInnerText(text: HANDBOOK_SIDEBAR_ITEMS) {
        return await customDriver.findElement(SELECTOR_TYPES.XPATH, `//li[.//button[contains(text(), "${text}")]]`);
    }

    public async clickSideNavigationItemByInnerText(text: HANDBOOK_SIDEBAR_ITEMS) {
        await (await this.getSideNavigationItemByInnerText(text)).click();
    }

    public async clickButtonOfTheOpenedSidebarItemByText(text: string) {
        await (await customDriver.findElement(SELECTOR_TYPES.XPATH, `//li[contains(@class,"open")]//*[text()="${text}"]`)).click();
    }

    public async waitTillPageHeaderIs(headerText: string) {
        await customDriver.waitForCondition(async () => await this.getHeaderText() === headerText);
    }
}