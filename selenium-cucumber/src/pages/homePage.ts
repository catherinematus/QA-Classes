import { customDriver } from "../support/customDriver";
import { SCROLL_DIRECTIONS, SELECTOR_TYPES } from "../support/types";
import { BasePage } from "./basePage";

class WelcomePage extends BasePage {
    constructor() {
        super();
    }

    public scrollTo = async (elementToScrollTo: SCROLL_DIRECTIONS) => {
        switch (elementToScrollTo) {
            case SCROLL_DIRECTIONS.HEADER:
                await customDriver.scrollToElement(SELECTOR_TYPES.CSS, "//a[@href='/login']");
                break;
            case SCROLL_DIRECTIONS.NAVIGATION_LINKS:
                await customDriver.scrollToElement(SELECTOR_TYPES.XPATH, "div.sub-nav-mktg-links");
                break;
            default:
                throw new Error("Incorrect item to scroll specified!");
        }
    }

    public getNavigationLinks = () => customDriver.findElements(SELECTOR_TYPES.CSS, "div.sub-nav-mktg div.flex-auto a")

    public getSignInButton = () => customDriver.findElement(SELECTOR_TYPES.XPATH, "//a[@href='/login']")
}

export const welcomePage = new WelcomePage();
