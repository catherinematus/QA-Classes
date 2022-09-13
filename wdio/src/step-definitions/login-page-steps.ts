import { generateAlphabeticString } from "../support/helpers";
import { When } from "@cucumber/cucumber";
import { validLogin, validPassword } from "../support/constants"
import { loginPage } from "../pages/login_page";

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
