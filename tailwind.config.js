/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'link': {
          DEFAULT: '#0077FF',
          hover: '#00A0E0',
          visited: '#551A8B',
          clicked: '#6C757D'
        }
      }
    }
  },
  plugins: []
}
