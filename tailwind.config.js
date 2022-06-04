const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors")
module.exports = {
  mode: 'jit',
  purge: {
    // classes that are generated dynamically, e.g. `rounded-${size}` and must
    // be kept
    safeList: [],
    content: [
      './index.html',
      './src/**/*.{vue,js,ts}',
      // etc.
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        orange:colors.orange,
        teal:colors.teal,
        "light-blue":colors.lightBlue,
      }
    },
  },
}