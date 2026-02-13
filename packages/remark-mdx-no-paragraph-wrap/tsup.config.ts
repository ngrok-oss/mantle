import { defineConfig } from "tsup";

export default defineConfig({
	dts: true,
	clean: true,
	minify: false,
	sourcemap: true,
	target: "es2022",
	format: "esm",
	entry: {
		index: "./src/index.ts",
	},
});
