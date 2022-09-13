import { customDriver } from "../support/customDriver";

export class BasePage {
    getPageTitle() {
        return customDriver.getTitle();
    }

    getCurrentUrl() {
        return customDriver.getCurrentUrl();
    }
}
