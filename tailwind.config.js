/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        unijos: {
          green: "#1A6B3A",
          blue: "#0D3B6E",
          brown: "#7B4B2A",
          gold: "#C9A84C",
          white: "#FFFFFF",
          greenlight: "#e8f5ee",
          bluelight: "#e8f0f8",
          goldlight: "#fdf6e3",
        },
      },
      fontFamily: {
        serif: ["Merriweather", "Georgia", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
