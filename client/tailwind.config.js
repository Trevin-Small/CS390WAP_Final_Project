/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'theme-pink': '#f72585',
        'theme-purple': '#7209b7',
        'theme-dark': '#3a0ca3',
        'theme-blue': '#4361ee',
        'theme-light-blue': '#4cc9f0'
      },
    }
  },
  plugins: [],
}