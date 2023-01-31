/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./App.{js,jsx,ts,tsx}", "./Screens/**/*.{js,jsx,ts,tsx}", "./Components/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {},
  },
  plugins: [],
}
