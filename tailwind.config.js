/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#2d2e32",
        lightGrey: "#767676",
        red: "rgb(237, 58, 58)",
        blue: "#147efb",
        white: "#fff",
      },
      backgroundColor: {
        dark: '#2d2e32',
        light: "#eceaea",
        white: "#fff",
      },
      boxShadow: {
        'box': '0 0 10px hsla(0,0%,50%,.5)',
      },
      screens: {
        'lg': '1050px',
      },
    },
  },
  plugins: [],
}

