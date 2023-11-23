import type { Config } from "tailwindcss";
import baseConfig from "./config/tailwind.preset";

export default {
	presets: [baseConfig],
	content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
} satisfies Config;
