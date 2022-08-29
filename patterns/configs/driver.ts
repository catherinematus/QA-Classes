import * as dotenv from "dotenv";
import { Builder, WebDriver } from "selenium-webdriver";

dotenv.config({ path: "patterns/configs/.env" });

const browserToBuildFor = process.env.BROWSER === "firefox" ? process.env.BROWSER : "chrome";

export const driver: WebDriver = new Builder()
    .forBrowser(browserToBuildFor)
    .build();