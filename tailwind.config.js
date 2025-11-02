/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ios-bg': '#f2f2f7',
        'ios-card': '#ffffff',
        'ios-primary': '#007aff',
        'ios-secondary': '#8e8e93',
        'ios-accent': '#5ac8fa',
        'ios-success': '#34c759',
        'ios-warning': '#ff9500',
        'ios-danger': '#ff3b30',
      }
    },
  },
  plugins: [],
};
