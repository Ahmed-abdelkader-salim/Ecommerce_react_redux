/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Center the container
        padding: '1rem', // You can adjust the padding as needed
        screens: {
          'sm': '100%',   // Full width for small screens
          'md': '960px',  // Max width for medium screens (≥ 768px)
          'lg': '960px',  // Max width for large screens (≥ 1024px)
          'xl': '1140px', // Max width for extra large screens (≥ 1280px)
          '2xl': '1140px' // Max width for 2xl screens (≥ 1536px)
        },
      },
    },
  },
  plugins: [],
}

