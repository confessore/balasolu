/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-secific column configuration
        'sm': '1fr',
        'md': 'repeat(2, 50%)',
        'lg': 'repeat(3, minmax(33%, auto))',
        'xl': 'repeat(4, minmax(25%, auto))',
        '2xl': 'repeat(5, minmax(20%, auto))',
      },
      backgroundColor: {
        'primary': 'var(--primary-glow)'
      },
    },
    plugins: [],
  }
}