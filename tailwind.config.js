/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '120px': '120px',
      },
      colors: {
        'app-blue': '#389ED9'
      },
      borderRadius: {
        'btn': '100px'
      },
      maxWidth: {
        '1126px': '1126px',
        '950px': '950px',
        '900px': '900px',
        '715px': '715px',
        '475px': '475px',
      },
      screens: {
        'desktop-lg': '1200px',
        'desktop-md': '1024px',
        'desktop-sm': '955px',
        'mobile': '768px'
      }
    },
  },
  plugins: [],
}

