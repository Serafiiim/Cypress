const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
     // implement node events here
    },
    baseUrl: 'http://localhost:3000/',
    viewportHeight: 500,
    viewportWidth : 600,
    experimentalStudio: true,
  },
});


require('@applitools/eyes-cypress')(module);
