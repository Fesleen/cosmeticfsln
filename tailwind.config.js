/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '7.5rem',
    },
    fontFamily: {
      playfair: ['"Playfair Display"', 'serif'],
    },
    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
    },
  },
  plugins: [],
}