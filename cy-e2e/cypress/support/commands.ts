Cypress.Commands.add('getElementByPartialClassName', (cssSelector: string, classNameText: string) => {
    return cy.get(`${cssSelector}[class*='${classNameText}']`);
})