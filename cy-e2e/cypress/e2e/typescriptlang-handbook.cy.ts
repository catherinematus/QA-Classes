import { HandbookPage } from '../support/pages/handbookPage';
import { PageFactory } from '../support/pages/pageFactory';
import { FEEDBACK_TYPES, HANDBOOK_SIDEBAR_ITEMS, PAGES } from '../support/types/types';

const handbookPage = PageFactory.getPage(PAGES.HANDBOOK) as HandbookPage;

describe('Typescript Official Site Tests - Handbook Page', () => {
  before(() => {
    handbookPage.visitPage();
  });

  for (const item in HANDBOOK_SIDEBAR_ITEMS) {
    const buttonName = HANDBOOK_SIDEBAR_ITEMS[item as keyof typeof HANDBOOK_SIDEBAR_ITEMS];
    it(`${buttonName} sidebar item state should be correct by default`, () => {
      handbookPage.getSideNavigationItemByInnerText(buttonName)
        .should("have.class", buttonName === HANDBOOK_SIDEBAR_ITEMS.HANDBOOK ? "open" : "closed");
    });
  }

  it("Should display the feedback section text correctly depending on the feedback given", () => {
    handbookPage.getFeedbackElement().should("have.text", "Is this page helpful?")
    handbookPage.leaveFeedback(FEEDBACK_TYPES.LIKE);
    handbookPage.getFeedbackElement().should("have.text", "Thanks for the feedback")
  });

  it("Should redirect to the correct page after click on navigation bar item", () => {
    cy.fixture("example.json").then((fixture) => {
      const { navigationItem } = fixture;
      handbookPage.clickButtonOfTheOpenedSidebarItemByText(navigationItem);
      handbookPage.waitTillPageHeaderHasText(navigationItem);
    });
  });

  it("Should redirect to the correct page after the page search", () => {
    const pageHeader = "Enums";
    handbookPage.navigationBar.searchFor(pageHeader);
    handbookPage.waitTillPageHeaderHasText(pageHeader);
  });
});