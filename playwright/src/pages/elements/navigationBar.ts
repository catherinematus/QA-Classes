import { Page } from "@playwright/test";
import { defaultWaitingTime } from "../../support/constants";
import { NAVIGATION_ITEMS } from "../../support/types";

export class NavigationBar {
    constructor(protected readonly page: Page) { }

    public async getNavigationItemByInnerText(item: NAVIGATION_ITEMS) {
        return this.page.locator(`//nav[@role="navigation"]//*[text()="${item}"]`);
    }

    public async getSearchInput() {
        return this.page.locator("id=search-box-top");
    }

    public async clickOnNavigationItemByInnerText(item: NAVIGATION_ITEMS) {
        await (await this.getNavigationItemByInnerText(item)).click();
    }

    public async searchFor(text: string) {
        const searchInput = await this.getSearchInput();
        await searchInput.type(text, { delay: defaultWaitingTime });
        await this.page.keyboard.press("Enter");
    }
}
