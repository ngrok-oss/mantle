import { useMemo } from "react";

/**
 * Hook to generate a random, stable id.
 * This is similar to `useId`, but generates a stable id client side which can also
 * be used for css selectors and element ids.
 */
const useRandomStableId = (prefix: string = "mantle") => useMemo(() => randomStableId(prefix), [prefix]);

export {
	//,
	useRandomStableId,
};

function randomStableId(prefix: string = "mantle") {
	const _prefix = prefix.trim() || "mantle";
	return [_prefix, randomPostfix()].join("-");
}

function randomPostfix() {
	return Math.random().toString(36).substring(2, 9);
}
