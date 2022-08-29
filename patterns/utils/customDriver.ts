import { By, Locator, until, WebDriver } from "selenium-webdriver";
import { driver } from "../configs/driver";
import { SELECTOR_TYPES } from "../utils/types";
import { defaultWaitingTime } from "./constants";

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

    public async findElement(selectorType: SELECTOR_TYPES, locatorString: string) {
        const locator: Locator = By[selectorType](locatorString);
        await this.driver.wait(until.elementLocated(locator));
        return await this.driver.findElement(locator);
    }

    public async getTitle() {
        await this.driver.getTitle();
    }

    public async takeScreenshot() {
        return await this.driver.takeScreenshot();
    }

    public async waitUntilTitleContains(titleText: string) {
        return await this.driver.wait(until.titleContains(titleText));
    }

    public async waitForCondition(condition: () => PromiseLike<boolean>, timeout?: number) {
        await this.driver.wait(condition, timeout ? timeout : defaultWaitingTime * 1000);
    }

    public async pause(secondsToWait: number) {
        await this.driver.sleep(secondsToWait * 1000);
    }
}

export const customDriver = new CustomDriver();