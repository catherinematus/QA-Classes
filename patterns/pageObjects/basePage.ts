import { customDriver } from "../utils/customDriver";
import { navigationBar, NavigationBar } from "./elements/navigationBar";

export class BasePage {
    protected url!: string;

    public navigationBar: NavigationBar = navigationBar;

    public async visitPage() {
        await customDriver.openUrl(this.url);
    }

    public async getPageTitle() {
        return await customDriver.getTitle();
    }

    public async waitForTitleToContain(title: string) {
        await customDriver.waitUntilTitleContains(title);
    }
}