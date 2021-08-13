const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      textColor: ['group-focus', 'focus-visible'],
      backgroundColor: ['group-focus', 'focus-visible'],
      borderColor: ['group-focus', 'focus-visible'],
      ringColor: ['group-hover', 'group-focus', 'hover', 'focus-visible'],
      ringOffsetColor: ['group-hover', 'group-focus', 'hover', 'focus-visible'],
      ringOffsetWidth: ['group-hover', 'group-focus', 'hover', 'focus-visible'],
      ringOpacity: ['group-hover', 'group-focus', 'hover', 'focus-visible'],
      ringWidth: ['group-hover', 'group-focus', 'hover', 'focus-visible'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
