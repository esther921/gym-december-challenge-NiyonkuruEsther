/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "arial"],
      },
      colors: {
        lightBlue: "#3070B3",
        darkBlue: "#0E396E",
        darkestBlue: "#072140",
        mediumDarkBlue: "#0A2D57",
      },
      screens: {
        ipad: "62.5rem",
      },
    },
  },
  plugins: [],
};
