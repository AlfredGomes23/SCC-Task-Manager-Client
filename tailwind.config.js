/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        doodle: ['Rubik Doodle Triangles'],
        inter: [ 'Inter']
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["retro"],
  },
}