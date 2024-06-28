import plugin from "tailwindcss/plugin";
import type { PluginAPI } from "tailwindcss/types/config";
import { filterDefault } from "./shared";

/**
 * This plugin adds animation-duration utilities to TailwindCSS
 * These are similar to the transition-duration utilities but for animations instead of transitions.
 * It also supports arbitrary values, e.g. `animation-duration-[15s]`.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration
 * @see https://tailwindcss.com/docs/transition-duration
 */
const animationDurationPlugin = plugin((api: PluginAPI) => {
	api.matchUtilities(
		{ "animation-duration": (value) => ({ animationDuration: value }) },
		{ values: filterDefault(api.theme("animationDuration")) },
	);
});

export { animationDurationPlugin };
