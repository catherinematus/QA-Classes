import { expect, Page } from "@playwright/test";
import { baseUrl } from "../support/constants";
import { FEEDBACK_TYPES, HANDBOOK_SIDEBAR_ITEMS } from "../support/types";
import { BasePage } from "./basePage";

export class HandbookPage extends BasePage {
    constructor(page: Page) {
        super(page);

        this.url = `${baseUrl}/docs/handbook/intro.html`;
    }

    public async leaveFeedback(feedbackType: FEEDBACK_TYPES) {
        await this.page.locator(`div #${feedbackType}-button`).click();
    }

    public getFeedbackElement() {
        return this.page.locator("nav #like-dislike-subnav h5");
    }

    public getHeaderElement() {
        return this.page.locator("#handbook-content h1");
    }

    public getSideNavigationItemByInnerText(text: HANDBOOK_SIDEBAR_ITEMS) {
        return this.page.locator(`//nav//li[.//button[contains(text(), "${text}")]]`);
    }

    public async clickSideNavigationItemByInnerText(text: HANDBOOK_SIDEBAR_ITEMS) {
        await this.getSideNavigationItemByInnerText(text).click();
    }

    public async clickButtonOfTheOpenedSidebarItemByText(text: string) {
        await this.page.locator(`//li[contains(@class,"open")]//*[text()="${text}"]`).click();
    }

    public async waitTillPageHeaderHasText(headerText: string) {
        await expect(this.getHeaderElement()).toHaveText(headerText);
    }
}