import { PAGES } from "../utils/types";
import { HandbookPage } from "./handbookPage";
import { HomePage } from "./homePage";

export class PageFactory {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }

    static getPage(pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return HomePage.getInstance();
            case PAGES.HANDBOOK:
                return HandbookPage.getInstance();
            default:
                return HomePage.getInstance();
        }
    }
}