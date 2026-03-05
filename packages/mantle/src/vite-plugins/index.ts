import type { PluginOption } from "vite";
import { mantleCodeRehypePlugin } from "./mantle-code-rehype-plugin.js";
import { mantleCodeVitePlugin } from "./mantle-code-vite-plugin.js";

type MantleCodeBlockPluginsOptions = {
	/**
	 * Enable runtime source transforms for `mantleCode("lang")\`...\`` tagged templates.
	 * @default true
	 */
	runtime?: boolean;
	/**
	 * Enable MDX fenced code block highlighting via a rehype plugin.
	 * @default true
	 */
	mdx?: boolean;
};

type MantleCodeBlockPluginsResult = {
	/**
	 * Vite plugins to include in the top-level Vite `plugins` array.
	 */
	vitePlugins: PluginOption[];
	/**
	 * Rehype plugins to include in your MDX pipeline (if `mdx` is enabled).
	 */
	rehypePlugins: Array<typeof mantleCodeRehypePlugin>;
};

/**
 * Unified helper for Mantle code block integrations.
 *
 * Returns plugin lists for both integration surfaces:
 * `vitePlugins` for runtime-tagged template transforms and `rehypePlugins`
 * for MDX fenced code blocks.
 *
 * @example
 * ```ts
 * import { mantleCodeBlockPlugins } from "@ngrok/mantle/vite-plugin";
 *
 * const codeBlockPlugins = mantleCodeBlockPlugins();
 *
 * export default defineConfig({
 *   plugins: [
 *     ...codeBlockPlugins.vitePlugins,
 *     mdx({
 *       rehypePlugins: [
 *         rehypeSlug,
 *         ...codeBlockPlugins.rehypePlugins,
 *         rehypeMdxCodeProps,
 *       ],
 *     }),
 *   ],
 * });
 * ```
 */
function mantleCodeBlockPlugins(
	options: MantleCodeBlockPluginsOptions = {},
): MantleCodeBlockPluginsResult {
	const { runtime = true, mdx = true } = options;

	return {
		vitePlugins: runtime ? [mantleCodeVitePlugin()] : [],
		rehypePlugins: mdx ? [mantleCodeRehypePlugin] : [],
	};
}

export {
	//,
	mantleCodeBlockPlugins,
	mantleCodeRehypePlugin,
	mantleCodeVitePlugin,
};
