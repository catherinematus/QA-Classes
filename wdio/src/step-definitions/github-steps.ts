import { generateAlphabeticString } from "../support/helpers";
import { Given, Then, When } from "@cucumber/cucumber";
import { validLogin, validPassword, baseUrl } from "../support/constants"
import { welcomePage } from "../pages/home_page";
import { loginPage } from "../pages/login_page";

Given(/^the User opens web page "(.+)"$/, async (url) => {
    await browser.url(url);
});

When(/^the User scrolls to navigation links$/, async () => {
    await welcomePage.scrollToNavigationLinks();
});

When(/^the User scrolls to header$/, async () => {
    await welcomePage.scrollToHeader();
});

Then(/^the User sees that the text of the link (.+) contains "(.+)"$/u, async (number, expectedText) => {
    const navigationLinks = await welcomePage.getNavigationLinks();
    expect(navigationLinks[number - 1]).toHaveText(expectedText);
});

When(/^the User clicks on "Sign In" button$/, async () => {
    const signInButton = await welcomePage.getSignInButton();
    await signInButton.waitForClickable();
    await signInButton.click();
});

When(/^the User clicks on "Forgot password" link$/, async () => {
    await loginPage.clickForgotPasswordLink();
});

Then(/^the User is on the password reset page$/, async () => {
    await browser.waitUntil(async () => {
        return await browser.getUrl() === `${baseUrl}/password_reset`;
    });
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

Then(/^the User is redirected (from|to) sign-in page$/, async (direction: "from" | "to") => {
    await (await loginPage.loginInput).waitForExist({ reverse: direction === "from" });
});

Then(/^the User sees invalid credentials error message$/, async () => {
    expect(await loginPage.errorMessage).toHaveText("Incorrect username or password.");
})
