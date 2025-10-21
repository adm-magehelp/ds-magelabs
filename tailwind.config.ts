import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './packages/ui/src/**/*.{ts,tsx}', 
    './apps/storefront/**/*.{ts,tsx}',
    './apps/storybook/stories/**/*.{ts,tsx}',
  ],
  prefix: "", 
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      
    },
  },
  plugins: [require("tailwindcss-animate")], 
} satisfies Config

export default config