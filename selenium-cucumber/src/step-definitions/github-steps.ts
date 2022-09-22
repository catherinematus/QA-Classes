import { expect } from "chai";
import { Given, Then, When } from "@cucumber/cucumber";
import { generateAlphabeticString } from "../support/helpers";
import { validLogin, validPassword, baseUrl } from "../support/constants"
import { welcomePage } from "../pages/homePage";
import { loginPage } from "../pages/loginPage";
import { customDriver } from "../support/customDriver";
import { SCROLL_DIRECTIONS } from "../support/types";

Given(/^the User opens web page (.+)$/, async (webAddress) => {
    await customDriver.openUrl(webAddress);
});

When(/^the User scrolls to (navigation links|header)$/, async (elementToScrollTo: SCROLL_DIRECTIONS) => {
    await welcomePage.scrollTo(elementToScrollTo);
});

Then(/^the User sees that the text of the link (.+) contains (.+)$/, async (number, expectedText) => {
    const navigationLinks = await welcomePage.getNavigationLinks();
    const linkText = await navigationLinks[number - 1].getText()
    expect(linkText).to.be.deep.equal(expectedText);
});

When(/^the User clicks on Sign In button$/, async () => {
    await (await welcomePage.getSignInButton()).click();
});

Then(/^the User is redirected (to|from) sign-in page$/, async (direction: "to" | "from") => {
    const urlToCompare = `${baseUrl}/login`;

    await customDriver.waitForCondition(async () => {
        switch (direction) {
            case "to":
                return await customDriver.getCurrentUrl() === urlToCompare;
            case "from":
                return await customDriver.getCurrentUrl() !== urlToCompare;
        }
    });
});

When(/^the User clicks on Forgot password link$/, async () => {
    await loginPage.clickForgotPasswordLink();
});

Then(/^the User is on the password reset page$/, async () => {
    const url = await loginPage.getCurrentUrl();
    expect(url).to.contain(`${baseUrl}/password_reset`);
});

When(/^the User logs in with invalid username of (.+) symbols length$/, async (length) => {
    const invalidLogin = generateAlphabeticString(length);
    await loginPage.performLogin(invalidLogin, validPassword);
});

When(/^the User logs in with invalid password of (.+) symbols length$/, async (length) => {
    const invalidPassword = generateAlphabeticString(length);
    await loginPage.performLogin(validLogin, invalidPassword);
});

When(/^the User logs in with valid credentials$/, async () => {
    await loginPage.performLogin(validLogin, validPassword);
});

Then(/^the User sees invalid credentials error message$/, async () => {
    const text = await loginPage.getErrorMessageText();
    expect(text).to.be.deep.equal("Incorrect username or password.");
})
