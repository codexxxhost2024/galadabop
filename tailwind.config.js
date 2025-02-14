/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#017DD1', // Exact GALA Blue for icons and buttons
        secondary: '#0163A6', // Slightly darker shade for hover effects
        background: '#FFFFFF', // White background
        text: '#000000', // Black text
      },
      fontFamily: {
        sans: ['Helvetica', 'Roboto', 'sans-serif'], // GALA Font Style
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};