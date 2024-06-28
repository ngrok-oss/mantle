import plugin from "tailwindcss/plugin";
import type { PluginAPI } from "tailwindcss/types/config";

/**
 * This plugin adds a stop svg utilities to TailwindCSS
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop#attributes
 */
const gradientStopPlugin = plugin((api: PluginAPI) => {
	api.addUtilities({
		".stop-current-color": {
			"stop-color": "currentColor",
		},
		".stop-opacity-0": {
			"stop-opacity": "0",
		},
		".stop-opacity-5": {
			"stop-opacity": "0.05",
		},
		".stop-opacity-10": {
			"stop-opacity": "0.1",
		},
		".stop-opacity-20": {
			"stop-opacity": "0.2",
		},
		".stop-opacity-25": {
			"stop-opacity": "0.25",
		},
		".stop-opacity-30": {
			"stop-opacity": "0.3",
		},
		".stop-opacity-35": {
			"stop-opacity": "0.35",
		},
		".stop-opacity-40": {
			"stop-opacity": "0.4",
		},
		".stop-opacity-45": {
			"stop-opacity": "0.45",
		},
		".stop-opacity-50": {
			"stop-opacity": "0.5",
		},
		".stop-opacity-55": {
			"stop-opacity": "0.55",
		},
		".stop-opacity-60": {
			"stop-opacity": "0.6",
		},
		".stop-opacity-65": {
			"stop-opacity": "0.65",
		},
		".stop-opacity-70": {
			"stop-opacity": "0.7",
		},
		".stop-opacity-75": {
			"stop-opacity": "0.75",
		},
		".stop-opacity-80": {
			"stop-opacity": "0.8",
		},
		".stop-opacity-85": {
			"stop-opacity": "0.85",
		},
		".stop-opacity-90": {
			"stop-opacity": "0.9",
		},
		".stop-opacity-95": {
			"stop-opacity": "0.95",
		},
		".stop-opacity-100": {
			"stop-opacity": "1",
		},
	});
});

export { gradientStopPlugin };
