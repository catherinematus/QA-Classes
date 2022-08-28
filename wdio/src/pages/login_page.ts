import { BasePage } from "./base_page";

class LoginPage extends BasePage {
    constructor() {
        super();
    }

    get loginInput() {
        return $(`//*[@name="login"]`);
    }

    get passwordInput() {
        return $(`//*[@name="password"]`);
    }

    get submitButton() {
        return $("input[type=submit]");
    }

    get errorMessage() {
        return $(".flash.flash-full.flash-error");
    }

    public clickForgotPasswordLink = async () => {
        await (await $(`//a[text()[contains(.,"Forgot password?")]]`)).click();
    }

    public performLogin = async (login: string, password: string) => {
        await (await this.loginInput).setValue(login);
        await (await this.passwordInput).setValue(password);
        await (await this.submitButton).click();
    };
}

export const loginPage = new LoginPage();
