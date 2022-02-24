const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    backgroundImage: {
      "hero-pattern": `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='600' preserveAspectRatio='none' viewBox='0 0 1440 600'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1002%26quot%3b)' fill='none'%3e%3crect width='1440' height='600' x='0' y='0' fill='rgba(223%2c 235%2c 246%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c287 C 144%2c315.2 432%2c435.6 720%2c428 C 1008%2c420.4 1296%2c284.8 1440%2c249L1440 600L0 600z' fill='rgba(205%2c 224%2c 241%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1002'%3e%3crect width='1440' height='600' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
    },
    maxWidth: {
      lg: "968px",
    },
    extend: {
      fontFamily: {
        sans: ["Sofia Pro", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
