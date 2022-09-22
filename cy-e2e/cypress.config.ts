/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "cypress";
import { assetsFolder, baseUrl, defaultWaitingTime } from "./cypress/support/constants/constants";
import AllureWriter from "@shelex/cypress-allure-plugin/writer";
import { logger } from "./cypress/support/logger";

export default defineConfig({
  e2e: {
    supportFile: "cy-e2e/cypress/support/index.ts",
    specPattern: "cy-e2e/cypress/e2e/**/*.cy.ts",
    defaultCommandTimeout: defaultWaitingTime * 5,
    baseUrl,
    video: false,
    downloadsFolder: `${assetsFolder}/downloads`,
    screenshotsFolder: `${assetsFolder}/screenshots`,
    fixturesFolder: "cy-e2e/cypress/fixtures",
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          logger.info(message);
          return null;
        },
      });
      require('cypress-mochawesome-reporter/plugin')(on);
      AllureWriter(on, config);
      return config;
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportDir: `${assetsFolder}/html-report`,
      reportFilename: "report",
      reportPageTitle: "TypescriptLang UI Tests",
      embeddedScreenshots: true,
    },
    env: {
      allure: "true",
      allureResultsPath: `${assetsFolder}/allure-results`
    }
  },
});
