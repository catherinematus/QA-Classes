import { customDriver } from "../utils/customDriver";

export class BasePage {
    public async getPageTitle() {
        return await customDriver.getTitle();
    }

    public async waitForTitleToContain(title: string) {
        await customDriver.waitUntilTitleContains(title);
    }
}