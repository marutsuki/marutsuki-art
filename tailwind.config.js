/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Jura', 'mono'],
        text: ['Red Hat Text', 'mono']
      },
      colors: {
        active: '#646cff',
        lightBg: '#ffffff',
        lightFg: '#000000',
        darkBg: '#1a1a1a',
        darkFg: '#ffffff',
      }
    },
  },
  plugins: [],
}