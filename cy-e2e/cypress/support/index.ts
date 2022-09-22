/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

import './commands';
import '@shelex/cypress-allure-plugin';
import 'cypress-mochawesome-reporter/register';

declare global {
    namespace Cypress {
        interface Chainable {
            getElementByPartialClassName(cssSelector: string, classNameText: string): Cypress.Chainable<JQuery<HTMLElement>>
        }
    }
}