/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
    	fontFamily: {
    		Nunito: ['Nunito', 'sans-serif'],
    	},
    	flex: {
    		'half': '1 50%',
        '70': '70%',
        '30': '30%',
    	},
      height: {
        '112': '28rem'
      }
    },
  },
  plugins: [],
}