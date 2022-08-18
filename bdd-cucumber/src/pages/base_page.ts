import { driver } from "../support/hooks";

export class BasePage {

    get getPageTitle() {
        return driver.getTitle();
    }

    get getCurrentUrl() {
        return driver.getCurrentUrl();
    }
}
