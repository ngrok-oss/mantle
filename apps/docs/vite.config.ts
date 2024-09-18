import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { vercelPreset } from "@vercel/remix/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		remix({
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
				unstable_optimizeDeps: true, // https://remix.run/docs/en/main/guides/dependency-optimization#dependency-optimization
				// unstable_singleFetch: true, // 👈 enable single-fetch
			},
			presets: [vercelPreset()],
		}),
		tsconfigPaths(),
	],
});
