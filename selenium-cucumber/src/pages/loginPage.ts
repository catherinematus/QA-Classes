import { customDriver } from "../support/customDriver";
import { SELECTOR_TYPES } from "../support/types";
import { BasePage } from "./basePage";

class LoginPage extends BasePage {
    constructor() {
        super();
    }

    get loginInput() {
        return customDriver.findElement(SELECTOR_TYPES.NAME, "login");
    }

    get passwordInput() {
        return customDriver.findElement(SELECTOR_TYPES.NAME, "password");
    }

    get submitButton() {
        return customDriver.findElement(SELECTOR_TYPES.CSS, "input[type=submit]");
    }

    public async getErrorMessageText() {
        return (await customDriver.findElement(SELECTOR_TYPES.XPATH, '//div[contains(@class,"flash-full flash-error")]')).getText();
    }

    public async clickForgotPasswordLink() {
        await (await customDriver.findElement(SELECTOR_TYPES.XPATH, '//a[text()[contains(.,"Forgot password?")]]')).click();
    }

    public performLogin = async (login: string, password: string) => {
        await (await this.loginInput).sendKeys(login);
        await (await this.passwordInput).sendKeys(password);
        await (await this.submitButton).click();
    };
}

export const loginPage = new LoginPage();
