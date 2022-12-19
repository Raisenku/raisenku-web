/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./.storybook/**/*"],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      white: "rgb(var(--color-white) / <alpha-value>)",
      black: "rgb(var(--color-black) / <alpha-value>)",

      // Main brand color
      main: {
        base: "rgb(var(--color-main-base) / <alpha-value>)",
        light: "rgb(var(--color-main-light) / <alpha-value>)",
        xlight: "rgb(var(--color-main-xlight) / <alpha-value>)",
      },

      // Main content (text) color
      content: {
        base: "rgb(var(--color-content-base) / <alpha-value>)",
        light: "rgb(var(--color-content-light) / <alpha-value>)",
      },

      // Main accent color
      accent: {
        base: "rgb(var(--color-accent-base) / <alpha-value>)",
        light: "rgb(var(--color-accent-light) / <alpha-value>)",
        xlight: "rgb(var(--color-accent-xlight) / <alpha-value>)",
      },

      // Disabled inputs / content
      disabled: {
        base: "rgb(var(--color-disabled-base) / <alpha-value>)",
        light: "rgb(var(--color-disabled-light) / <alpha-value>)",
        xlight: "rgb(var(--color-disabled-xlight) / <alpha-value>)",
      },

      // Success
      positive: {
        base: "rgb(var(--color-positive-base) / <alpha-value>)",
        light: "rgb(var(--color-positive-light) / <alpha-value>)",
      },

      // Failure
      negative: {
        base: "rgb(var(--color-negative-base) / <alpha-value>)",
        light: "rgb(var(--color-negative-light) / <alpha-value>)",
      },

      contextual: {
        1: "rgb(var(--color-contextual-1) / <alpha-value>)",
        2: "rgb(var(--color-contextual-2) / <alpha-value>)",
        3: "rgb(var(--color-contextual-3) / <alpha-value>)",
        4: "rgb(var(--color-contextual-4) / <alpha-value>)",
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
