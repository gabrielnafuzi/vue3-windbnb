module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: '0px 1px 6px rgba(0, 0, 0, 0.1)'
      },
      colors: {
        base: {
          red: '#EB5757',
          black: '#333333',
          gray: '#BDBDBD',
          'gray-2': '#4F4F4F',
          'gray-3': '#828282'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
