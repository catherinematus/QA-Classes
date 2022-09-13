import { PAGES } from "../support/types";
import { forgotPasswordPage } from "./forgot_password_page";
import { homePage } from "./home_page";
import { loginPage } from "./login_page";

export class PageFactory {
    static getPage(pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return homePage;
            case PAGES.LOGIN:
                return loginPage;
            case PAGES.FORGOT_PASSWORD:
                return forgotPasswordPage;
            default:
                throw new Error("Incorrect page name is provided!");
        }
    }
}