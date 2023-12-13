/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // display: ["General Sans", ...defaultTheme.fontFamily.sans],
        display: ["Switzer", ...defaultTheme.fontFamily.sans],
        sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        display: 650,
      }
    },
  },
  plugins: [],
};
