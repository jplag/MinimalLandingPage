/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'link': {
          DEFAULT: '#0055A7',
          hover: '#0077CC',
          visited: '#551A8B',
          clicked: '#6C757D'
        }
      }
    }
  },
  plugins: []
}
