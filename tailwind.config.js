/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'agdasima': ['Agdasima'],
      'spacemono': ['Space Mono'],
      'chakra' :['Chakra Petch']
    },
    backgroundImage: {
      'texture': "url('/texture.png')",
      'paper': "url('/paper.jpg')",
    }
  },
  
  plugins: [],
}
