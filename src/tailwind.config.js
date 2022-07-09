module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: { Inter: ['Inter', 'sans-serif'] },
    extend: {},
    colors: {
      grey: '#f5f5f5',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
