/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "p-grey-400":"#E1E1E1",
        "p-grey-500":"#C9C9C9",
      },
      padding:{
        '21':"84px",
      },
      lineHeight:{
        "24":"95px"
      }
    },
  },
  plugins: [],
}

