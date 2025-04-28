import { createRequire } from "node:module";
import path, { relative } from "node:path";
import { fileURLToPath } from "node:url";
import {
	mantlePreset,
	resolveMantleContentGlob,
} from "@ngrok/mantle/tailwind-preset";
import type { Config } from "tailwindcss";

function relativePath(...parts: string[]) {
	const __dirname = fileURLToPath(new URL(".", import.meta.url));
	return path.resolve(__dirname, ...parts);
}

const mantleSrcPath = (...parts: string[]) =>
	relativePath("..", "..", "packages", "mantle", "src", ...parts);

const require = createRequire(import.meta.url);
const mantleContentGlob = resolveMantleContentGlob(require);

const isDevMode = process.env.NODE_ENV === "development";

export default {
	presets: [mantlePreset],
	content: [
		mantleContentGlob,
		relativePath("app", "**", "*.tsx"),
		...(isDevMode ? mantleSrcPath("components", "**", "*.tsx") : []),
	],
} satisfies Config;
