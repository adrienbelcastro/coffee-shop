import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"],
    },
    extend: {
      colors: {
        graphite: "#393939",
        white: "#fff",
        nitroBlue: "#5bacc3",
        lightGrey: "#f7f7f7",
        nitroPink: "#fff0ed",
      },
      backgroundImage: {
        hero_image: "url('../../public/assets/coffee-circle.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
