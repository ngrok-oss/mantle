import { defineConfig } from "tsup";

export default defineConfig((options) => [
	{
		dts: true,
		clean: false,
		external: ["@ngrok/mantle", "magic-string", "oxc-parser", "shiki", "vite"],
		minify: true,
		sourcemap: true,
		target: "ES2023",
		tsconfig: "tsconfig.build.json",
		format: "esm",
		entry: {
			"server-highlighter": "./src/server-highlighter/index.ts",
			"vite-plugin": "./src/vite-plugins/index.ts",
		},
		...options,
	},
]);
