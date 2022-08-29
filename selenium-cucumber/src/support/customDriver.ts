import { By, Locator, until, WebDriver } from "selenium-webdriver";
import { driver } from "../../configs/driver";
import { SELECTOR_TYPES } from "./types";
import { defaultTimeoutMs } from "./constants";

class CustomDriver {
    protected readonly driver: WebDriver;

    constructor() {
        this.driver = driver;
    }

    public async openUrl(url: string) {
        await this.driver.get(url);
    }

    public async maximizeWindow() {
        await this.driver.manage().window().maximize();
    }

    public async quitBrowser() {
        await this.driver.quit();
    }

    private async getElementLocator(selectorType: SELECTOR_TYPES, locatorString: string) {
        const locator: Locator = By[selectorType](locatorString);
        await this.driver.wait(until.elementLocated(locator));
        return locator;
    }

    public async findElement(selectorType: SELECTOR_TYPES, locatorString: string) {
        const locator = await this.getElementLocator(selectorType, locatorString);
        return await this.driver.findElement(locator);
    }

    public async findElements(selectorType: SELECTOR_TYPES, locatorString: string) {
        const locator = await this.getElementLocator(selectorType, locatorString);
        return await this.driver.findElements(locator);
    }

    public async scrollToElement(selectorType: SELECTOR_TYPES, locatorString: string) {
        const element = await this.findElement(selectorType, locatorString);
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
    }

    public async getTitle() {
        return await this.driver.getTitle();
    }

    public async getCurrentUrl() {
        return await this.driver.getCurrentUrl();
    }

    public async takeScreenshot() {
        return await this.driver.takeScreenshot();
    }

    public async waitForCondition(condition: () => PromiseLike<boolean>, timeout?: number) {
        await this.driver.wait(condition, timeout ? timeout : defaultTimeoutMs);
    }
}

export const customDriver = new CustomDriver();