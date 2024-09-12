import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			globals: true,
			environment: "jsdom",
			setupFiles: "./vitest.setup.ts",
			// you might want to disable it, if you don't have tests that rely on CSS
			// since parsing CSS is slow
			css: true,
		},
	}),
);
