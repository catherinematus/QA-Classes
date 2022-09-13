import { baseUrl } from "../support/constants";
import { Element } from "../support/element";
import { BasePage } from "./base_page";

class LoginPage extends BasePage {
    constructor() {
        super();

        this.url = `${baseUrl}/login`

        this.pageIdentifier = this.loginInput

        this.inputs = {
            "Login": this.loginInput,
            "Password": this.passwordInput
        }

        this.buttons = {
            "Submit": this.submitButton
        }

        this.links = {
            "Forgot password": this.forgotPasswordLink
        }

        this.labels = {
            "Error": this.errorMessage
        }
    }

    get loginInput() {
        return new Element("//*[@name='login']");
    }

    get passwordInput() {
        return new Element("//*[@name='password']");
    }

    get submitButton() {
        return new Element("input[type=submit]");
    }

    get forgotPasswordLink() {
        return new Element("//a[text()[contains(.,'Forgot password?')]]");
    }

    get errorMessage() {
        return new Element(".flash.flash-full.flash-error");
    }

    public performLogin = async (login: string, password: string) => {
        await this.loginInput.setValue(login);
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    };
}

export const loginPage = new LoginPage();
