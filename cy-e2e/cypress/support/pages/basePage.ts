import { NavigationBar } from "./elements/navigationBar";

export class BasePage {
    protected url!: string;

    public navigationBar: NavigationBar;

    constructor() {
        this.navigationBar = new NavigationBar();
    }

    public getPageTitle() {
        return cy.title();
    }

    public async waitForTitleToInclude(title: string) {
        this.getPageTitle().should("include", title);
    }

    public async visitPage() {
        cy.visit(this.url);
    }
}