import { Page } from "@playwright/test";
import { PAGES } from "../support/types";
import { HandbookPage } from "./handbookPage";
import { HomePage } from "./homePage";

export class PageFactory {
    static getPage(page: Page, pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return new HomePage(page);
            case PAGES.HANDBOOK:
                return new HandbookPage(page);
            default:
                return new HomePage(page);
        }
    }
}