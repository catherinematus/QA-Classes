import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "chai";
import { DropDown, ELEMENT_TYPES, HEADER_NAVIGATION_ITEMS, PAGES } from "../support/types";
import { PageFactory } from "../pages/page-factory";

Given(/^the User opens "(.+)" page via url$/, async (pageName: PAGES) => {
    await PageFactory.getPage(pageName).visit();
})

When(/^the User goes back in the browser$/, async () => {
    await browser.back();
})

Then(/^the User is (redirected from|on) "(.+)" page$/, async (direction: "redirected from" | "on", pageName: PAGES) => {
    await PageFactory.getPage(pageName).waitForPage(direction === "redirected from");
})

When(/^the User clicks on "(.+)" (label|input|button|link) on "(.+)" page$/, async (elementName: string, elementType: ELEMENT_TYPES, pageName: PAGES) => {
    await (await PageFactory.getPage(pageName).getElement(elementName, elementType)).click();
})

Then(/^the User sees "(.+)" (label|input|button|link) on "(.+)" page( with "(.*)" inner text)?$/, async (elementName: string, elementType: ELEMENT_TYPES, pageName: PAGES, innerText?: string) => {
    const element = await PageFactory.getPage(pageName).getElement(elementName, elementType);
    await element.waitForDisplayed();
    if (innerText) {
        expect(await element.getText()).to.equal(innerText);
    }
})

When(/^the User clicks on "Sign In" button in the page header of "(.+)" page$/, async (pageName: PAGES) => {
    await PageFactory.getPage(pageName).header.signInButton.click();
})

When(/^the User clicks on "(.+)" navigation link in the page header of "(.+)" page$/, async (linkText: HEADER_NAVIGATION_ITEMS, pageName: PAGES) => {
    await PageFactory.getPage(pageName).header.clickNavigationLinkByInnerText(linkText);
})

Then(/^the User (doesn't see|sees) "(.+)" drop down in the page header of "(.+)" page$/, async (elementVisibility: "doesn't see" | "sees", dropDownType: DropDown, pageName: PAGES) => {
    await PageFactory.getPage(pageName).header.getDropDown(dropDownType).waitForDisplayed(elementVisibility === "doesn't see");
})
