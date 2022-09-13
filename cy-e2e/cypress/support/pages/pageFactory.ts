import { PAGES } from "../types/types";
import { HandbookPage } from "./handbookPage";
import { HomePage } from "./homePage";

export class PageFactory {
    static getPage(pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return new HomePage();
            case PAGES.HANDBOOK:
                return new HandbookPage();
            default:
                return new HomePage();
        }
    }
}