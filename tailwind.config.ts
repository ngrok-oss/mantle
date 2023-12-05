import type { Config } from "tailwindcss";
import preset from "./packages/tailwind-preset";

export default {
	presets: [preset],
	content: ["./components/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx,js,jsx}"],
} satisfies Config;
