/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary), 1)",
        secondary: "rgba(var(--secondary), 1)",
        tertiary: "rgba(var(--tertiary), 1)",
        orange: "#BC5E29",
        blue: "#47A1B2",
        purple: "#553AC2",
        pink: "#B94265",
        yellow: "#C5A126",
        dblue: "#3150C7",
      },
      boxShadow: {
        normal: "0 0 4px 0 rgba(169, 169, 169, 0.25)",
      },
    },
  },
  plugins: [],
};
