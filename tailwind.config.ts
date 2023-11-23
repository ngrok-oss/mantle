import type { Config } from "tailwindcss";
import baseConfig from "./components/core/tailwind.preset";

export default {
	presets: [baseConfig],
	content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
} satisfies Config;
