/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
       "customcolor" : "#E5EFFB",
       'logincolor' : "#EAEDF1"

    },
  },
  plugins: [],
}}