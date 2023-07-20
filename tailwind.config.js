const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  separator: '_',

  content: [
    './components/**/*.{js,ts,vue}',
    './layouts/**/*.{js,ts,vue}',
    './pages/**/*.{js,ts,vue}',
  ],

  theme: {
    extend: {
      screens: {
        xs: '370px',
        dev: '900px',
      },
      fontSize: {
        '3xs': '8px',
        '2xs': '10px',
      },
      minWidth: {
        base: '320px',
      },
    },
  },

  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(({ addVariant }) => {
      addVariant('hocus', ['.mouse &:not(._active):hover', '&:not(._active):active'])
    }),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities({
        size: value => ({
          width: value,
          height: value,
        }),
      }, {
        values: theme('width'),
      })
    }),
  ],
}
