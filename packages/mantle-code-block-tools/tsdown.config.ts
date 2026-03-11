import { defineConfig } from "tsdown";

export default defineConfig({
	dts: true,
	clean: true,
	minify: false,
	sourcemap: true,
	target: "ES2023",
	tsconfig: "tsconfig.json",
	fixedExtension: false,
	format: "esm",
	entry: {
		"server-highlighter": "./src/server-highlighter/index.ts",
	},
	external: ["@ngrok/mantle", "shiki"],
});
