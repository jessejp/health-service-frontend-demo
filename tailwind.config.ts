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
        "brand-light-gray": "#F7FAFC",
        "brand-dark-gray": "#2D3748",
        "brand-dark-blue": "#2B6CB0",
        "brand-primary-blue": "#3182CE",
        "brand-primary-blue-light": "#4299E1",
        "brand-light-blue": "#BEE3F8",
      },
      boxShadow: {
        brand:
          "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10);",
      },
    },
  },
  plugins: [],
};
export default config;
