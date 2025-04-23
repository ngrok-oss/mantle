import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	server: {
		port: 3333,
	},
	plugins: [
		//,
		reactRouter(),
		tsconfigPaths(),
	],
	resolve: {
		conditions: ["@ngrok/mantle/source"],
	},
	optimizeDeps: {
		exclude: ["@ngrok/mantle"],
	},
});
