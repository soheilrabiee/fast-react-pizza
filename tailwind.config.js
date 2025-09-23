/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        // Fix the problem of 100vh on some mobile browsers
        screen: '100dvh',
      },
    },
    fontFamily: {
      // Overwriting the default font family
      sans: 'Roboto Mono, monospace',
    },
  },
  plugins: [],
};
