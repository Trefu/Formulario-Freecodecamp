const { defineConfig } = require('vitest/config')
const vue = require('@vitejs/plugin-vue')

module.exports = defineConfig({
  root: __dirname,
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/**/*.spec.js']
  }
})
