import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#FF2057",
        },
        dark: {
          "400": "#3D3D3D",
          "800": "#1E1E1E",
        },
        light: {
          "200": "#B0B0B0",
        },
        bg: {
          "100": "#2C1C38",
        },
      },
    },
  },
  plugins: [require("tw-animate-css")],
};
export default config;
