import { After, Before, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { rmSync } from "fs";
import { Builder, Capabilities, ThenableWebDriver } from "selenium-webdriver";

setDefaultTimeout(240 * 1000);

let driver: ThenableWebDriver;

BeforeAll(function () {
    rmSync("./bdd-cucumber/reports/html_report.html", { force: true });
});

Before(async function () {
    driver = new Builder()
        .withCapabilities(Capabilities.chrome())
        .build();
    await driver.manage().window().maximize();
})

After(async function () {
    const imageData = await driver.takeScreenshot();
    await this.attach(Buffer.from(imageData, 'base64'), 'image/png');
    await driver.quit();
})

export { driver };
