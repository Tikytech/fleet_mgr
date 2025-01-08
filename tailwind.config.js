/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {}
    }
  },
  plugins: [],
  safelist: [
    'lg:ml-0',
    'lg:ml-[250px]',
  ],
}