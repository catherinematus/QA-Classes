import { baseUrl } from "../support/constants";
import { Element } from "../support/element";
import { BasePage } from "./base_page";

class ForgotPasswordPage extends BasePage {
    constructor() {
        super();

        this.url = baseUrl;

        this.pageIdentifier = this.emailInput

        this.inputs = {
            "Email": this.emailInput
        }
    }

    get emailInput() {
        return new Element("#email_field");
    }
}

export const forgotPasswordPage = new ForgotPasswordPage();
