import path from "node:path";
import type { Plugin, ResolvedConfig, ViteDevServer } from "vite";
import {
	collectFiles,
	findFirstExisting,
	resolveMantleDistDir,
	scanMantleImports,
	writeSourcesToCssFile,
} from "./internals.js";

/**
 * Options for `mantleTwSourcePlugin`.
 */
export type MantleTwSourcePluginOptions = {
	/**
	 * Directories to scan recursively for `@ngrok/mantle/*` imports.
	 * Paths are relative to the Vite project root.
	 * Defaults to `["app"]`.
	 */
	include?: string[];

	/**
	 * Path to the CSS file that should receive the injected `@source` block.
	 * Relative to the Vite project root, or absolute.
	 *
	 * Defaults to the first of the following that exists (relative to root):
	 * `"app/global.css"`, `"src/global.css"`, `"app/app.css"`, `"src/app.css"`.
	 *
	 * The plugin writes a clearly-marked auto-generated block directly into
	 * this file so that Tailwind's file-system scanner picks it up in both
	 * dev and prod. The block is safe to commit — it is deterministic and
	 * human-readable. To remove it, delete the lines between the
	 * `@ngrok/mantle-vite-plugins:source:start` and `:end` markers.
	 */
	cssFile?: string;
};

const SOURCE_EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".mdx", ".md"];

/** CSS file candidates tried in order when `cssFile` is not specified. */
const DEFAULT_CSS_CANDIDATES = ["app/global.css", "src/global.css", "app/app.css", "src/app.css"];

/**
 * Vite plugin that scans your app's source files for `@ngrok/mantle/*` component
 * imports and injects Tailwind CSS `@source` directives into your global CSS file
 * for only those components — so Tailwind only scans the mantle components your
 * app actually uses.
 *
 * By default, Tailwind must scan every compiled mantle component to discover
 * which utility classes are used. This plugin scans your app's source files,
 * finds which mantle components you import, and writes targeted `@source`
 * directives into your CSS file so Tailwind only scans those components.
 * The result is a smaller generated CSS bundle.
 *
 * The directives are written **directly to disk** inside a clearly-marked
 * auto-generated block. This ensures Tailwind's file-system scanner sees
 * them in both dev and prod — unlike a Vite `transform` hook, which is only
 * visible to Vite's in-memory pipeline and is ignored by Tailwind's dev-mode
 * scanner.
 *
 * In development, the plugin watches your source files for new mantle imports.
 * When a new component import is detected, the CSS file is updated in place
 * and Tailwind's watcher picks up the change automatically — no server restart
 * required.
 *
 * **Setup**
 *
 * 1. Add the plugin to `vite.config.ts`:
 *    ```ts
 *    import { mantleTwSourcePlugin } from "@ngrok/mantle-vite-plugins";
 *
 *    export default defineConfig({
 *      plugins: [mantleTwSourcePlugin()],
 *    });
 *    ```
 *
 * 2. In your global CSS, import `mantle.css` — do **not** add `source-all.css`:
 *    ```css
 *    @import "@ngrok/mantle/mantle.css";
 *    ```
 *
 * The plugin writes the correct `@source` lines into your CSS file so Tailwind
 * picks them up on startup in both dev and prod.
 *
 * @param options - Optional configuration. See {@link MantleTwSourcePluginOptions}.
 * @returns A Vite plugin object.
 */
export function mantleTwSourcePlugin(options: MantleTwSourcePluginOptions = {}): Plugin {
	const { include = ["app"], cssFile: cssFileOption } = options;

	let resolvedCssFile: string | null = null;
	let mantleDistDir: string | null = null;
	let knownComponents = new Set<string>();

	/**
	 * Scans the configured source directories, then writes the current
	 * `@source` block to the CSS file on disk. Called at startup and whenever
	 * a new mantle import is detected in dev mode.
	 *
	 * @param config - The resolved Vite config, used for logging.
	 */
	function syncSources(config: ResolvedConfig): void {
		if (!resolvedCssFile || !mantleDistDir) {
			return;
		}

		const allFiles: string[] = [];
		for (const dir of include) {
			const absDir = path.isAbsolute(dir) ? dir : path.join(config.root, dir);
			collectFiles(absDir, allFiles, SOURCE_EXTENSIONS);
		}

		const components = scanMantleImports(allFiles);
		knownComponents = components;
		writeSourcesToCssFile(resolvedCssFile, components, mantleDistDir);

		if (components.size > 0) {
			config.logger.info(
				`[mantle] Writing @source for ${components.size} component(s) to ${path.relative(config.root, resolvedCssFile)}: ${[...components].join(", ")}`,
			);
		}
	}

	return {
		name: "@ngrok/mantle-vite-plugins:tw-source",

		/**
		 * Runs after Vite has resolved its final configuration. Locates the
		 * mantle `dist/` directory and target CSS file, then performs the
		 * initial scan and disk write.
		 *
		 * Emits a warning if `@ngrok/mantle` cannot be resolved or if no CSS
		 * target file can be found, and skips injection in both cases.
		 *
		 * @param config - The fully resolved Vite configuration.
		 */
		configResolved(config: ResolvedConfig) {
			mantleDistDir = resolveMantleDistDir(config.root);
			if (!mantleDistDir) {
				config.logger.warn(
					"[mantle] Could not resolve @ngrok/mantle dist — @source injection skipped",
				);
				return;
			}

			resolvedCssFile = cssFileOption
				? path.isAbsolute(cssFileOption)
					? cssFileOption
					: path.join(config.root, cssFileOption)
				: findFirstExisting(config.root, DEFAULT_CSS_CANDIDATES);

			if (!resolvedCssFile) {
				config.logger.warn(
					"[mantle] Could not find a target CSS file — pass `cssFile` in plugin options or create one of: " +
						DEFAULT_CSS_CANDIDATES.join(", "),
				);
				return;
			}

			syncSources(config);
		},

		/**
		 * Registers a file-change watcher on the Vite dev server so that newly
		 * added mantle component imports cause the CSS file to be updated in
		 * place.
		 *
		 * Both `"change"` (existing file edited) and `"add"` (new file created)
		 * events are handled. Only source files matching {@link SOURCE_EXTENSIONS}
		 * are inspected. When a new mantle import is detected, the CSS file is
		 * rewritten with the updated `@source` block and Tailwind's own watcher
		 * picks up the change — no server restart is required.
		 *
		 * @param server - The Vite dev server instance.
		 */
		configureServer(server: ViteDevServer) {
			const handleFileChange = (changedFile: string) => {
				if (!SOURCE_EXTENSIONS.some((ext) => changedFile.endsWith(ext))) {
					return;
				}

				const newComponents = scanMantleImports([changedFile]);
				const hasNew = [...newComponents].some((c) => !knownComponents.has(c));
				if (!hasNew) {
					return;
				}

				server.config.logger.info(
					`[mantle] New mantle component import detected in ${path.relative(server.config.root, changedFile)} — updating CSS`,
				);
				syncSources(server.config);
			};

			server.watcher.on("change", handleFileChange);
			server.watcher.on("add", handleFileChange);
		},
	};
}
