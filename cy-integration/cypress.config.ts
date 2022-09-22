import { defineConfig } from "cypress";
import { assetsFolder, baseUrl, defaultWaitingTime } from "./cypress/support/constants/constants";
import AllureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
  e2e: {
    supportFile: "cy-integration/cypress/support/index.ts",
    specPattern: "cy-integration/cypress/integration/**/*.cy.ts",
    defaultCommandTimeout: defaultWaitingTime * 5,
    baseUrl,
    videosFolder: `${assetsFolder}/videos`,
    downloadsFolder: `${assetsFolder}/downloads`,
    screenshotsFolder: `${assetsFolder}/screenshots`,
    fixturesFolder: "cy-integration/cypress/fixtures",
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
