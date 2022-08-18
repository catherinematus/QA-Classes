import { By } from "selenium-webdriver";
import { driverUtils } from "../support/driver_utils";
import { driver } from "../support/hooks";
import { BasePage } from "./base_page";

class WelcomePage extends BasePage {

    constructor() {
        super();
    }

    public scrollToNavigationLinks = async () => {
        const element = await driver.findElement(By.css(`div.sub-nav-mktg`));
        await driverUtils.scrollToElement(element);
    }

    public scrollToHeader = async () => {
        const element = await driver.findElement(By.xpath("//a[@href='/login']"));
        await driverUtils.scrollToElement(element);
    }

    public getNavigationLinks = () => driver.findElements(By.css(`div.sub-nav-mktg div.flex-auto a`))

    public getSignInButton = () => driver.findElement(By.xpath(`//a[@href='/login']`))
}

export const welcomePage = new WelcomePage();
