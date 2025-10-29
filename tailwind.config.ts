import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { pelayaNavy: "#0C2340", pelayaBeige: "#F6F2EA" },
      borderRadius: { '2xl': '1rem' }
    },
  },
  plugins: [],
};
export default config;