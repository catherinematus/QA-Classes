import { BasePage } from "./base_page";

class WelcomePage extends BasePage {
    constructor() {
        super();
    }

    public scrollToNavigationLinks = async () => {
        await (await $("div.sub-nav-mktg")).scrollIntoView();
    }

    public scrollToHeader = async () => {
        await (await $("//a[@href='/login']")).scrollIntoView();
    }

    public getNavigationLinks = () => $$(`div.sub-nav-mktg div.flex-auto a`)

    public getSignInButton = () => $(`//a[@href='/login']`)
}

export const welcomePage = new WelcomePage();
