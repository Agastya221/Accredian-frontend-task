/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        z: {
          'modal': '9999',
          'modal-overlay': '9998',
        },
        modalFadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        modalFadeOut: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
        },
      },
      animation: {
        modalFadeIn: 'modalFadeIn 0.3s ease-out',
        modalFadeOut: 'modalFadeOut 0.3s ease-in',
      },

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



// tailwind.config.js

