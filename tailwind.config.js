const colors = require('tailwindcss/colors');
// const theme = {
//   primary: colors.green,
//   secondary: colors.orange,
//   muted: colors.stone,
//   dark: colors.neutral
// }

const theme = {
  primary: colors.amber,
  secondary: colors.red,
  muted: colors.stone,
  dark: colors.neutral
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    minHeight: {
      '33vh': '33.33333vh',
    },
    extend: {
      textColor: {
        theme: theme
      },
      backgroundColor: {
        theme: theme
      },
      gradientColorStops: {
        theme: theme
      },
      backgroundImage: {
        'fog':"url('/fog.jpg')",
        'forest':"url('/forest.jpg')"
      },
      borderColor: {
        theme: theme
      }
    },
  },
  plugins: [],
}
