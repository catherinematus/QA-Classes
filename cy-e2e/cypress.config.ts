import { defineConfig } from "cypress";
import { assetsFolder, baseUrl, defaultWaitingTime } from "./cypress/support/constants/constants";

export default defineConfig({
  e2e: {
    supportFile: "cy-e2e/cypress/support/index.ts",
    specPattern: "cy-e2e/cypress/e2e/**/*.cy.ts",
    defaultCommandTimeout: defaultWaitingTime * 5,
    baseUrl,
    videosFolder: `${assetsFolder}/videos`,
    downloadsFolder: `${assetsFolder}/downloads`,
    screenshotsFolder: `${assetsFolder}/screenshots`,
    fixturesFolder: "cy-e2e/cypress/fixtures"
  },
});
