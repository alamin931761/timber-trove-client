/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      dune: "#313333",
      black: "#000000",
      white: "#FFFFFF",
      liver: "#4D4B4F",
      silver: "#CDC9C4",
      "pale-sky": "#647485",
      "mountain-mist": "#979797",
      "smokey-grey": "#6F6F6F",
      "blaze-orange": "#F56E07",
      "aqua-squeeze": "#E9F4EE",
      "pumpkin-orange": "#FF6F00",
      "golden-dream": "#F5D426",
      "aqua-spring": "#F0F8F6",
      "red-orange": "#FF3939",
      "pastel-orange": "#FE9341",
      "pale-slate": "#BFBFBF",
      "wax-flower": "#FFC39A",
      "artyClick-ocean-green": "#10FF70",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
