import { Page } from "@playwright/test";
import { baseUrl } from "../support/constants";
import { BasePage } from "./basePage";
import { NavigationBar } from "./elements/navigationBar";

export class HomePage extends BasePage {
    protected url: string;

    public navigationBar: NavigationBar;

    constructor(page: Page) {
        super(page);

        this.url = baseUrl;
        this.navigationBar = new NavigationBar(page);
    }

    public async visitPage() {
        await this.page.goto(this.url);
    }
}