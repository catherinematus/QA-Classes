import { Element } from "../support/element";
import { ELEMENT_TYPES } from "../support/types";
import { header, Header } from "./elements/header";

export class BasePage {
    protected url!: string;
    protected pageIdentifier!: Element;

    protected inputs!: { [key: string]: Element };
    protected buttons!: { [key: string]: Element };
    protected links!: { [key: string]: Element };
    protected labels!: { [key: string]: Element };

    public readonly header: Header = header;

    public async visit() {
        await browser.url(this.url);
    }

    public async waitForPage(reverse = false) {
        await this.pageIdentifier.waitForDisplayed(reverse);
    }

    get pageTitle() {
        return browser.getTitle();
    }

    get currentUrl() {
        return browser.getUrl();
    }

    public async getElement(elementName: string, elementType: ELEMENT_TYPES) {
        if (this[`${elementType}s`]) {
            const elementsBlock = this[`${elementType}s`];
            if (elementName in elementsBlock) {
                return elementsBlock[elementName];
            } else throw new Error("Invalid element name is provided!");
        } else throw new Error("Invalid element type is provided!");
    }
}
