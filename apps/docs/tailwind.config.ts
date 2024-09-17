import { mantlePreset } from "@ngrok/mantle/tailwind-preset";
import type { Config } from "tailwindcss";

export default {
	presets: [mantlePreset],
	content: ["./app/**/*.tsx", "../../packages/mantle/src/**/*.{ts,tsx}"],
} satisfies Config;
