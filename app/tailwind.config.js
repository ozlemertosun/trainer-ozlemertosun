/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        curry: "#F1C40E",
        licorice: "#000000",
        sky: "#FFFFFF",
        darkGray: "#9E9E9E",
        mediumGray: "#D4D4D4",
        lightGray: "#FBFBFB",
      },
      fontSize: {
        biggest: "3.5rem", //56px
        bigger: "2.25rem", //36px
        big: "1.5rem", //24px
        medium: "1.25rem", //20px
        smallMedium: "1.125", //18px
        small: "1rem", //16px
        smaller: "0.875rem", //14px
        smallest: "0.75rem", //12px
      },
    },
  },
  plugins: [],
};
