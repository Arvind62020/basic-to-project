import themes from 'daisyui/theme/object';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#334455', // name: hex value
        brandGreen: '#00ff99',
      },
    },
  },
  //eslint-disable-next-line no-undef
  plugins: [require('daisyui'),],
  daisyui: {
    themes:["forest"]
  }
}

