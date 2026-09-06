module.exports = {
  content: [
    './src/**/*.{html,js,vue}',
    './tests/**/*.{js,vue}'
  ],
  theme: {
    extend: {
      colors: {
        brand: '#2563eb',
        'brand-dark': '#1d4ed8',
        navy: '#0f2747',
        surface: 'rgba(255, 255, 255, 0.98)',
        paper: '#ffffff'
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
