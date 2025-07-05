/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        greenDark: "#486F15",
        whitemilk: "#F6EBDA",
        greenBold: "#7CC638",
        brown: "#2F2105",
        crem: "#FFF8E8",
        greenLembut : "#0D4715"
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
