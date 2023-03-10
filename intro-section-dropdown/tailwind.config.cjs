/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "almost-white": "hsl(0, 0%, 98%)",
      "medium-grey": "hsl(0, 0%, 41%)",
      "almost-black": "hsl(0, 0%, 8%)",
    },
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
