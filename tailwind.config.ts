import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ["Inter", ...fontFamily.sans],
				display: ["Playfair Display", ...fontFamily.serif],
				montserrat: ["Montserrat", ...fontFamily.sans],
				poppins: ["Poppins", ...fontFamily.sans],
				jersey: ["Jersey M54", ...fontFamily.sans],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				sylonow: {
					purple: "#2D1B69",
					lightpurple: "#8B5CF6",
					darkpurple: "#1E1B30",
					gold: "#FF1B6D",
					black: "#121212",
					dark: "#0A0A0A",
					gray: "#666666",
					lightgray: "#999999",
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background, 0 0% 98%))',
					foreground: 'hsl(var(--sidebar-foreground, 240 5.3% 26.1%))',
					primary: {
						DEFAULT: 'hsl(var(--sidebar-primary, 240 5.9% 10%))',
						foreground: 'hsl(var(--sidebar-primary-foreground, 0 0% 98%))',
					},
					accent: {
						DEFAULT: 'hsl(var(--sidebar-accent, 240 4.8% 95.9%))',
						foreground: 'hsl(var(--sidebar-accent-foreground, 240 5.9% 10%))',
					},
					border: 'hsl(var(--sidebar-border, 220 13% 91%))',
					ring: 'hsl(var(--sidebar-ring, 217.2 91.2% 59.8%))'
				},
			},
			boxShadow: {
				glow: "0 0 15px rgba(255, 27, 109, 0.5)",
				"glow-lg": "0 0 30px rgba(255, 27, 109, 0.6)",
				"button": "0 8px 16px rgba(255, 27, 109, 0.25)",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1rem',
				'3xl': '1.5rem',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'gift-box-appear': {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'lid-open': {
					'0%': { transform: 'rotateX(0deg)' },
					'100%': { transform: 'rotateX(-110deg)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'sparkle': {
					'0%': { opacity: '0' },
					'50%': { opacity: '1' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'text-reveal': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'text-reveal-chars': {
					'0%': { transform: 'translateY(50%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'zoom-in-fade': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-right': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'gift-bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'gift-shine': {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '0 0' }
				},
				'pulse-scale': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%) rotate(30deg)' },
					'100%': { transform: 'translateX(100%) rotate(30deg)' }
				},
				'smooth-bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'text-gradient': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' }
				},
				'button-gradient': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '200% 50%' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gift-box-appear': 'gift-box-appear 0.8s ease-out forwards',
				'lid-open': 'lid-open 1s ease-out forwards',
				'float': 'float 3s ease-in-out infinite',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'text-reveal': 'text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'text-reveal-chars': 'text-reveal-chars 0.5s ease-out forwards var(--delay)',
				'zoom-in-fade': 'zoom-in-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'slide-up': 'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards var(--delay)',
				'slide-right': 'slide-right 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards var(--delay)',
				'gift-bounce': 'gift-bounce 2s ease-in-out infinite',
				'gift-shine': 'gift-shine 3s linear infinite',
				'pulse-scale': 'pulse-scale 2s ease-in-out infinite',
				'shimmer': 'shimmer 3s infinite',
				'smooth-bounce': 'smooth-bounce 2s ease-in-out infinite',
				'text-gradient': 'text-gradient 3s linear infinite',
				'button-gradient': 'button-gradient 3s linear infinite',
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #2D1B69 0%, #FF1B6D 100%)',
				'gradient-button': 'linear-gradient(90deg, #FF1B6D 0%, #2D1B69 50%, #FF1B6D 100%)',
				'gradient-text': 'linear-gradient(135deg, #FF1B6D 0%, #2D1B69 100%)',
			},
			fontSize: {
				'heading-1': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
				'heading-2': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
				'subtitle': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0' }],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
