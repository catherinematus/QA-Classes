import { expect, Page } from "@playwright/test";
import { baseUrl } from "../support/constants";
import { FEEDBACK_TYPES, HANDBOOK_SIDEBAR_ITEMS } from "../support/types";
import { HomePage } from "./homePage";

export class HandbookPage extends HomePage {
    protected url: string;

    constructor(page: Page) {
        super(page);

        this.url = `${baseUrl}/docs/handbook/intro.html`;
    }

    public async leaveFeedback(feedbackType: FEEDBACK_TYPES) {
        await this.page.locator(`div #${feedbackType}-button`).click();
    }

    public async getFeedbackElement() {
        return this.page.locator("nav #like-dislike-subnav h5");
    }

    public async getHeaderElement() {
        return this.page.locator("#handbook-content h1");
    }

    public async getSideNavigationItemByInnerText(text: HANDBOOK_SIDEBAR_ITEMS) {
        return this.page.locator(`//nav//li[.//button[contains(text(), "${text}")]]`);
    }

    public async clickSideNavigationItemByInnerText(text: HANDBOOK_SIDEBAR_ITEMS) {
        await (await this.getSideNavigationItemByInnerText(text)).click();
    }

    public async clickButtonOfTheOpenedSidebarItemByText(text: string) {
        await this.page.locator(`//li[contains(@class,"open")]//*[text()="${text}"]`).click();
    }

    public async waitTillPageHeaderHasText(headerText: string) {
        await expect(await this.getHeaderElement()).toHaveText(headerText);
    }
}