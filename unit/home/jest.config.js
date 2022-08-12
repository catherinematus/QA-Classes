/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/unit/home/jest-test/**/*.spec.ts'],
  testRunner: 'jest-jasmine2',
  setupFilesAfterEnv: ['jest-allure/dist/setup'],
  "reporters": [
    "default",
    ["../../node_modules/jest-html-reporter", {
      "pageTitle": "Test Report"
    }]
  ]
};