import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        mutedink: "#526070",
        lsupurple: "#461D7C",
        lsugold: "#FDD023"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(20, 30, 50, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
