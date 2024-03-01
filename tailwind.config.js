/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#28CB8B",
        "secondary" : "#263238",
        "info" : "#2194f3",
      },
    },
  },
  plugins: [],
}

