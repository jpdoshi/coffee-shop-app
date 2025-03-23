/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#efebe9",
          tertiary: "#a1887f",
        },
        active: "#795548",
        inactive: "#d7ccc8",
        tertiary: "#666",
      },
    },
  },
  plugins: [],
};
