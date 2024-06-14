import plugin from "tailwindcss/plugin";
import type { PluginAPI } from "tailwindcss/types/config";

/**
 * This plugin adds a :where() variant to TailwindCSS
 *
 * This is useful to avoid specificity issues when using overridable base styles
 * since reduces the specificity of the selector to zero (0, 0, 0).
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/:where
 */
const whereVariantPlugin = plugin((api: PluginAPI) => {
	api.addVariant(
		"where",
		// @ts-expect-error addVariant is not typed correctly
		({
			modifySelectors,
			separator,
		}: {
			modifySelectors: (args: { className: string }) => string;
			separator: string;
		}) => {
			// @ts-expect-error modifySelectors is not typed correctly
			modifySelectors(({ className }: { className: string }) => {
				return `:where(&.${api.e(`where${separator}${className}`)})`;
			});
		},
	);
});

export { whereVariantPlugin };
