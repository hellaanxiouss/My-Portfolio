/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        // secondaryHighlight: "rgba(var(--secondary), 0.1)",
        // success: "rgba(var(--success), 1)",
        // successHighlight: "rgba(var(--success), 0.1)",
        // failure: "rgba(var(--failure), 1)",
        // failureHighlight: "rgba(var(--failure), 0.1)",
        // warning: "rgba(var(--warning), 1)",
        // warningHighlight: "rgba(var(--warning), 0.1)",
        // blue: "rgba(var(--blue), 1)",
        // blueHighlight: "rgba(var(--blue), 0.1)",
        // purple: "rgba(var(--purple), 1)",
        // purpleHighlight: "rgba(var(--purple), 0.1)",
        // neutral: "rgba(var(--neutral), 1)",
        // border: "rgba(var(--border), 1)",
      },
      boxShadow:{
        'normal': "0 0 4px 0 rgba(169, 169, 169, 0.25)"
      },
    },
  },
  plugins: [],
};