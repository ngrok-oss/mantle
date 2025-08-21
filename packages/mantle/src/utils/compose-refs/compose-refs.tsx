import type { Ref } from "react";
import { useCallback } from "react";

type PossibleRef<T> = Ref<T> | undefined | null;

/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */
function composeRefs<T>(...refs: PossibleRef<T>[]) {
	return (node: T) => {
		for (const ref of refs) {
			if (typeof ref === "function") {
				ref(node);
			} else if (ref != null) {
				(ref as React.MutableRefObject<T>).current = node;
			}
		}
	};
}

/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */
function useComposedRefs<T>(...refs: PossibleRef<T>[]) {
	return useCallback(() => composeRefs(...refs), [refs]);
}

export { composeRefs, useComposedRefs };
