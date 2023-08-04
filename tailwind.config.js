/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'kanit': ['Kanit'],
        'borel': ['Borel', 'cursive']
      },
      colors: {
        'background': 'var(--background)',
        'foreground': 'var(--foreground)'
      }
    },
  },
  plugins: [],
}

