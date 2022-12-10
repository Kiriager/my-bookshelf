module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      height: {
        input: '4rem',
      },
      borderRadius: {
        standart: '0.25rem',
      },
    },
    colors: {
      transparent: '#00000000',
      white: {
        off: '#EBF0F9',
      },
      green: {
        primary: '#4C5767',
        secondary: '#BEF3C0',
        tertiary: '#EFF7F2',
      },
      border: '#E5E5E5',
      text: {
        primary: '#1D2130',
        secondary: '#525560',
      },
      black: '#0B0706',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
