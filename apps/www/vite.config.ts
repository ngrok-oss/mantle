import { reactRouter } from "@react-router/dev/vite";
import { reactRouterDevTools } from "react-router-devtools";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	server: {
		port: 3333,
	},
	plugins: [
		//,
		reactRouterDevTools(),
		reactRouter(),
		tsconfigPaths(),
	],
	resolve: {
		conditions: ["@ngrok/mantle/source"],
	},
});
