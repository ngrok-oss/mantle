import type { Config } from "tailwindcss";
import { mantlePreset } from "./src/tailwind-preset";

export default {
	presets: [mantlePreset],
	content: ["./src/**/*.{ts,tsx,js,jsx}"],
} satisfies Config;
