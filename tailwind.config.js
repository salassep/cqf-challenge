/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-blue': '#389ED9'
      },
      spacing: {
        '120px': '120px'
      },
      borderRadius: {
        'btn': '100px'
      }
    },
  },
  plugins: [],
}

