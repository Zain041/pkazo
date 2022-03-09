module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          light: '#575757',
          lighter: '#333333',
          DEFAULT: '#000000',
        },
        grey: {
          DEFAULT: '#8B8B8B',
          D8: '#D8D8D8'
        }
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      borderRadius: {
        '10': '10px'
      },
      borderWidth: {
        '1.5': '1.5px'
      }
    },
  },
  plugins: [],
}
