module.exports = {
  content: [
    './src/**/*.{html,js,vue}',
    './tests/**/*.{js,vue}'
  ],
  theme: {
    extend: {
      colors: {
        brand: 'rgba(85, 118, 248, 0.885)',
        surface: 'rgba(73, 102, 220, 0.6)',
        paper: 'rgba(255, 255, 255, 0.885)'
      },
      fontFamily: {
        display: ['RocknRoll One', 'sans-serif']
      }
    }
  },
  plugins: []
}
