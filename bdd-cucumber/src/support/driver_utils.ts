import { defaultTimeoutMs } from "./constants";
import { Locator, until, WebElement } from "selenium-webdriver";
import { driver } from "./hooks";

class DriverUtils {
    public clickElement = async (locator: Locator) => {
        await driver.wait(until.elementLocated(locator), defaultTimeoutMs);
        await driver.findElement(locator).click();
    };

    public getElementInnerText = async (locator: Locator) => {
        await driver.wait(until.elementLocated(locator), defaultTimeoutMs);
        await driver.findElement(locator).getText();
    };

    public enterText = async (element: WebElement, text: string) => {
        await driver.wait(until.elementIsVisible(element), defaultTimeoutMs);
        await element.sendKeys(text);
    };

    public scrollToElement = async (element: WebElement) => {
        await driver.executeScript("arguments[0].scrollIntoView(true);", element)
    };
}

export const driverUtils = new DriverUtils();
