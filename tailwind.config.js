/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': '#edc84b',
      },
      backgroundImage: {
        //'homeintro': "url('/public/assets/homebackground.png')",
      }
    },
  },
  plugins: [],
}

