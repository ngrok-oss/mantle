import plugin from "tailwindcss/plugin.js";
import type { PluginAPI } from "tailwindcss/types/config.js";
import { filterDefault, flattenObject } from "./shared.js";

/**
 * This plugin adds a stop svg utilities to TailwindCSS
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop#attributes
 */
const gradientStopPlugin = plugin((api: PluginAPI) => {
	api.matchUtilities(
		{ "stop-opacity": (value) => ({ "stop-opacity": value }) },
		{ values: filterDefault(api.theme("opacity")), respectImportant: true, respectPrefix: true },
	);

	api.matchUtilities(
		{ "stop-color": (value) => ({ "stop-color": value }) },
		{
			values: flattenObject(api.theme("colors")),
			respectImportant: true,
			respectPrefix: true,
			type: "color",
		},
	);
});

export { gradientStopPlugin };
