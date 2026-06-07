import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          light: "hsl(var(--secondary-light))",
          dark: "hsl(var(--secondary-dark))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          light: "hsl(var(--accent-light))",
          warm: "hsl(var(--accent-warm))",
        },
        // Indian Cultural Colors
        saffron: "hsl(var(--saffron))",
        "india-green": "hsl(var(--india-green))",
        "navy-blue": "hsl(var(--navy-blue))",
        // Risk Status Colors
        safe: "hsl(var(--safe))",
        "at-risk": "hsl(var(--at-risk))",
        "high-risk": "hsl(var(--high-risk))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // Accordion animations
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" }
        },
        
        // Shield and protection animations
        "shield-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--secondary) / 0.3)" }
        },
        "shield-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.8" }
        },

        // Status glow effects
        "glow-safe": {
          "0%, 100%": { boxShadow: "0 0 10px hsl(var(--safe) / 0.3)" },
          "50%": { boxShadow: "0 0 20px hsl(var(--safe) / 0.6)" }
        },
        "glow-warning": {
          "0%, 100%": { boxShadow: "0 0 10px hsl(var(--at-risk) / 0.3)" },
          "50%": { boxShadow: "0 0 20px hsl(var(--at-risk) / 0.6)" }
        },
        "glow-danger": {
          "0%, 100%": { boxShadow: "0 0 10px hsl(var(--high-risk) / 0.3)" },
          "50%": { boxShadow: "0 0 20px hsl(var(--high-risk) / 0.6)" }
        },

        // Button and interaction animations
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        
        // Progress and loading animations
        "progress-shine": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        "progress-wave": {
          "0%": { transform: "translateX(-100%) scaleX(0)" },
          "50%": { transform: "translateX(0%) scaleX(1)" },
          "100%": { transform: "translateX(100%) scaleX(0)" }
        },
        "loading-dots": {
          "0%, 80%, 100%": { transform: "scale(0)" },
          "40%": { transform: "scale(1)" }
        },

        // Badge and achievement animations  
        "badge-bounce": {
          "0%": { transform: "scale(0) rotate(180deg)", opacity: "0" },
          "50%": { transform: "scale(1.2) rotate(0deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" }
        },
        "badge-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.1)", opacity: "1" }
        },

        // Movement and entrance animations
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" }
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        
        // Fade animations
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },

        // Notification animations
        "notification-bounce": {
          "0%": { transform: "translateX(100%) scale(0.8)", opacity: "0" },
          "50%": { transform: "translateX(-5%) scale(1.05)", opacity: "1" },
          "100%": { transform: "translateX(0%) scale(1)", opacity: "1" }
        },
        
        // Cultural and decorative animations
        "tricolor-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        },
        "pattern-drift": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" }
        },

        // Text animations
        "text-shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" }
        },

        // State feedback animations
        "success-pop": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(1.2)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "error-shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-2px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(2px)" }
        }
      },
      animation: {
        // Basic animations
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-scale": "fade-in-scale 0.4s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-in-left": "slide-in-left 0.3s ease-out",

        // Shield and protection
        "shield-glow": "shield-glow 3s ease-in-out infinite",
        "shield-pulse": "shield-pulse 2s ease-in-out infinite",

        // Status indicators
        "glow-safe": "glow-safe 2s ease-in-out infinite",
        "glow-warning": "glow-warning 2s ease-in-out infinite", 
        "glow-danger": "glow-danger 2s ease-in-out infinite",

        // Interactive elements
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
        "shimmer": "shimmer 0.6s ease-out",
        "hover-float": "bounce-gentle 3s ease-in-out infinite",

        // Progress and loading
        "progress-shine": "progress-shine 2s linear infinite",
        "progress-wave": "progress-wave 1.5s ease-in-out infinite",
        "loading-dots": "loading-dots 1.4s ease-in-out infinite",

        // Achievements and badges
        "badge-bounce": "badge-bounce 0.6s ease-out",
        "badge-pulse": "badge-pulse 2s ease-in-out infinite",
        "success-pop": "success-pop 0.5s ease-out",

        // Notifications
        "notification-bounce": "notification-bounce 0.5s ease-out",
        "error-shake": "error-shake 0.5s ease-in-out",

        // Cultural elements
        "tricolor-flow": "tricolor-flow 3s ease-in-out infinite",
        "pattern-drift": "pattern-drift 10s linear infinite",
        "text-shimmer": "text-shimmer 2s ease-in-out infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
