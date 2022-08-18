import reporter, { Options } from 'cucumber-html-reporter';

const options: Options = {
    theme: 'bootstrap',
    jsonFile: './bdd-cucumber/reports',
    output: './bdd-cucumber/reports/html_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version": "0.3.2",
        "Test Environment": "Mocha",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);
