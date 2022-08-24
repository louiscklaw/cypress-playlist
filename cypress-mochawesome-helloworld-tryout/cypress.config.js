const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'json',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: false,
  },
})
