/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        huasteca: {
          gray: "#404040",
          orange: "#d9923b",
          yellow: "#d99c2b",
          brown: "#593a15",
        },
      },

      textColor: {
        huasteca: {
          gray: "#404040",
          orange: "#d9923b",
          yellow: "#d99c2b",
          brown: "#593a15",
        },
      },
    },
  },
  plugins: [],
};
