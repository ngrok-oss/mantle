import type { Config } from "tailwindcss";
import tailwindCssAnimatePlugin from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import { firefoxVariantPlugin } from "./tailwind-plugin-firefox-variant.js";

const colors = {
	inherit: "inherit",
	current: "currentColor",
	transparent: "transparent",
	white: "hsl(var(--white) / <alpha-value>)",
	black: "hsl(var(--black) / <alpha-value>)",
	gray: {
		50: "hsl(var(--gray-50) / <alpha-value>)",
		100: "hsl(var(--gray-100) / <alpha-value>)",
		200: "hsl(var(--gray-200) / <alpha-value>)",
		300: "hsl(var(--gray-300) / <alpha-value>)",
		400: "hsl(var(--gray-400) / <alpha-value>)",
		500: "hsl(var(--gray-500) / <alpha-value>)",
		600: "hsl(var(--gray-600) / <alpha-value>)",
		700: "hsl(var(--gray-700) / <alpha-value>)",
		800: "hsl(var(--gray-800) / <alpha-value>)",
		900: "hsl(var(--gray-900) / <alpha-value>)",
		950: "hsl(var(--gray-950) / <alpha-value>)",
	},
	red: {
		50: "hsl(var(--red-50) / <alpha-value>)",
		100: "hsl(var(--red-100) / <alpha-value>)",
		200: "hsl(var(--red-200) / <alpha-value>)",
		300: "hsl(var(--red-300) / <alpha-value>)",
		400: "hsl(var(--red-400) / <alpha-value>)",
		500: "hsl(var(--red-500) / <alpha-value>)",
		600: "hsl(var(--red-600) / <alpha-value>)",
		700: "hsl(var(--red-700) / <alpha-value>)",
		800: "hsl(var(--red-800) / <alpha-value>)",
		900: "hsl(var(--red-900) / <alpha-value>)",
		950: "hsl(var(--red-950) / <alpha-value>)",
	},
	orange: {
		50: "hsl(var(--orange-50) / <alpha-value>)",
		100: "hsl(var(--orange-100) / <alpha-value>)",
		200: "hsl(var(--orange-200) / <alpha-value>)",
		300: "hsl(var(--orange-300) / <alpha-value>)",
		400: "hsl(var(--orange-400) / <alpha-value>)",
		500: "hsl(var(--orange-500) / <alpha-value>)",
		600: "hsl(var(--orange-600) / <alpha-value>)",
		700: "hsl(var(--orange-700) / <alpha-value>)",
		800: "hsl(var(--orange-800) / <alpha-value>)",
		900: "hsl(var(--orange-900) / <alpha-value>)",
		950: "hsl(var(--orange-950) / <alpha-value>)",
	},
	amber: {
		50: "hsl(var(--amber-50) / <alpha-value>)",
		100: "hsl(var(--amber-100) / <alpha-value>)",
		200: "hsl(var(--amber-200) / <alpha-value>)",
		300: "hsl(var(--amber-300) / <alpha-value>)",
		400: "hsl(var(--amber-400) / <alpha-value>)",
		500: "hsl(var(--amber-500) / <alpha-value>)",
		600: "hsl(var(--amber-600) / <alpha-value>)",
		700: "hsl(var(--amber-700) / <alpha-value>)",
		800: "hsl(var(--amber-800) / <alpha-value>)",
		900: "hsl(var(--amber-900) / <alpha-value>)",
		950: "hsl(var(--amber-950) / <alpha-value>)",
	},
	yellow: {
		50: "hsl(var(--yellow-50) / <alpha-value>)",
		100: "hsl(var(--yellow-100) / <alpha-value>)",
		200: "hsl(var(--yellow-200) / <alpha-value>)",
		300: "hsl(var(--yellow-300) / <alpha-value>)",
		400: "hsl(var(--yellow-400) / <alpha-value>)",
		500: "hsl(var(--yellow-500) / <alpha-value>)",
		600: "hsl(var(--yellow-600) / <alpha-value>)",
		700: "hsl(var(--yellow-700) / <alpha-value>)",
		800: "hsl(var(--yellow-800) / <alpha-value>)",
		900: "hsl(var(--yellow-900) / <alpha-value>)",
		950: "hsl(var(--yellow-950) / <alpha-value>)",
	},
	lime: {
		50: "hsl(var(--lime-50) / <alpha-value>)",
		100: "hsl(var(--lime-100) / <alpha-value>)",
		200: "hsl(var(--lime-200) / <alpha-value>)",
		300: "hsl(var(--lime-300) / <alpha-value>)",
		400: "hsl(var(--lime-400) / <alpha-value>)",
		500: "hsl(var(--lime-500) / <alpha-value>)",
		600: "hsl(var(--lime-600) / <alpha-value>)",
		700: "hsl(var(--lime-700) / <alpha-value>)",
		800: "hsl(var(--lime-800) / <alpha-value>)",
		900: "hsl(var(--lime-900) / <alpha-value>)",
		950: "hsl(var(--lime-950) / <alpha-value>)",
	},
	green: {
		50: "hsl(var(--green-50) / <alpha-value>)",
		100: "hsl(var(--green-100) / <alpha-value>)",
		200: "hsl(var(--green-200) / <alpha-value>)",
		300: "hsl(var(--green-300) / <alpha-value>)",
		400: "hsl(var(--green-400) / <alpha-value>)",
		500: "hsl(var(--green-500) / <alpha-value>)",
		600: "hsl(var(--green-600) / <alpha-value>)",
		700: "hsl(var(--green-700) / <alpha-value>)",
		800: "hsl(var(--green-800) / <alpha-value>)",
		900: "hsl(var(--green-900) / <alpha-value>)",
		950: "hsl(var(--green-950) / <alpha-value>)",
	},
	emerald: {
		50: "hsl(var(--emerald-50) / <alpha-value>)",
		100: "hsl(var(--emerald-100) / <alpha-value>)",
		200: "hsl(var(--emerald-200) / <alpha-value>)",
		300: "hsl(var(--emerald-300) / <alpha-value>)",
		400: "hsl(var(--emerald-400) / <alpha-value>)",
		500: "hsl(var(--emerald-500) / <alpha-value>)",
		600: "hsl(var(--emerald-600) / <alpha-value>)",
		700: "hsl(var(--emerald-700) / <alpha-value>)",
		800: "hsl(var(--emerald-800) / <alpha-value>)",
		900: "hsl(var(--emerald-900) / <alpha-value>)",
		950: "hsl(var(--emerald-950) / <alpha-value>)",
	},
	teal: {
		50: "hsl(var(--teal-50) / <alpha-value>)",
		100: "hsl(var(--teal-100) / <alpha-value>)",
		200: "hsl(var(--teal-200) / <alpha-value>)",
		300: "hsl(var(--teal-300) / <alpha-value>)",
		400: "hsl(var(--teal-400) / <alpha-value>)",
		500: "hsl(var(--teal-500) / <alpha-value>)",
		600: "hsl(var(--teal-600) / <alpha-value>)",
		700: "hsl(var(--teal-700) / <alpha-value>)",
		800: "hsl(var(--teal-800) / <alpha-value>)",
		900: "hsl(var(--teal-900) / <alpha-value>)",
		950: "hsl(var(--teal-950) / <alpha-value>)",
	},
	cyan: {
		50: "hsl(var(--cyan-50) / <alpha-value>)",
		100: "hsl(var(--cyan-100) / <alpha-value>)",
		200: "hsl(var(--cyan-200) / <alpha-value>)",
		300: "hsl(var(--cyan-300) / <alpha-value>)",
		400: "hsl(var(--cyan-400) / <alpha-value>)",
		500: "hsl(var(--cyan-500) / <alpha-value>)",
		600: "hsl(var(--cyan-600) / <alpha-value>)",
		700: "hsl(var(--cyan-700) / <alpha-value>)",
		800: "hsl(var(--cyan-800) / <alpha-value>)",
		900: "hsl(var(--cyan-900) / <alpha-value>)",
		950: "hsl(var(--cyan-950) / <alpha-value>)",
	},
	sky: {
		50: "hsl(var(--sky-50) / <alpha-value>)",
		100: "hsl(var(--sky-100) / <alpha-value>)",
		200: "hsl(var(--sky-200) / <alpha-value>)",
		300: "hsl(var(--sky-300) / <alpha-value>)",
		400: "hsl(var(--sky-400) / <alpha-value>)",
		500: "hsl(var(--sky-500) / <alpha-value>)",
		600: "hsl(var(--sky-600) / <alpha-value>)",
		700: "hsl(var(--sky-700) / <alpha-value>)",
		800: "hsl(var(--sky-800) / <alpha-value>)",
		900: "hsl(var(--sky-900) / <alpha-value>)",
		950: "hsl(var(--sky-950) / <alpha-value>)",
	},
	blue: {
		50: "hsl(var(--blue-50) / <alpha-value>)",
		100: "hsl(var(--blue-100) / <alpha-value>)",
		200: "hsl(var(--blue-200) / <alpha-value>)",
		300: "hsl(var(--blue-300) / <alpha-value>)",
		400: "hsl(var(--blue-400) / <alpha-value>)",
		500: "hsl(var(--blue-500) / <alpha-value>)",
		600: "hsl(var(--blue-600) / <alpha-value>)",
		700: "hsl(var(--blue-700) / <alpha-value>)",
		800: "hsl(var(--blue-800) / <alpha-value>)",
		900: "hsl(var(--blue-900) / <alpha-value>)",
		950: "hsl(var(--blue-950) / <alpha-value>)",
	},
	indigo: {
		50: "hsl(var(--indigo-50) / <alpha-value>)",
		100: "hsl(var(--indigo-100) / <alpha-value>)",
		200: "hsl(var(--indigo-200) / <alpha-value>)",
		300: "hsl(var(--indigo-300) / <alpha-value>)",
		400: "hsl(var(--indigo-400) / <alpha-value>)",
		500: "hsl(var(--indigo-500) / <alpha-value>)",
		600: "hsl(var(--indigo-600) / <alpha-value>)",
		700: "hsl(var(--indigo-700) / <alpha-value>)",
		800: "hsl(var(--indigo-800) / <alpha-value>)",
		900: "hsl(var(--indigo-900) / <alpha-value>)",
		950: "hsl(var(--indigo-950) / <alpha-value>)",
	},
	violet: {
		50: "hsl(var(--violet-50) / <alpha-value>)",
		100: "hsl(var(--violet-100) / <alpha-value>)",
		200: "hsl(var(--violet-200) / <alpha-value>)",
		300: "hsl(var(--violet-300) / <alpha-value>)",
		400: "hsl(var(--violet-400) / <alpha-value>)",
		500: "hsl(var(--violet-500) / <alpha-value>)",
		600: "hsl(var(--violet-600) / <alpha-value>)",
		700: "hsl(var(--violet-700) / <alpha-value>)",
		800: "hsl(var(--violet-800) / <alpha-value>)",
		900: "hsl(var(--violet-900) / <alpha-value>)",
		950: "hsl(var(--violet-950) / <alpha-value>)",
	},
	purple: {
		50: "hsl(var(--purple-50) / <alpha-value>)",
		100: "hsl(var(--purple-100) / <alpha-value>)",
		200: "hsl(var(--purple-200) / <alpha-value>)",
		300: "hsl(var(--purple-300) / <alpha-value>)",
		400: "hsl(var(--purple-400) / <alpha-value>)",
		500: "hsl(var(--purple-500) / <alpha-value>)",
		600: "hsl(var(--purple-600) / <alpha-value>)",
		700: "hsl(var(--purple-700) / <alpha-value>)",
		800: "hsl(var(--purple-800) / <alpha-value>)",
		900: "hsl(var(--purple-900) / <alpha-value>)",
		950: "hsl(var(--purple-950) / <alpha-value>)",
	},
	fuchsia: {
		50: "hsl(var(--fuchsia-50) / <alpha-value>)",
		100: "hsl(var(--fuchsia-100) / <alpha-value>)",
		200: "hsl(var(--fuchsia-200) / <alpha-value>)",
		300: "hsl(var(--fuchsia-300) / <alpha-value>)",
		400: "hsl(var(--fuchsia-400) / <alpha-value>)",
		500: "hsl(var(--fuchsia-500) / <alpha-value>)",
		600: "hsl(var(--fuchsia-600) / <alpha-value>)",
		700: "hsl(var(--fuchsia-700) / <alpha-value>)",
		800: "hsl(var(--fuchsia-800) / <alpha-value>)",
		900: "hsl(var(--fuchsia-900) / <alpha-value>)",
		950: "hsl(var(--fuchsia-950) / <alpha-value>)",
	},
	pink: {
		50: "hsl(var(--pink-50) / <alpha-value>)",
		100: "hsl(var(--pink-100) / <alpha-value>)",
		200: "hsl(var(--pink-200) / <alpha-value>)",
		300: "hsl(var(--pink-300) / <alpha-value>)",
		400: "hsl(var(--pink-400) / <alpha-value>)",
		500: "hsl(var(--pink-500) / <alpha-value>)",
		600: "hsl(var(--pink-600) / <alpha-value>)",
		700: "hsl(var(--pink-700) / <alpha-value>)",
		800: "hsl(var(--pink-800) / <alpha-value>)",
		900: "hsl(var(--pink-900) / <alpha-value>)",
		950: "hsl(var(--pink-950) / <alpha-value>)",
	},
	rose: {
		50: "hsl(var(--rose-50) / <alpha-value>)",
		100: "hsl(var(--rose-100) / <alpha-value>)",
		200: "hsl(var(--rose-200) / <alpha-value>)",
		300: "hsl(var(--rose-300) / <alpha-value>)",
		400: "hsl(var(--rose-400) / <alpha-value>)",
		500: "hsl(var(--rose-500) / <alpha-value>)",
		600: "hsl(var(--rose-600) / <alpha-value>)",
		700: "hsl(var(--rose-700) / <alpha-value>)",
		800: "hsl(var(--rose-800) / <alpha-value>)",
		900: "hsl(var(--rose-900) / <alpha-value>)",
		950: "hsl(var(--rose-950) / <alpha-value>)",
	},
	neutral: {
		50: "hsl(var(--neutral-50) / <alpha-value>)",
		100: "hsl(var(--neutral-100) / <alpha-value>)",
		200: "hsl(var(--neutral-200) / <alpha-value>)",
		300: "hsl(var(--neutral-300) / <alpha-value>)",
		400: "hsl(var(--neutral-400) / <alpha-value>)",
		500: "hsl(var(--neutral-500) / <alpha-value>)",
		600: "hsl(var(--neutral-600) / <alpha-value>)",
		700: "hsl(var(--neutral-700) / <alpha-value>)",
		800: "hsl(var(--neutral-800) / <alpha-value>)",
		900: "hsl(var(--neutral-900) / <alpha-value>)",
		950: "hsl(var(--neutral-950) / <alpha-value>)",
	},
	accent: {
		50: "hsl(var(--accent-50) / <alpha-value>)",
		100: "hsl(var(--accent-100) / <alpha-value>)",
		200: "hsl(var(--accent-200) / <alpha-value>)",
		300: "hsl(var(--accent-300) / <alpha-value>)",
		400: "hsl(var(--accent-400) / <alpha-value>)",
		500: "hsl(var(--accent-500) / <alpha-value>)",
		600: "hsl(var(--accent-600) / <alpha-value>)",
		700: "hsl(var(--accent-700) / <alpha-value>)",
		800: "hsl(var(--accent-800) / <alpha-value>)",
		900: "hsl(var(--accent-900) / <alpha-value>)",
		950: "hsl(var(--accent-950) / <alpha-value>)",
	},
	danger: {
		50: "hsl(var(--danger-50) / <alpha-value>)",
		100: "hsl(var(--danger-100) / <alpha-value>)",
		200: "hsl(var(--danger-200) / <alpha-value>)",
		300: "hsl(var(--danger-300) / <alpha-value>)",
		400: "hsl(var(--danger-400) / <alpha-value>)",
		500: "hsl(var(--danger-500) / <alpha-value>)",
		600: "hsl(var(--danger-600) / <alpha-value>)",
		700: "hsl(var(--danger-700) / <alpha-value>)",
		800: "hsl(var(--danger-800) / <alpha-value>)",
		900: "hsl(var(--danger-900) / <alpha-value>)",
		950: "hsl(var(--danger-950) / <alpha-value>)",
	},
	warning: {
		50: "hsl(var(--warning-50) / <alpha-value>)",
		100: "hsl(var(--warning-100) / <alpha-value>)",
		200: "hsl(var(--warning-200) / <alpha-value>)",
		300: "hsl(var(--warning-300) / <alpha-value>)",
		400: "hsl(var(--warning-400) / <alpha-value>)",
		500: "hsl(var(--warning-500) / <alpha-value>)",
		600: "hsl(var(--warning-600) / <alpha-value>)",
		700: "hsl(var(--warning-700) / <alpha-value>)",
		800: "hsl(var(--warning-800) / <alpha-value>)",
		900: "hsl(var(--warning-900) / <alpha-value>)",
		950: "hsl(var(--warning-950) / <alpha-value>)",
	},
	success: {
		50: "hsl(var(--success-50) / <alpha-value>)",
		100: "hsl(var(--success-100) / <alpha-value>)",
		200: "hsl(var(--success-200) / <alpha-value>)",
		300: "hsl(var(--success-300) / <alpha-value>)",
		400: "hsl(var(--success-400) / <alpha-value>)",
		500: "hsl(var(--success-500) / <alpha-value>)",
		600: "hsl(var(--success-600) / <alpha-value>)",
		700: "hsl(var(--success-700) / <alpha-value>)",
		800: "hsl(var(--success-800) / <alpha-value>)",
		900: "hsl(var(--success-900) / <alpha-value>)",
		950: "hsl(var(--success-950) / <alpha-value>)",
	},
};

const mantlePreset = {
	content: [],
	darkMode: "class",
	theme: {
		colors,
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			aria: {
				collapsed: 'expanded="false"',
				invalid: 'invalid="true"',
				unchecked: 'checked="false"',
			},
			backgroundColor: {
				base: "hsl(var(--bg-base))",
				card: "hsl(var(--bg-card))",
				dialog: "hsl(var(--bg-dialog))",
				form: "hsl(var(--bg-form))",
				overlay: "hsl(var(--bg-overlay))",
				popover: "hsl(var(--bg-popover))",
				tooltip: "hsl(var(--bg-tooltip))",
				"base-hover": "hsl(var(--bg-base-hover))",
				"card-hover": "hsl(var(--bg-card-hover))",
				"filled-accent-active": "hsl(var(--bg-filled-accent-active))",
				"filled-accent-hover": "hsl(var(--bg-filled-accent-hover))",
				"filled-accent": "hsl(var(--bg-filled-accent))",
				"filled-danger-active": "hsl(var(--bg-filled-danger-active))",
				"filled-danger-hover": "hsl(var(--bg-filled-danger-hover))",
				"filled-danger": "hsl(var(--bg-filled-danger))",
				"filled-neutral-active": "hsl(var(--bg-filled-neutral-active))",
				"filled-neutral-hover": "hsl(var(--bg-filled-neutral-hover))",
				"filled-neutral": "hsl(var(--bg-filled-neutral))",
				"filled-success-active": "hsl(var(--bg-filled-success-active))",
				"filled-success-hover": "hsl(var(--bg-filled-success-hover))",
				"filled-success": "hsl(var(--bg-filled-success))",
				"filled-warning-active": "hsl(var(--bg-filled-warning-active))",
				"filled-warning-hover": "hsl(var(--bg-filled-warning-hover))",
				"filled-warning": "hsl(var(--bg-filled-warning))",
				"form-active": "hsl(var(--bg-form-active))",
				"form-hover": "hsl(var(--bg-form-hover))",
				"popover-hover": "hsl(var(--bg-popover-hover))",
			},
			textColor: {
				default: "hsl(var(--text-default))",
				inverted: "hsl(var(--text-inverted))",
				muted: "hsl(var(--text-muted))",
				placeholder: "hsl(var(--text-placeholder))",
				strong: "hsl(var(--text-strong))",
				tooltip: "hsl(var(--text-tooltip))",
			},
			borderColor: {
				base: "hsl(var(--border-base))",
				card: "hsl(var(--border-card))",
				dialog: "hsl(var(--border-dialog))",
				form: "hsl(var(--border-form))",
				popover: "hsl(var(--border-popover))",
				"base-muted": "hsl(var(--border-base-muted))",
				"card-muted": "hsl(var(--border-card-muted))",
				"dialog-muted": "hsl(var(--border-dialog-muted))",
				"popover-muted": "hsl(var(--border-popover-muted))",
			},
			ringColor: {
				"focus-accent": "hsl(var(--ring-focus-accent))",
				"focus-danger": "hsl(var(--ring-focus-danger))",
				"focus-neutral": "hsl(var(--ring-focus-neutral))",
				"focus-success": "hsl(var(--ring-focus-success))",
				"focus-warning": "hsl(var(--ring-focus-warning))",
			},
			cursor: {
				inherit: "inherit",
				initial: "initial",
			},
			data: {
				"active-item": "active-item",
				"orientation-horizontal": 'orientation="horizontal"',
				"orientation-vertical": 'orientation="vertical"',
				"side-bottom": 'side="bottom"',
				"side-left": 'side="left"',
				"side-right": 'side="right"',
				"side-top": 'side="top"',
				"state-checked": 'state~="checked"',
				"state-closed": 'state~="closed"',
				"state-indeterminate": 'state~="indeterminate"',
				"state-open": 'state~="open"',
				"state-selected": 'state~="selected"',
				"state-unchecked": 'state~="unchecked"',
				disabled: "disabled",
				highlighted: "highlighted",
			},
			fontFamily: {
				sans: ["EuclidSquare", ...defaultTheme.fontFamily.sans],
				mono: ["IBMPlexMono", ...defaultTheme.fontFamily.mono],
			},
			fontSize: {
				"size-inherit": "inherit",
			},
			fontWeight: {
				initial: "initial",
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
			},
			lineHeight: {
				0: "0",
				initial: "initial",
			},
			screens: {
				xs: "480px",
			},
			spacing: {
				"1.25": "0.3125rem",
			},
			transitionProperty: {
				"max-height": "max-height",
			},
			zIndex: {
				1: "1",
				max: "2147483647",
			},
		},
	},
	plugins: [
		tailwindCssAnimatePlugin,
		firefoxVariantPlugin,
		plugin(function ({ addVariant }) {
			addVariant("dark-high-contrast", [":is(.dark-high-contrast &)"]);
			addVariant("high-contrast", [":is(.light-high-contrast &)"]);
		}),
	],
} satisfies Config;

export type MantlePreset = typeof mantlePreset;

export { mantlePreset };
