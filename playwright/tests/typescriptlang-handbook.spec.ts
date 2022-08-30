import { test, expect } from '@playwright/test';
import { HandbookPage } from '../src/pages/handbookPage';
import { PageFactory } from '../src/pages/pageFactory';
import { FEEDBACK_TYPES, HANDBOOK_SIDEBAR_ITEMS, PAGES } from '../src/support/types';

let handbookPage: HandbookPage;

test.describe('Typescript Official Site Tests', async () => {
  test.beforeEach(async ({ page }) => {
    handbookPage = PageFactory.getPage(page, PAGES.HANDBOOK) as HandbookPage;
    await handbookPage.visitPage();
  });

  for (const item in HANDBOOK_SIDEBAR_ITEMS) {
    const buttonName = HANDBOOK_SIDEBAR_ITEMS[item as keyof typeof HANDBOOK_SIDEBAR_ITEMS];
    test(`${buttonName} sidebar item state should be correct by default`, async () => {
      const navigationButtonElement = await handbookPage.getSideNavigationItemByInnerText(buttonName);
      expect(await navigationButtonElement.getAttribute("class"))
        .toContain(buttonName === HANDBOOK_SIDEBAR_ITEMS.HANDBOOK ? "open" : "close");
    });
  }

  test("Should display the feedback section text correctly depending on the feedback given", async () => {
    await expect(await handbookPage.getFeedbackElement()).toHaveText("Is this page helpful?");
    await handbookPage.leaveFeedback(FEEDBACK_TYPES.LIKE);
    await expect(await handbookPage.getFeedbackElement()).toHaveText("Thanks for the feedback");
  });

  test("Should redirect to the correct page after click on navigation bar item", async () => {
    const pageHeader = "Classes";
    await handbookPage.clickButtonOfTheOpenedSidebarItemByText(pageHeader);
    await handbookPage.waitTillPageHeaderHasText(pageHeader);
  });

  test("Should redirect to the correct page after the page search", async () => {
    const pageHeader = "Enums";
    await handbookPage.navigationBar.searchFor(pageHeader);
    await handbookPage.waitTillPageHeaderHasText(pageHeader);
  });
});
