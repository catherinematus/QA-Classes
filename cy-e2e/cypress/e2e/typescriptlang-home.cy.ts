import { HandbookPage } from '../support/pages/handbookPage';
import { PageFactory } from '../support/pages/pageFactory';
import { NAVIGATION_ITEMS, PAGES } from '../support/types/types';

describe('Typescript Official Site Tests - Home Page', () => {
  it("Should display page title correctly", () => {
    const homePage = PageFactory.getPage(PAGES.HOME);
    const handbookPage = PageFactory.getPage(PAGES.HANDBOOK) as HandbookPage;

    homePage.visitPage();
    homePage.navigationBar.clickOnNavigationItemByInnerText(NAVIGATION_ITEMS.HANDBOOK);
    handbookPage.waitForTitleToInclude("The TypeScript Handbook");
  });
});
