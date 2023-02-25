/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440'
    },
    extend: {
      colors:{
        myPink: "#F3D6D6",
        myOrange: "#ED4B17",
        myGray: "#EFEFEF",
        myLightGray: "#F5F5F5"
      }
    },
  },
  plugins: [],
}
