import { HandbookPage } from '../support/pages/handbookPage';
import { PageFactory } from '../support/pages/pageFactory';
import { NAVIGATION_ITEMS, PAGES } from '../support/types/types';

describe('Typescript Official Site Tests - Home Page', () => {
  before(() => {
    cy.intercept("POST", "https://dc.services.visualstudio.com/v2/track").as("track");
  });

  it("Should display page title correctly", () => {
    const homePage = PageFactory.getPage(PAGES.HOME);
    const handbookPage = PageFactory.getPage(PAGES.HANDBOOK) as HandbookPage;

    homePage.visitPage();
    homePage.navigationBar.clickOnNavigationItemByInnerText(NAVIGATION_ITEMS.HANDBOOK);

    cy.wait("@track").then(data => {
      expect(data.response?.statusCode).to.equal(200);
      expect(data.response?.body.errors).to.have.length(0);
    });
    handbookPage.waitForTitleToInclude("The TypeScript Handbook");
  });
});
