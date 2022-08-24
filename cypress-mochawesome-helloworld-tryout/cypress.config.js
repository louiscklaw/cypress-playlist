const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome',
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: false,
  },
})
