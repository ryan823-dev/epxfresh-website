import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
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
      colors: {
        // EPXFresh Brand Colors
        "fresh": {
          50: "hsl(142, 76%, 95%)",
          100: "hsl(142, 76%, 90%)",
          200: "hsl(142, 76%, 80%)",
          300: "hsl(142, 76%, 65%)",
          400: "hsl(142, 76%, 50%)",
          500: "hsl(142, 76%, 40%)",
          600: "hsl(142, 76%, 32%)",
          700: "hsl(142, 76%, 26%)",
          800: "hsl(142, 76%, 20%)",
          900: "hsl(142, 76%, 15%)",
          DEFAULT: "hsl(var(--fresh-primary))",
          light: "hsl(var(--fresh-primary-light))",
          dark: "hsl(var(--fresh-primary-dark))",
        },
        "fresh-primary": "hsl(var(--fresh-primary))",
        "fresh-primary-light": "hsl(var(--fresh-primary-light))",
        "fresh-primary-dark": "hsl(var(--fresh-primary-dark))",
        "eco-teal": "hsl(var(--eco-teal))",
        "eco-teal-light": "hsl(var(--eco-teal-light))",
        "warm-earth": "hsl(var(--warm-earth))",
        "warm-earth-light": "hsl(var(--warm-earth-light))",
        "neutral-cream": "hsl(var(--neutral-cream))",
        "neutral-sand": "hsl(var(--neutral-sand))",
        
        // Standard Colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'fresh': '0 20px 40px -10px rgba(22, 163, 74, 0.35)',
        'glow': '0 0 60px -10px rgba(22, 163, 74, 0.4)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Clean animations - functional only
        "fade-up": {
          "from": { 
            opacity: "0",
            transform: "translateY(20px)"
          },
          "to": { 
            opacity: "1",
            transform: "translateY(0)"
          },
        },
        "fade-in": {
          "from": { opacity: "0" },
          "to": { opacity: "1" },
        },
        "scale-in": {
          "from": { 
            opacity: "0",
            transform: "scale(0.95)"
          },
          "to": { 
            opacity: "1",
            transform: "scale(1)"
          },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Clean animations - functional only
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "shimmer": "shimmer 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config