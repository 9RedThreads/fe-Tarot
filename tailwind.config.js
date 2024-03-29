module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Screens/**/*.{js,jsx,ts,tsx}", "./Screens/*.{js,jsx,ts,tsx}", "./Components/*.{js,jsx,ts,tsx}", "./navigator/*.{js,jsx,ts,tsx}" ],
  theme: {
    colors: {
      'white': '#F0F5F1',
      'red': '#A74A28',
      'blue': '#C7E0F4',
      'lightGrey': '#C0C1BC',
      'darkGrey': '#404541'
    },

    extend: {

      scale: {
        '25': '0.25',
      },

      translate: {
        '20': '10rem',
      }




    },
  },
  plugins: [],
}
