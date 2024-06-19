import type { Postcss, Root } from "postcss";
import plugin from "tailwindcss/plugin";
import type { PluginAPI } from "tailwindcss/types/config";

/**
 * This plugin adds a `mantle` variant to TailwindCSS which moves the selector
 * into the `@layer mantle` css layer. This layer is lower specificity than non-layered
 * styles, but higher specificity than any `:where()` styles. All tailwind classes
 * will override the `mantle` layer since they are not in a layer.
 */
const mantleVariantPlugin = plugin(
	// @ts-expect-error PluginAPI is not typed correctly, missing postcss
	(api: PluginAPI & { postcss: Postcss }) => {
		// @ts-expect-error addVariant is not typed correctly
		api.addVariant("mantle", ({ container, separator }: { container: Root; separator: string }) => {
			const mantleRule = api.postcss.atRule({
				name: "layer",
				params: "mantle",
			});
			mantleRule.append(container.nodes);
			container.append(mantleRule);
			mantleRule.walkRules((rule) => {
				rule.selector = `.${api.e(`mantle${separator}${rule.selector.slice(1).replace(/\\/g, "")}`)}`;
			});
		});
	},
);

export { mantleVariantPlugin };
