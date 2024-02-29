/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayHead: "#3B454E",
        grayMenu: "#5c6975",
        blueActive: "#346ddb"
      },
    },
  },
  plugins: [],
}