/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        narrow: "PT Sans Narrow"
      },
      backgroundImage: {
        'banner': "url('/banner.png')",
        'banner1920x1080': "url('/banner-1920x1080.png')",
        'banner1366': "url('/banner-1366px.png')",
        'background': "url('/background.png')",
        'banner-cel': "url('/banner-cel.png')",
      }
    },
  },
  plugins: [],
}