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
          label: 'rgb(29 33 48 / 0.6)',
          placeholder: 'rgb(29 33 48 / 0.3)',
        },
        black: '#0B0706',
      },
      fontSize: {
        usual: ['16px', '19px'],
        sub: ['13px', '15px'],
      },
      boxShadow: {
        border: '1px 0px 0px rgba(229, 229, 229, 0.75)',
        'main-box-shadow': '0px 4px 16px rgba(29, 101, 137, 0.15)',
        'border-b': '0px 1px rgba(229, 229, 229, 0.75)',
      },
      gridTemplateColumns: {
        modal: 'minmax(auto, 500px)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
