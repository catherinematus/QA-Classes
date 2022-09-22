export class Element {
    private readonly element;

    constructor(locator: string) {
        this.element = $(locator);
    }

    public async waitForDisplayed(reverse = false) {
        await (await this.element).waitForDisplayed({ reverse });
    }

    public async click() {
        await this.waitForDisplayed();
        await this.element.waitForClickable();
        await (await this.element).click();
    }

    public async setValue(value: string) {
        await this.waitForDisplayed();
        await (await this.element).setValue(value);
    }

    public async getText() {
        await this.waitForDisplayed();
        return await (await this.element).getText();
    }
}