import { customDriver } from "../support/customDriver";

export class BasePage {
    get getPageTitle() {
        return customDriver.getTitle();
    }

    get getCurrentUrl() {
        return customDriver.getCurrentUrl();
    }
}
