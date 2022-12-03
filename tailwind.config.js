/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      charmonman: ["TH_Charmonman_Regular", "sans-serif"],
      trajan:["Trajan_Pro","sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
