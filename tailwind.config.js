/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-mopol': 'url("/src/components/assets/mopol.jpg")'
      }
    },
  },
  plugins: [],
}
