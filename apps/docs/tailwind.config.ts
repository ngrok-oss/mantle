import { mantlePreset } from "@ngrok/mantle/tailwind-preset";
import type { Config } from "tailwindcss";

export default {
	presets: [mantlePreset],
	content: ["./app/**/*.tsx", "../../packages/mantle/dist/**/*.js"],
} satisfies Config;
