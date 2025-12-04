import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";
import mdx from "@mdx-js/rollup";

import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	optimizeDeps: {
		exclude: ["@ngrok/mantle"],
	},
	plugins: [
		//
		mdx(),
		devtoolsJson(),
		tailwindcss(),
		reactRouter(),
		tsconfigPaths(),
	],
	resolve: {
		// Ensure Mantle components resolve to source in dev mode (not dist)
		// so client HMR picks up changes immediately
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
	ssr: {
		noExternal: [
			// https://github.com/phosphor-icons/react/issues/45#issuecomment-2721119452
			"@phosphor-icons/react",
		],
		resolve: {
			// Same as above, but for the SSR renderer.
			// Without this, the server falls back to dist and causes hydration mismatches
			// (className warnings, missing styles, etc.) on hard refresh.
			conditions: ["@ngrok/mantle/source"],
		},
	},
});
