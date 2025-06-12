import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	optimizeDeps: {
		exclude: ["@ngrok/mantle"],
	},
	plugins: [
		//,
		reactRouter(),
		tsconfigPaths(),
	],
	resolve: {
		conditions: ["@ngrok/mantle/source"],
	},
	server: {
		port: 3333,
		warmup: {
			clientFiles: [
				"./app/**/!(*.server|*.test)*.tsx", // Include all .tsx files except server and test files (add more patterns if required)
			],
		},
	},
});
