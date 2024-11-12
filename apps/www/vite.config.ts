import { vitePlugin as remix } from "@remix-run/dev";
import { vercelPreset } from "@vercel/remix/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isVercelBuild = Boolean(process.env.VERCEL);

declare module "@remix-run/node" {
	interface Future {
		v3_singleFetch: true;
	}
}

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		remix({
			future: {
				unstable_optimizeDeps: true, // https://remix.run/docs/en/main/guides/dependency-optimization#dependency-optimization
				v3_fetcherPersist: true,
				v3_lazyRouteDiscovery: true,
				v3_relativeSplatPath: true,
				v3_singleFetch: true, // 👈 enable single-fetch
				v3_throwAbortReason: true,
			},
			presets: isVercelBuild ? [vercelPreset()] : undefined,
		}),
		tsconfigPaths(),
	],
	resolve: {
		conditions: ["@ngrok/mantle/source"],
	},
});
