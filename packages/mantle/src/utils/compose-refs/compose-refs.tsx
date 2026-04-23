import type { MutableRefObject, Ref } from "react";
import { useCallback, useRef } from "react";

type PossibleRef<T> = Ref<T> | undefined;

/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */
function composeRefs<T>(...refs: PossibleRef<T>[]) {
	return (node: T | null) => {
		for (const ref of refs) {
			if (typeof ref === "function") {
				ref(node);
			} else if (ref != null) {
				(ref as MutableRefObject<T | null>).current = node;
			}
		}
	};
}

/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */
function useComposedRefs<T>(...refs: PossibleRef<T>[]) {
	const latestRefs = useRef(refs);
	latestRefs.current = refs;
	return useCallback((node: T | null) => {
		for (const ref of latestRefs.current) {
			if (typeof ref === "function") {
				ref(node);
			} else if (ref != null) {
				(ref as MutableRefObject<T | null>).current = node;
			}
		}
	}, []);
}

export { composeRefs, useComposedRefs };
