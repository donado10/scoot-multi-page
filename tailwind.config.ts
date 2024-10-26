import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "scoot-yellow": "#FCB72B",
        "scoot-dark": "#495567",
        "scoot-dim": "#939CAA",
        "scoot-light": "#E5ECF4",
        "scoot-snow": "#F2F5F9",
        "scoot-yellow-light": "#FFF4FD",
      },
      fontFamily: {
        primary: ["Space Mono", "sans-serif"],
        secondary: ["Lexend Deca", "sans-serif"],
      },
      screens: {
        xs: "0px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 1024px) { ... }

        xl: "1060px",
        // => @media (min-width: 1060px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
