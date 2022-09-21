/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
  ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    fontFamily: {
      'lobster': 'Lobster' 
    },
    extend: {
        colors:{
          green:{
            DEFAULT:'#581c87'
          }
        }
    },
  },
  plugins: [],
}
