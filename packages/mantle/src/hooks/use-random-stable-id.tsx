import { useMemo } from "react";

/**
 * React hook that returns a random, stable id (e.g. `"mantle-a3f9k7q"`)
 * suitable for DOM `id` attributes and `aria-*` references.
 *
 * Unlike React's built-in `useId`, the generated suffix does not contain
 * special characters (`:`). The default id is safe to use directly in CSS
 * selectors and `querySelector` calls; if you provide a custom `prefix`,
 * keep it selector-safe or escape the final id with `CSS.escape()` before
 * querying. The id is generated once for the lifetime of the component and
 * is stable across re-renders, but a new value is produced when `prefix`
 * changes.
 *
 * @param prefix - Optional string prepended to the generated suffix.
 *   Whitespace-only or empty values fall back to `"mantle"`. Use a
 *   selector-safe prefix if you plan to reference the id in CSS selectors
 *   without escaping. Defaults to `"mantle"`.
 * @returns A string of the form `"<prefix>-<7-char-random>"`.
 *
 * @example
 * // Associate a label with a custom input
 * const id = useRandomStableId("email-input");
 *
 * return (
 *   <>
 *     <label htmlFor={id}>Email</label>
 *     <input id={id} type="email" />
 *   </>
 * );
 *
 * @example
 * // Use as an aria-controls reference
 * const panelId = useRandomStableId("panel");
 *
 * return (
 *   <>
 *     <button aria-controls={panelId}>Toggle</button>
 *     <div id={panelId}>Panel contents</div>
 *   </>
 * );
 */
const useRandomStableId = (prefix = "mantle") => useMemo(() => randomStableId(prefix), [prefix]);

export {
	//,
	useRandomStableId,
};

function randomStableId(prefix = "mantle") {
	const safePrefix = prefix.trim() || "mantle";
	return [safePrefix, randomPostfix()].join("-");
}

function randomPostfix() {
	return Math.random().toString(36).substring(2, 9);
}
