import { baseUrl } from "../utils/constants";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    protected static instance: HomePage;

    protected constructor() {
        super();

        this.url = baseUrl;
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new HomePage();
        }

        return HomePage.instance;
    }
}