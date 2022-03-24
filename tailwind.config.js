const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    maxWidth: {
      lg: "968px",
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Encode Sans", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("tailwindcss-neumorphism")],
};
