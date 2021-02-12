module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: '#15DB95',
        dark: '#1F2833',
        light: '#f2f2f2',
      },
      backgroundImage: () => ({
        main: 'url("/images/full-bloom.png")',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
