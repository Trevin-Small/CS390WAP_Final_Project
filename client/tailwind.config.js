/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-blue':'#8ecae6',
        'med-blue':'#219ebc',
        'dark-blue':'#023047',
        'yellow':'#ffb703',
        'orange':'#fb8500'
      },
    }
  },
  plugins: [],
}