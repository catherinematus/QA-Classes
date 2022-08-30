import { expect, Page } from "@playwright/test";

export class BasePage {
    constructor(protected readonly page: Page) { }

    public async getPageTitle() {
        return await this.page.title();
    }

    public async waitForTitleToBe(title: string | RegExp) {
        await expect(this.page).toHaveTitle(title);
    }
}