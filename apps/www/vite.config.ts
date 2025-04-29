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
	},
});
