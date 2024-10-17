/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#000112', // Adding your custom color
      },
      screens: {
        'custom': '950px',  // Custom breakpoint at 1000px
      },
    },
  },
  plugins: [],
}
