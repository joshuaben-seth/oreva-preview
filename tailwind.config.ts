import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        DEFAULT: 'hsl(var(--foreground))',
      },
      colors: {
        background: {
          DEFAULT: 'hsl(var(--background))',
          dark: 'hsl(var(--background-dark))',
        },
        foreground: {
          DEFAULT: 'hsl(var(--foreground))',
          dark: 'hsl(var(--foreground-dark))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          dark: 'hsl(var(--card-dark))',
        },
        border: {
          DEFAULT: 'hsl(var(--border))',
          dark: 'hsl(var(--border-dark))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.glass': {
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.05))',
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          'box-shadow': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease-out',
          '&:hover': {
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.08))',
            'box-shadow': '0 32px 64px -12px rgba(0, 0, 0, 0.4)',
          },
        },
        '.glass-secondary': {
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.02))',
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          'box-shadow': '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease-out',
          '&:hover': {
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.03))',
            'box-shadow': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          },
        }
      }
      addUtilities(newUtilities)
    }
  ],
}
export default config