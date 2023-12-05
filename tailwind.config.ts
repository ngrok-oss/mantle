import type { Config } from "tailwindcss";
import mantlePreset from "./packages/tailwind-preset/src/tailwind.preset";

export default {
	presets: [mantlePreset],
	content: ["./components/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx,js,jsx}"],
} satisfies Config;
