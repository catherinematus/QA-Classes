import { Key } from "selenium-webdriver";
import { defaultWaitingTime } from "../../utils/constants";
import { customDriver } from "../../utils/customDriver";
import { NAVIGATION_ITEMS, SELECTOR_TYPES } from "../../utils/types";

export class NavigationBar {
    public async getNavigationItemByInnerText(item: NAVIGATION_ITEMS) {
        return await customDriver.findElement(SELECTOR_TYPES.XPATH, `//nav[@role="navigation"]//*[text()="${item}"]`);
    }

    public async getSearchInput() {
        return await customDriver.findElement(SELECTOR_TYPES.ID, "search-box-top");
    }

    public async clickOnNavigationItemByInnerText(item: NAVIGATION_ITEMS) {
        await (await this.getNavigationItemByInnerText(item)).click();
    }

    public async searchFor(text: string) {
        const searchInput = await this.getSearchInput();
        await searchInput.sendKeys(text);
        await customDriver.pause(defaultWaitingTime * 2);
        await searchInput.sendKeys(Key.ENTER);
    }
}

export const navigationBar = new NavigationBar();