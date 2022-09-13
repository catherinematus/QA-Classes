export class ElementArray {
    private readonly elements;

    constructor(locator: string) {
        this.elements = $$(locator);
    }

    public getInnerTextArray() {
        return this.elements.map(element => {
            return element.getText();
        });
    }
}