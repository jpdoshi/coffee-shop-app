/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#F9F2ED",
          light: "#F9F2ED",
        },
        active: "#C67C4E",
        inactive: "#EDD6C8",
        tertiary: "#666",
      },
    },
  },
  plugins: [],
};
