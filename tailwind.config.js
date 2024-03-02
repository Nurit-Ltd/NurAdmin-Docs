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
        blueActive: "#346ddb",
        headingText: "#262930",
        grayPrimary: "#656973",
        blueIcon: "#307f98"
      },
      fontSize: {
        heading1: "40px",
      }
    },
  },
  plugins: [],
}