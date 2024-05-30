/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary), 1)",
        secondary: "rgba(var(--secondary), 1)",
        tertiary: "rgba(var(--tertiary), 1)",
        1: "rgba(var(--1),1)",
        2: "rgba(var(--2),1)",
        3: "rgba(var(--3),1)",
        4: "rgba(var(--4),1)",
        5: "rgba(var(--5),1)",
        6: "rgba(var(--6),1)",
      },
      boxShadow: {
        normal: "0 0 4px 0 rgba(169, 169, 169, 0.25)",
      },
    },
  },
  plugins: [],
};
