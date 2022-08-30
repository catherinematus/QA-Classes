import { test } from '@playwright/test';
import { HandbookPage } from '../src/pages/handbookPage';
import { PageFactory } from '../src/pages/pageFactory';
import { NAVIGATION_ITEMS, PAGES } from '../src/support/types';

test.describe('Typescript Official Site Tests - Home Page', async () => {
  test("Should display page title correctly", async ({ page }) => {
    const homePage = PageFactory.getPage(page, PAGES.HOME);
    const handbookPage = PageFactory.getPage(page, PAGES.HANDBOOK) as HandbookPage;

    await homePage.visitPage();
    await homePage.navigationBar.clickOnNavigationItemByInnerText(NAVIGATION_ITEMS.HANDBOOK);
    await handbookPage.waitForTitleToBe(/.*The TypeScript Handbook.*/);
  });
});
