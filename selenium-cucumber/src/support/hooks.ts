import { After, AfterAll, Before, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { rmSync } from "fs";
import { defaultTimeoutMs } from "./constants";
import { customDriver } from "./customDriver";

setDefaultTimeout(defaultTimeoutMs);

BeforeAll(function () {
    rmSync("./bdd-cucumber/reports/html_report.html", { force: true });
});

Before(async function () {
    await customDriver.maximizeWindow();
})

After(async function () {
    const imageData = await customDriver.takeScreenshot();
    await this.attach(Buffer.from(imageData, 'base64'), 'image/png');
})

AfterAll(async function () {
    await customDriver.quitBrowser();
})
