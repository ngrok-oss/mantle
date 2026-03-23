import { defineConfig } from "tsdown";

export default defineConfig({
	dts: true,
	clean: true,
	external: ["@ngrok/mantle", "magic-string", "oxc-parser", "shiki", "vite"],
	minify: false,
	sourcemap: true,
	target: "ES2023",
	tsconfig: "tsconfig.json",
	fixedExtension: false,
	format: "esm",
	entry: {
		index: "./src/index.ts",
		"server-highlighter": "./src/server-highlighter/index.ts",
	},
});
