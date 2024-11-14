import { useCallback, useEffect, useRef } from "react";
import { useCallbackRef } from "./use-callback-ref.js";

type Options = {
	/**
	 * The delay in milliseconds to wait before calling the callback.
	 */
	waitMs: number;
};

/**
 * Create a debounced version of a callback function.
 *
 * It allows you to delay the execution of a function until a certain period of
 * inactivity has passed (the `options.waitMs`), which can be useful for limiting rapid
 * invocations of a function (like in search inputs or button clicks)
 *
 * Note: The debounced callback will always refer to the latest callback passed
 * even without memoization, so it's stable and safe to use in dependency arrays.
 */
function useDebouncedCallback<T extends (...args: any[]) => any>(callbackFn: T, options: Options) {
	const stableCallbackFn = useCallbackRef(callbackFn);
	const debounceTimerRef = useRef(0);
	useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);

	return useCallback(
		(...args: Parameters<T>) => {
			window.clearTimeout(debounceTimerRef.current);
			debounceTimerRef.current = window.setTimeout(() => stableCallbackFn(...args), options.waitMs);
		},
		[stableCallbackFn, options.waitMs],
	);
}

export {
	//,
	useDebouncedCallback,
};
