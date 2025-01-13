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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        creo: ["CsCreoMonoRegular", "monospace"],
        wilson: ["CsWisonDemoRegular", "sans-serif"],
        hackdaddy: ["Hackdaddy", "monospace"],
        hackout: ["Hackout-BawS", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;