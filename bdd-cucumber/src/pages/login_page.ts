import { By } from "selenium-webdriver";
import { driverUtils } from "../support/driver_utils";
import { driver } from "../support/hooks";
import { BasePage } from "./base_page";

class LoginPage extends BasePage {

    constructor() {
        super();
    }

    get loginInput() {
        return driver.findElement(By.name("login"));
    }

    get passwordInput() {
        return driver.findElement(By.name("password"));
    }

    get submitButtonLocator() {
        return By.css("input[type=submit]");
    }

    public getErrorMessageText() {
        return driver.findElement(By.css(".flash.flash-full.flash-error")).getText();
    }

    public clickForgotPasswordLink = async () => {
        const locator = By.xpath(`//a[text()[contains(.,"Forgot password?")]]`);
        await driverUtils.clickElement(locator);
    }

    public performLogin = async (login: string, password: string) => {
        await driverUtils.enterText(await this.loginInput, login);
        await driverUtils.enterText(await this.passwordInput, password);
        await driverUtils.clickElement(this.submitButtonLocator);
    };

}

export const loginPage = new LoginPage();
