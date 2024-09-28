import type { Postcss, Root } from "postcss";
import plugin from "tailwindcss/plugin.js";
import type { PluginAPI } from "tailwindcss/types/config.js";

/**
 * This plugin adds the following variants to TailwindCSS:
 *   - `pointer-coarse`
 *   - `pointer-fine`
 *   - `pointer-none`
 *   - `hover-hover`
 *   - `hover-none`
 *
 * @see https://css-tricks.com/touch-devices-not-judged-size/
 */
const pointingVariantsPlugin = plugin(
	// @ts-expect-error PluginAPI is not typed correctly, missing postcss
	(api: PluginAPI & { postcss: Postcss }) => {
		// @ts-expect-error addVariant is not typed correctly
		api.addVariant("pointer-coarse", ({ container, separator }: { container: Root; separator: string }) => {
			const pointerCoarse = api.postcss.atRule({ name: "media", params: "(pointer: coarse)" });
			pointerCoarse.append(container.nodes);
			container.append(pointerCoarse);
			pointerCoarse.walkRules((rule) => {
				rule.selector = `.${api.e(`pointer-coarse${separator}${rule.selector.slice(1).replace(/\\/g, "")}`)}`;
			});
		});

		// @ts-expect-error addVariant is not typed correctly
		api.addVariant("pointer-fine", ({ container, separator }: { container: Root; separator: string }) => {
			const pointerFine = api.postcss.atRule({ name: "media", params: "(pointer: fine)" });
			pointerFine.append(container.nodes);
			container.append(pointerFine);
			pointerFine.walkRules((rule) => {
				rule.selector = `.${api.e(`pointer-fine${separator}${rule.selector.slice(1).replace(/\\/g, "")}`)}`;
			});
		});

		// @ts-expect-error addVariant is not typed correctly
		api.addVariant("pointer-none", ({ container, separator }: { container: Root; separator: string }) => {
			const pointerNone = api.postcss.atRule({ name: "media", params: "(pointer: none)" });
			pointerNone.append(container.nodes);
			container.append(pointerNone);
			pointerNone.walkRules((rule) => {
				rule.selector = `.${api.e(`pointer-none${separator}${rule.selector.slice(1).replace(/\\/g, "")}`)}`;
			});
		});

		// @ts-expect-error addVariant is not typed correctly
		api.addVariant("hover-hover", ({ container, separator }: { container: Root; separator: string }) => {
			const hoverHover = api.postcss.atRule({ name: "media", params: "(hover: hover)" });
			hoverHover.append(container.nodes);
			container.append(hoverHover);
			hoverHover.walkRules((rule) => {
				rule.selector = `.${api.e(`hover-hover${separator}${rule.selector.slice(1).replace(/\\/g, "")}`)}`;
			});
		});

		// @ts-expect-error addVariant is not typed correctly
		api.addVariant("hover-none", ({ container, separator }: { container: Root; separator: string }) => {
			const hoverNone = api.postcss.atRule({ name: "media", params: "(hover: none)" });
			hoverNone.append(container.nodes);
			container.append(hoverNone);
			hoverNone.walkRules((rule) => {
				rule.selector = `.${api.e(`hover-none${separator}${rule.selector.slice(1).replace(/\\/g, "")}`)}`;
			});
		});
	},
);

export { pointingVariantsPlugin };
