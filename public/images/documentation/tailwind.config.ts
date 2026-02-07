import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',      // deep blue – good for main buttons & headings
        secondary: '#065F46',    // dark green – good for accents
        accent: '#DC2626',       // red – good for highlights / alerts
        light: '#F9FAFB',        // very light gray – backgrounds
        dark: '#111827',         // dark gray – text
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config