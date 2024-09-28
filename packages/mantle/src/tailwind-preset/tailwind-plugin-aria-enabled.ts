import plugin from "tailwindcss/plugin.js";
import type { PluginAPI } from "tailwindcss/types/config.js";

/**
 * This plugin adds the following variant: aria-enabled
 */
const ariaEnabledVariantPlugin = plugin((api: PluginAPI) => {
	api.addVariant(
		"aria-enabled",
		// @ts-expect-error addVariant is not typed correctly
		({ modifySelectors, separator }: { modifySelectors: unknown; separator: string }) => {
			// @ts-expect-error modifySelectors is not typed correctly
			modifySelectors(({ className }: { className: string }) => {
				return `:not([aria-disabled]).${api.e(`aria-enabled${separator}${className}`)}`;
			});
		},
	);
});

export { ariaEnabledVariantPlugin };
