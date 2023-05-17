/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
        'pfd-regular': ['PlayfairDisplay-Regular'],
        'pfd-bold': ['PlayfairDisplay-Bold']
    },
    extend: { 
        transitionProperty: {
            'custom': 'all .5s cubic-bezier(.79, -1, .37, 2)'
        },
        keyframes: {
            fadeIn: {
            '0%': 'opacity: 0',
            '100%': 'opacity: 1'
            }
        },
    },
  },
  plugins: [],
}

