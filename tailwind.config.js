/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#FAA114'
      },
    },
  },
  plugins: [],
}