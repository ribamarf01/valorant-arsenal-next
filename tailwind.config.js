module.exports = {
  content: [
    "src/**/*.tsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'valorant': "url('/img/valorant-background.png')"
      },
      backgroundPosition: {
        'top-16': 'center top -4rem'
      },
      fontFamily: {
        'tungsten': ['TungstenBold', 'Arial', 'Helvetica'],
        'tungstenNarrow': ['TungstenSemibold', 'Arial', 'Helvetica']
      },
      
    },
  },
  plugins: [],
}
