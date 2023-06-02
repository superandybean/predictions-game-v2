/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.{ejs,js}", "./views/**/*.{ejs,js}"],
  theme: {
    extend: {
      dropShadow: {
        'lg': '0px 0px 16px #000000',
      }
    },
  },
  plugins: [],
}
