import { Then } from "@cucumber/cucumber";
import { homePage } from "../pages/home_page";
import { expect } from "chai";

Then(/^the User sees that the text of the navigation links on the "Home" page is "(.+)"$/u, async (expectedText: string) => {
    const expectedTextArray = expectedText.split(", ")
    const innerTextArray = await homePage.navigationLinks.getInnerTextArray();
    expect(innerTextArray).to.eql(expectedTextArray);
})
