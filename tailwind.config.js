/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Press:['"Press Start 2P"','cursive'],
        Belanosima:['"Belanosima"','sans-serif'],
      }
    },
  },
  plugins: [],
}

