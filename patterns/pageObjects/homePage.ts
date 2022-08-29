import { baseUrl } from "../utils/constants";
import { customDriver } from "../utils/customDriver";
import { BasePage } from "./basePage";
import { navigationBar, NavigationBar } from "./elements/navigationBar";

export class HomePage extends BasePage {
    protected static instance: HomePage;

    protected url: string;

    public navigationBar: NavigationBar;

    protected constructor() {
        super();

        this.url = baseUrl;
        this.navigationBar = navigationBar;
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new HomePage();
        }

        return HomePage.instance;
    }

    public async visitPage() {
        await customDriver.openUrl(this.url);
    }
}