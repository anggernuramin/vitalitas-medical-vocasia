/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      colors: {
        color: {
          primary90: "#B97375",
          primary30: "#F0DEDF1A",
          primary10: "#F1E4E8",
          black: "#003D87",
          overlay: "#121619",
          coolGray10: "#F2F4F8",
          coolGray20: "#DDE1E6",
          coolGray30: "#C1C7CD",
          coolGray40: "#A2A9B0",
          coolGray50: "#878d96",
          coolGray60: "#697077",
          coolGray70: "#4D5358",
          coolGray80: "#343A3F",
          coolGray90: "#21272A",
          coolGray100: "#121619",
        },
      },
      font : {
        bolds : '800',
      },
    },
  },
  plugins: [daisyui],
};
