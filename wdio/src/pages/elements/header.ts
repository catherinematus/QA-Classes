import { Element } from "../../support/element";
import { DropDown, HEADER_NAVIGATION_ITEMS } from "../../support/types";

export class Header {
    get signInButton() {
        return new Element('//a[@href="/login"]');
    }

    public getNavigationLinkByInnerText(text: HEADER_NAVIGATION_ITEMS) {
        return new Element(`//header//nav/ul//*[contains(text(), "${text}")]`)
    }

    public async clickNavigationLinkByInnerText(text: HEADER_NAVIGATION_ITEMS) {
        await this.getNavigationLinkByInnerText(text).click();
    }

    public getDropDown(dropDownType: DropDown) {
        return new Element(`//header//nav/ul//*[contains(text(), "${dropDownType}")]/..//ul`);
    }
}

export const header = new Header();