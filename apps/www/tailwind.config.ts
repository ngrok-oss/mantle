import { createRequire } from "node:module";
import {
	mantlePreset,
	resolveMantleContentGlob,
} from "@ngrok/mantle/tailwind-preset";
import type { Config } from "tailwindcss";
import { mantleSrcPath, relativeWwwPath } from "./relative-path";

const require = createRequire(import.meta.url);

const isDevMode = process.env.NODE_ENV === "development";

const productionMantleContentGlob = resolveMantleContentGlob(require);
const docSiteContentGlob = relativeWwwPath("app", "**", "*.tsx");
const devMantleContentGlob = isDevMode
	? [mantleSrcPath("components", "**", "*.tsx")]
	: [];

export default {
	presets: [mantlePreset],
	content: [
		productionMantleContentGlob,
		docSiteContentGlob,
		...devMantleContentGlob,
	],
} satisfies Config;
