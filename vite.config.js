const path = require('node:path')
const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')

const rootDirectory = __dirname

module.exports = defineConfig({
  root: path.resolve(rootDirectory, 'src'),
  plugins: [vue()],
  build: {
    outDir: path.resolve(rootDirectory, 'dist'),
    emptyOutDir: true
  }
})
