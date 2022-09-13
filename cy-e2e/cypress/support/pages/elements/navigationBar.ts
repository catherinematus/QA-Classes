/* eslint-disable @typescript-eslint/no-empty-function */
import { defaultWaitingTime } from "../../constants/constants";
import { NAVIGATION_ITEMS } from "../../types/types";

export class NavigationBar {
    constructor() { }

    public getNavigationItemByInnerText(itemText: NAVIGATION_ITEMS) {
        return cy.get("nav[role='navigation']").contains(itemText);
    }

    public getSearchInput() {
        return cy.get("#search-box-top");
    }

    public clickOnNavigationItemByInnerText(item: NAVIGATION_ITEMS) {
        this.getNavigationItemByInnerText(item).click();
    }

    public searchFor(text: string) {
        this.getSearchInput().type(`${text}{enter}`, { delay: defaultWaitingTime / 2 });
    }
}
