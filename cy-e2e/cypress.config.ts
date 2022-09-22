import { defineConfig } from "cypress";
import { assetsFolder, baseUrl, defaultWaitingTime } from "./cypress/support/constants/constants";
import AllureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
  e2e: {
    supportFile: "cy-e2e/cypress/support/index.ts",
    specPattern: "cy-e2e/cypress/e2e/**/*.cy.ts",
    defaultCommandTimeout: defaultWaitingTime * 5,
    baseUrl,
    videosFolder: `${assetsFolder}/videos`,
    downloadsFolder: `${assetsFolder}/downloads`,
    screenshotsFolder: `${assetsFolder}/screenshots`,
    fixturesFolder: "cy-e2e/cypress/fixtures",
    setupNodeEvents(on, config) {
      AllureWriter(on, config);
      return config;
    },
    env: {
      allure: "true",
      allureResultsPath: `${assetsFolder}/allure-results`
    }
  },
});