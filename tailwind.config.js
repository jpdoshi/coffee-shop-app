/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: "Sora",
      colors: {
        primary: {
          bg: "#fff",
          light: "#F9F2ED",
          shadow: "rgba(0, 0, 0, 0.25)",
          color: "#C67C4E",
        },
        tertiary: "#666",
      },
    },
  },
  plugins: [],
};
