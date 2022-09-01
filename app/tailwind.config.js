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
        xxl: "3.5rem", //56px
        xl: "2.25", //36px
        l: "1.5rem", //24px
        m: "1.25rem", //20px
        s: "1.125", //18px
        xs: "1rem", //16px
        xxs: "0.875rem", //14px
        xxxs: "0.75rem", //12px
      },
    },
  },
  plugins: [],
};
