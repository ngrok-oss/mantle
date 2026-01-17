import { useEffect, useMemo, useRef } from "react";

/**
 * Returns a memoized callback that will always refer to the latest callback
 * passed to the hook.
 *
 * This is useful when you want to pass a callback which may or may not be
 * memoized (have a stable identity) to a child component that will be updated
 * without causing the child component to re-render.
 */
function useCallbackRef<T extends (...args: unknown[]) => unknown>(callback: T | undefined): T {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	});

	return useMemo(() => ((...args) => callbackRef.current?.(...args)) as T, []);
}

export {
	//,
	useCallbackRef,
};
