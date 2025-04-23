import { createRequire } from "node:module";
import {
	mantlePreset,
	resolveMantleContentGlob,
} from "@ngrok/mantle/tailwind-preset";
import type { Config } from "tailwindcss";

const require = createRequire(import.meta.url);

export default {
	presets: [mantlePreset],
	content: [
		resolveMantleContentGlob(require),
		"./app/**/*.tsx",
		"../../packages/mantle/src/**/*.{ts,tsx}",
	],
} satisfies Config;
