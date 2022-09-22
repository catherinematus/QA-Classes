/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

import "./commands";
import '@shelex/cypress-allure-plugin';

declare global {
    namespace Cypress {
        interface Chainable {
            getElementByPartialClassName(cssSelector: string, classNameText: string): Cypress.Chainable<JQuery<HTMLElement>>
        }
    }
}