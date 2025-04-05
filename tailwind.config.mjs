// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      primary: "#14213d",
      secondary: "#fca311",
      light: "#e5e5e5",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
};
export const plugins = [];