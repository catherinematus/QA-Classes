import { NavigationBar } from "./elements/navigationBar";

export class BasePage {
    protected url!: string;

    public navigationBar: NavigationBar;

    constructor() {
        this.navigationBar = new NavigationBar();
    }

    public getPageTitle() {
        cy.task("log", "Getting the page title...");
        return cy.title();
    }

    public waitForTitleToInclude(title: string) {
        cy.task("log", `Waiting for the page title to include "${title}" text...`);
        this.getPageTitle().should("include", title);
    }

    public visitPage() {
        cy.task("log", `Visiting "${this.url}"...`);
        cy.visit(this.url);
    }
}