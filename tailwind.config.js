/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./App.{js,jsx,ts,tsx}", "./Screens/**/*.{js,jsx,ts,tsx}", "./Components/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      colors: {
        White: '#F0F5F1',
        Red: '#A74A28',
        Blue: '#C7E0F4',
        lightGrey: '#C0C1BC',
        darkGrey: '#404541'
      }
    },
  },
  plugins: [],
}
