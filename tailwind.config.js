/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	important: "#ngrok",
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				sans: ["EuclidSquare", ...defaultTheme.fontFamily.sans],
				mono: ["IBMPlexMono", ...defaultTheme.fontFamily.mono],
			},
			colors: {
				white: "hsl(var(--white) / <alpha-value>)",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				gray: {
					50: "hsl(var(--gray-050) / <alpha-value>)",
					100: "hsl(var(--gray-100) / <alpha-value>)",
					200: "hsl(var(--gray-200) / <alpha-value>)",
					300: "hsl(var(--gray-300) / <alpha-value>)",
					400: "hsl(var(--gray-400) / <alpha-value>)",
					500: "hsl(var(--gray-500) / <alpha-value>)",
					600: "hsl(var(--gray-600) / <alpha-value>)",
					700: "hsl(var(--gray-700) / <alpha-value>)",
					800: "hsl(var(--gray-800) / <alpha-value>)",
					900: "hsl(var(--gray-900) / <alpha-value>)",
				},
				red: {
					50: "hsl(var(--red-050) / <alpha-value>)",
					100: "hsl(var(--red-100) / <alpha-value>)",
					200: "hsl(var(--red-200) / <alpha-value>)",
					300: "hsl(var(--red-300) / <alpha-value>)",
					400: "hsl(var(--red-400) / <alpha-value>)",
					500: "hsl(var(--red-500) / <alpha-value>)",
					600: "hsl(var(--red-600) / <alpha-value>)",
					700: "hsl(var(--red-700) / <alpha-value>)",
					800: "hsl(var(--red-800) / <alpha-value>)",
					900: "hsl(var(--red-900) / <alpha-value>)",
				},
				yellow: {
					50: "hsl(var(--yellow-050) / <alpha-value>)",
					100: "hsl(var(--yellow-100) / <alpha-value>)",
					200: "hsl(var(--yellow-200) / <alpha-value>)",
					300: "hsl(var(--yellow-300) / <alpha-value>)",
					400: "hsl(var(--yellow-400) / <alpha-value>)",
					500: "hsl(var(--yellow-500) / <alpha-value>)",
					600: "hsl(var(--yellow-600) / <alpha-value>)",
					700: "hsl(var(--yellow-700) / <alpha-value>)",
					800: "hsl(var(--yellow-800) / <alpha-value>)",
					900: "hsl(var(--yellow-900) / <alpha-value>)",
				},
				green: {
					50: "hsl(var(--green-050) / <alpha-value>)",
					100: "hsl(var(--green-100) / <alpha-value>)",
					200: "hsl(var(--green-200) / <alpha-value>)",
					300: "hsl(var(--green-300) / <alpha-value>)",
					400: "hsl(var(--green-400) / <alpha-value>)",
					500: "hsl(var(--green-500) / <alpha-value>)",
					600: "hsl(var(--green-600) / <alpha-value>)",
					700: "hsl(var(--green-700) / <alpha-value>)",
					800: "hsl(var(--green-800) / <alpha-value>)",
					900: "hsl(var(--green-900) / <alpha-value>)",
				},
				"brand-primary": {
					50: "hsl(var(--brand-primary-050) / <alpha-value>)",
					100: "hsl(var(--brand-primary-100) / <alpha-value>)",
					200: "hsl(var(--brand-primary-200) / <alpha-value>)",
					300: "hsl(var(--brand-primary-300) / <alpha-value>)",
					400: "hsl(var(--brand-primary-400) / <alpha-value>)",
					500: "hsl(var(--brand-primary-500) / <alpha-value>)",
					600: "hsl(var(--brand-primary-600) / <alpha-value>)",
					700: "hsl(var(--brand-primary-700) / <alpha-value>)",
					800: "hsl(var(--brand-primary-800) / <alpha-value>)",
					900: "hsl(var(--brand-primary-900) / <alpha-value>)",
				},
				"brand-secondary": {
					50: "hsl(var(--brand-secondary-050) / <alpha-value>)",
					100: "hsl(var(--brand-secondary-100) / <alpha-value>)",
					200: "hsl(var(--brand-secondary-200) / <alpha-value>)",
					300: "hsl(var(--brand-secondary-300) / <alpha-value>)",
					400: "hsl(var(--brand-secondary-400) / <alpha-value>)",
					500: "hsl(var(--brand-secondary-500) / <alpha-value>)",
					600: "hsl(var(--brand-secondary-600) / <alpha-value>)",
					700: "hsl(var(--brand-secondary-700) / <alpha-value>)",
					800: "hsl(var(--brand-secondary-800) / <alpha-value>)",
					900: "hsl(var(--brand-secondary-900) / <alpha-value>)",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
