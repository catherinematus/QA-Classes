import { FEEDBACK_TYPES, HANDBOOK_SIDEBAR_ITEMS } from "../types/types";
import { BasePage } from "./basePage";

export class HandbookPage extends BasePage {
    constructor() {
        super();

        this.url = "/docs/handbook/intro.html";
    }

    public leaveFeedback(feedbackType: FEEDBACK_TYPES) {
        cy.get(`div #${feedbackType}-button`).click();
    }

    public getFeedbackElement() {
        return cy.get("nav #like-dislike-subnav h5");
    }

    public getHeaderElement() {
        return cy.get("#handbook-content h1");
    }

    public getSideNavigationItemByInnerText(text: HANDBOOK_SIDEBAR_ITEMS) {
        return cy.get("button")
            .contains(text)
            .parents("nav li");
    }

    public clickSideNavigationItemByInnerText(text: HANDBOOK_SIDEBAR_ITEMS) {
        this.getSideNavigationItemByInnerText(text).click();
    }

    public clickButtonOfTheOpenedSidebarItemByText(text: string) {
        cy.getElementByPartialClassName("li", "open")
            .find("a")
            .contains(text)
            .click();
    }

    public waitTillPageHeaderHasText(headerText: string) {
        this.getHeaderElement().should("have.text", headerText);
    }
}