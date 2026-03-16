import mdx from "@mdx-js/rollup";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import { remarkMdxGithubAlerts } from "@ngrok/remark-mdx-github-alerts";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";

import { remarkMdxNoParagraphWrap } from "@ngrok/remark-mdx-no-paragraph-wrap";
import { rawMdxDocs } from "./vite-plugins/raw-mdx-docs";

export default defineConfig({
	optimizeDeps: {
		exclude: ["@ngrok/mantle"],
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					// prismjs is CJS and sets a global `Prism`; its component files
					// reference that global. Rollup's code splitting can put the
					// components into a different chunk from the main prismjs module,
					// causing ReferenceError: Prism is not defined. Forcing all prismjs
					// modules into one chunk ensures the main module (which sets
					// window.Prism) always runs before any component file.
					if (id.includes("prismjs")) {
						return "prism";
					}
				},
			},
		},
	},
	plugins: [
		//
		rawMdxDocs(path.resolve(import.meta.dirname, "app/docs")),
		devtoolsJson(),
		tailwindcss(),
		mdx({
			remarkPlugins: [
				remarkFrontmatter,
				// Use `export: "namespace"` to attach frontmatter as a property on
				// the default export component (MDXContent.frontmatter) instead of a
				// separate named export. This is required for React Refresh (Fast
				// Refresh) compatibility — modules that export non-component values
				// cause React Refresh to bail out and trigger a full page reload.
				[remarkMdxFrontmatter, { export: "namespace" }],
				remarkGfm,
				remarkMdxGithubAlerts,
				remarkMdxNoParagraphWrap,
			],
			rehypePlugins: [rehypeSlug, rehypeMdxCodeProps],
			providerImportSource: "@mdx-js/react",
		}),
		reactRouter(),
	],
	resolve: {
		// Ensure Mantle components resolve to source in dev mode (not dist)
		// so client HMR picks up changes immediately
		conditions: ["@ngrok/src-live-types"],
		tsconfigPaths: true,
		alias: {
			// CSS @import doesn't go through Vite's resolve.conditions,
			// so we alias the CSS entry point to the source file directly
			"@ngrok/mantle/mantle.css": path.resolve(
				import.meta.dirname,
				"../../packages/mantle/src/mantle.css",
			),
		},
	},
	server: {
		port: 3333,
		warmup: {
			clientFiles: [
				"./app/**/!(*.server|*.test)*.tsx", // Include all .tsx files except server and test files (add more patterns if required)
			],
		},
		watch: {
			// Explicitly watch mantle source files for HMR
			ignored: ["!**/node_modules/@ngrok/mantle/src/**"],
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
			conditions: ["@ngrok/src-live-types"],
		},
	},
});
