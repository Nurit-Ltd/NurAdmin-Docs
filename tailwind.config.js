/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayHead: "#3B454E",
        grayMenu: "#5c6975",
        blueActive: "#346ddb",
        graySm: "#8899a8",
        headingText: "#262930",
        grayPrimary: "#656973",
        redText:"#D33D3D",
        blueIcon: "#307f98",
        bgBluer: "#f5f7f9",
        textPerpel:"#8250df",
        bgPink: "#ffe4e3",
        activeBar: "#346ddbd9",
        grayXm: "#8899a8",
        grayFix:"#eceff1"
      },
      fontSize: {
        heading1: "40px",
        heading3: "1.17em"
      },
      padding:{
        25: "100px"
      },
      margin:{
        25: "100px"
      }
    },
  },
  plugins: [],
};
