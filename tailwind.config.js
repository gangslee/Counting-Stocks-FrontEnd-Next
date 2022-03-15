const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    colors: {
      "CS_BLUE": "#5577dd",
      "CS_RED": "#dd4a4a",
      "BG_WHITE": "#f6f6f6",
      "black": colors.black,
      "white": colors.white,
      "zinc": colors.zinc,
    },
    fontFamily: {
      "s-core4": ["S-CoreDream-4Regular"],
      "s-core5": ["S-CoreDream-5Medium"],
      "s-core6": ["S-CoreDream-6Bold"],
      "lato": ["Lato"],
    },
    extend: {},
  },
  plugins: [

  ],
}