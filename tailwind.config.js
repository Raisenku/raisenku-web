/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      main: {
        base: "rgb(var(--color-main-base) / <alpha-value>)",
      },

      primary: {
        base: "rgb(var(--color-primary-base) / <alpha-value>)",
      },

      secondary: {
        base: "rgb(var(--color-secondary-base) / <alpha-value>)",
      },

      tertiary: {
        base: "rgb(var(--color-tertiary-base) / <alpha-value>)",
      },
    },

    extend: {
      fontFamily: {
        main: ["Roboto", "sans-serif"],
      },

      fontWeight: {
        semibold: 500,
      },

      animation: {
        ripple: "ripple .5s linear",
      },

      keyframes: {
        ripple: {
          "0%": {
            opacity: "1",
            transform: "scale(0)",
          },

          "100%": {
            opacity: "0",
            transform: "scale(2)",
          },
        },
      },
    },
  },

  plugins: [],
};
