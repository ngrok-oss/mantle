import { defineConfig } from "tsdown";

export default defineConfig({
	dts: true,
	clean: true,
	external: ["@ngrok/mantle", "shiki"],
	minify: false,
	sourcemap: true,
	target: "ES2023",
	tsconfig: "tsconfig.json",
	fixedExtension: false,
	format: "esm",
	entry: {
		index: "./src/index.ts",
	},
});
