/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        aoi: {
          bg: "#000000",
          fg: "#ffffff",
          sand: "#f2efe7",
          stone: "#c1baad",
          slate: "#a8a196",
          steel: "#70848d",
          ink: "#2f2f23"
        }
      },
      boxShadow: {
        glow: "0 0 60px rgba(0, 150, 255, 0.12)"
      }
    },
  },
  plugins: [],
};
