/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: "Manrope",
      },
      colors: {
        accordian: {
          new: "#E8EEE7",
          footer: "#F5F5F5",
        },
      },
    },
  },
  plugins: [],
};
