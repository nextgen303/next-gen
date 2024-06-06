// tailwind.config.js

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#000000",
        light: "#fff",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      filter: {
        'invert-brightness': 'invert(100%) brightness(0%)',
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },

  variants: {
    extend: {
      filter: ['dark'], // Enable filter utility for dark mode
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.filter-invert-brightness': {
          filter: 'invert(100%) brightness(0%)',
        },
      }, ['responsive', 'hover', 'dark']);
    },
  ],
};
