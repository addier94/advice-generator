/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main-manrope': ['Manrope', 'sans-serif'],
        'main-outfit': ['Outfit', 'sans-serif'],
        'main-poppins': ['Poppins', 'sans-serif'],
        'main-roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        "main-light-cyan": "hsl(193, 38%, 86%)",
        "main-neon-green": "hsl(150, 100%, 66%)",
        "main-grayish-blue": "hsl(217, 19%, 38%)",
        "main-dark-grayish-blue": "hsl(217, 19%, 24%)",
        "main-dark-blue": "hsl(218, 23%, 16%)",
      }
    },
  },
  plugins: [],
}
