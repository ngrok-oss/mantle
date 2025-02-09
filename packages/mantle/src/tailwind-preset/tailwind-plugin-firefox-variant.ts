import type { Postcss, Root } from "postcss";
import plugin from "tailwindcss/plugin.js";
import type { PluginAPI } from "tailwindcss/types/config.js";

/**
 * This plugin adds a `firefox` variant to TailwindCSS.
 *
 * @see https://gist.github.com/samselikoff/b3c5126ee4f4e69e60b0af0aa5bfb2e7
 */
const firefoxVariantPlugin = plugin(
	// @ts-expect-error PluginAPI is not typed correctly, missing postcss
	(api: PluginAPI & { postcss: Postcss }) => {
		api.addVariant(
			"firefox",
			// @ts-expect-error addVariant is not typed correctly
			({ container, separator }: { container: Root; separator: string }) => {
				const isFirefoxRule = api.postcss.atRule({
					name: "supports",
					params: "(-moz-appearance:none)",
				});
				isFirefoxRule.append(container.nodes);
				container.append(isFirefoxRule);
				isFirefoxRule.walkRules((rule) => {
					rule.selector = `.${api.e(`firefox${separator}${rule.selector.slice(1).replace(/\\/g, "")}`)}`;
				});
			},
		);
	},
);

export { firefoxVariantPlugin };
