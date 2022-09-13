import { expect, Page } from "@playwright/test";
import { NavigationBar } from "./elements/navigationBar";

export class BasePage {
    protected url!: string;

    public navigationBar: NavigationBar;

    constructor(protected readonly page: Page) {
        this.navigationBar = new NavigationBar(page);
    }

    public async getPageTitle() {
        return await this.page.title();
    }

    public async waitForTitleToBe(title: string | RegExp) {
        await expect(this.page).toHaveTitle(title);
    }

    public async visitPage() {
        await this.page.goto(this.url);
    }
}