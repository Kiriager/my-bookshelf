module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        gill: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
      },
      height: {
        input: '4rem',
      },
      colors: {
        transparent: '#00000000',
        white: {
          pure: '#fff',
          off: '#EBF0F9',
        },
        green: {
          primary: '#70C174',
          secondary: '#BEF3C0',
          tertiary: '#EFF7F2',
        },
        borders: '#E5E5E5',
        'input-borders': 'rgb(235 240 249 / 0.3)',
        text: {
          primary: '#1D2130',
          secondary: '#525560',
          error: '#834D19',
        },
        black: '#0B0706',
      },
      fontSize: {
        usual: ['16px', '19px'],
        sub: ['13px', '15px'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
