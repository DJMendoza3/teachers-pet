/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#7791a1',
      'secondary': '#E5E5E5',
      'danger': '#e3342f',
    }),
    minHeight: {
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      'jumbotron': 'calc(100vh - 64px - 2rem)',
    },
    fontFamily: {
      'baskerville': ['baskerville', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#7791a1',
        'secondary': '#E5E5E5',
        'accent': '#5c616e',
        'danger': '#e3342f',
      },
      transitionProperty: {
        'width': 'width',
      },
      backgroundImage: {
        'login-bg': "url('/src/assets/images/login_bg.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      dropShadow: {
        'cartoon': '6px 6px 0px rgba(0, 0, 0, .75)',
      },
    },
  },
  plugins: [],
}

