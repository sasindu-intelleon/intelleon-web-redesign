import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandDark: "#070709",
        brandCard: "#131316",
        brandCardHover: "#18181e",
        brandCyan: "#12b8ff",
        brandOrange: "#f97316",
        inputBg: "#1c1c1f",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        tech: ['"Chakra Petch"', "sans-serif"],
        heading: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
export default config;
