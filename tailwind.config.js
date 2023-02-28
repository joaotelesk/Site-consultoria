/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
    "src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
        screens: {
          sm: "600px",
          md: "728px",
          lg: "998px",
          xl: "1140px",
        },
      },
      fontFamily: {
        sans: "Space Grotesk, sans-serif",
      },
      colors: {
        black: {
          500: "#000000",
          400: "#1D1D1D",
        },
        gray: {
          500: "#313131",
          400: "#7676761A",
          300: "#777777",
        },
        white: {
          500: "#FFFFFF",
          400: "#FAFAFA",
          300: "#D9D9D9",
        },
        green: {
          500: "#1E5720",
          400: "#E3F1E4",
        },
        red: {
          500: "#8F2929",
          400: "#A46767",
        },
        yellow: {
          500: "#F5C731",
        },
        blue: {
          500: "#11569E",
        },
      },
    },
  },
  plugins: [],
};
