/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // 👇 Add this line
  darkMode: 'class', // Enables class-based dark mode (e.g. <html class="dark">)

  theme: {
    extend: {},
  },
  plugins: [],
};
