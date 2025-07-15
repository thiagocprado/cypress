const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: false,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: true,
    html: true,
    json: false,
    timestamp: "mmddyyyy_HHMMss",
  },
  projectId: "9mbx6x",
});
