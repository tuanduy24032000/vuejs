/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': '"Roboto", sans-serif'
      },
      boxShadow: {
        'item-shadow': '2px 3px 5px 3px rgba(0, 0, 0, 0.05)',
        'model': '-4px 0px 5px 0px rgba(255, 255, 255, 0.6)'
      }
    },
  },
  plugins: [],
}

