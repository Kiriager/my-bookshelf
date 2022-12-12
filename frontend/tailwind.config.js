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
      borderRadius: {
        standart: '0.25rem',
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
        border: '#E5E5E5',
        text: {
          primary: '#1D2130',
          secondary: '#525560',
        },
        black: '#0B0706',
      },
      fontSize: {
        usual: ['16px', '19px'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
