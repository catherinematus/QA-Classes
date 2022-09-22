import { FEEDBACK_TYPES, HANDBOOK_SIDEBAR_ITEMS } from "../types/types";
import { BasePage } from "./basePage";

export class HandbookPage extends BasePage {
    constructor() {
        super();

        this.url = "/docs/handbook/intro.html";
    }

    public leaveFeedback(feedbackType: FEEDBACK_TYPES) {
        cy.task("log", `Leaving "${feedbackType}" feedback...`);
        cy.get(`div #${feedbackType}-button`).click();
    }

    public getFeedbackElement() {
        cy.task("log", "Getting feedback section element...");
        return cy.get("nav #like-dislike-subnav h5");
    }

    public getHeaderElement() {
        cy.task("log", "Getting header element...");
        return cy.get("#handbook-content h1");
    }

    public getSideNavigationItemByInnerText(text: HANDBOOK_SIDEBAR_ITEMS) {
        cy.task("log", `Getting side navigation item with "${text}" text...`);
        return cy.get("button")
            .contains(text)
            .parents("nav li");
    }

    public clickSideNavigationItemByInnerText(text: HANDBOOK_SIDEBAR_ITEMS) {
        cy.task("log", `Clicking on side navigation item with "${text}" text...`);
        this.getSideNavigationItemByInnerText(text).click();
    }

    public clickButtonOfTheOpenedSidebarItemByText(text: string) {
        cy.task("log", `Clicking on the opened sidebar item with "${text}" text...`);
        cy.getElementByPartialClassName("li", "open")
            .find("a")
            .contains(text)
            .click();
    }

    public waitTillPageHeaderHasText(headerText: string) {
        cy.task("log", `Waiting for page header element to have "${headerText}" text...`);
        this.getHeaderElement().should("have.text", headerText);
    }
}