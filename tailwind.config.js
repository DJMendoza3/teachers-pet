/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
      },
      backgroundImage: {
        'login-bg': "url('/src/assets/images/login_bg.png')",
      },
    },
  },
  plugins: [],
}

