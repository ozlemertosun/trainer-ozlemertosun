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
        xxl: "56px",
        xl: "36px",
        l: "24px",
        m: "20px",
        s: "18px",
        xs: "16px",
        xxs: "14px",
        xxxs: "12px",
      },
    },
  },
  plugins: [],
};
