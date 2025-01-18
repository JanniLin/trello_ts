exports.config = {
  runner: "local",
  baseUrl: "https://trello.com",

  specs: ["./../test/features/**/*.feature"],

  // specs: [
  //"./../test/specs/**/*.test.js",

  //"./../test/specs/login.test.js",
  //"./../test/specs/boards.test.js",
  //"./../test/specs/list_cards.test.js",
  //"./../test/specs/user_profile_edit.test.js",
  //"./../test/specs/workspace_edit.test.js",
  //],

  specFileRetries: 2,

  maxInstances: 2,

  capabilities: [
    {
      maxInstances: 2,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          // "--headless",
          "--start-maximized",
          "--disable-gpu",
          "--disable-dev-shm-usage",
        ],
      },
      acceptInsecureCerts: true,
    },
    {
      maxInstances: 2,
      browserName: "firefox",
      "moz:firefoxOptions": {
        args: [
          //"--headless"
        ],
      },
      acceptInsecureCerts: true,
    },
  ],

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],

  logLevel: "warn",

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "cucumber",
  // framework: "mocha",

  cucumberOpts: {
    require: ["./src/test/step-definitions/**/*.steps.js"],
    timeout: 60000,
    tags: "",
  },
  // mochaOpts: {
  //   ui: "bdd",
  //   timeout: 60000,
  // },
  before: async () => {
    const chai = await require("chai");
    global.expect = chai.expect;
    global.assert = chai.assert;
    chai.should();
  },
};
