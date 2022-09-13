/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

Cypress.Commands.add('getElementByPartialClassName', (cssSelector: string, classNameText: string) => {
    return cy.get(`${cssSelector}[class*='${classNameText}']`);
})

declare global {
    namespace Cypress {
        interface Chainable {
            getElementByPartialClassName(cssSelector: string, classNameText: string): Cypress.Chainable<JQuery<HTMLElement>>
        }
    }
}

export { };