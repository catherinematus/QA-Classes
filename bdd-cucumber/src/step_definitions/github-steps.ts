import { expect } from "chai";
import { By, until } from "selenium-webdriver";
import { generateAlphabeticString } from "../support/helpers";
import { Given, Then, When } from "@cucumber/cucumber";
import { validLogin, validPassword, baseUrl } from "../support/constants"
import { welcomePage } from "../pages/home_page";
import { loginPage } from "../pages/login_page";
import { driver } from "../support/hooks";

Given(/^the User opens web page (.+)$/u, async (webAddress) => {
    await driver.get(webAddress);
});
When(/^the User scrolls to navigation links$/u, async () => {
    await welcomePage.scrollToNavigationLinks();
});

When(/^the User scrolls to header$/u, async () => {
    await welcomePage.scrollToHeader();
});

Then(/^the User sees that the text of the link (.+) contains (.+)$/u, async (number, expectedText) => {
    const navigationLinks = await welcomePage.getNavigationLinks();
    const linkText = await navigationLinks[number - 1].getText()
    expect(linkText).to.be.deep.equal(expectedText);
});

When(/^the User clicks on Sign In button$/, async () => {
    await welcomePage.getSignInButton().click();
});

Then(/^the User is redirected to sign-in page$/, async () => {
    await driver.wait(until.urlContains(`${baseUrl}/login`));
});

When(/^the User clicks on Forgot password link$/, async () => {
    await loginPage.clickForgotPasswordLink();
});

Then(/^the User is on the password reset page$/, async () => {
    const url = await loginPage.getCurrentUrl;
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

Then(/^the User is redirected from sign-in page$/, async () => {
    const formElement = await driver.findElements(By.css(`form[action="/session"]`));
    expect(formElement).to.have.length(0);
});

Then(/^the User sees invalid credentials error message$/, async () => {
    const text = await loginPage.getErrorMessageText();
    expect(text).to.be.deep.equal("Incorrect username or password.");
})
