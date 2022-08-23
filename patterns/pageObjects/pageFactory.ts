import { WebDriver } from "selenium-webdriver";
import { PAGES } from "../utils/types";
import { HandbookPage } from "./handbookPage";
import { HomePage } from "./homePage";

export class PageFactory {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }

    static getPage(driver: WebDriver, pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return HomePage.getInstance(driver);
            case PAGES.HANDBOOK:
                return HandbookPage.getInstance(driver);
            default:
                return HomePage.getInstance(driver);
        }
    }
}