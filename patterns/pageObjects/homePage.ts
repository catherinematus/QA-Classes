import { Key, WebDriver } from "selenium-webdriver";
import { baseUrl, defaultWaitingTime } from "../utils/constants";
import { NAVIGATION_ITEMS, SELECTOR_TYPES } from "../utils/types";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    protected static instance: HomePage;

    protected url: string;

    protected constructor(driver: WebDriver) {
        super(driver);

        this.url = baseUrl;
    }

    static getInstance(driver: WebDriver) {
        if (!this.instance) {
            this.instance = new HomePage(driver);
        }

        return HomePage.instance;
    }

    public async visitPage() {
        await this.driver.get(this.url);
    }

    public async getNavigationItemByInnerText(item: NAVIGATION_ITEMS) {
        return await this.driverUtils.findElement(SELECTOR_TYPES.XPATH, `//nav[@role="navigation"]//*[text()="${item}"]`);
    }

    public async getSearchInput() {
        return await this.driverUtils.findElement(SELECTOR_TYPES.ID, "search-box-top");
    }

    public async clickOnNavigationItemByInnerText(item: NAVIGATION_ITEMS) {
        await (await this.getNavigationItemByInnerText(item)).click();
    }

    public async searchFor(text: string) {
        await this.driver.actions()
            .click(await this.getSearchInput())
            .sendKeys(text)
            .pause(defaultWaitingTime)
            .sendKeys(Key.RETURN)
            .perform();
    }
}