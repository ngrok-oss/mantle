import { useCallback, useEffect, useRef } from "react";

/**
 * Provides a coalesced `requestAnimationFrame` draw scheduler.
 *
 * When `scheduleDraw` is called multiple times before the next animation frame,
 * only one draw actually executes. This prevents redundant redraws when
 * multiple state changes happen in the same tick (e.g., data + theme change).
 *
 * The draw function reference is always up-to-date — it reads the latest
 * closure values without requiring the consumer to manage dependencies.
 *
 * @param drawFn - The draw function to schedule. Called once per animation frame.
 * @returns A stable `scheduleDraw` function that can be called freely.
 *
 * @example
 * ```tsx
 * const scheduleDraw = useScheduledDraw(() => {
 *   const ctx = mainCanvasRef.current?.getContext("2d");
 *   if (!ctx) return;
 *   // draw...
 * });
 *
 * useEffect(() => {
 *   scheduleDraw();
 * }, [data, size, theme]);
 * ```
 */
function useScheduledDraw(drawFn: () => void): () => void {
	const frameRef = useRef<number | null>(null);
	const drawFnRef = useRef(drawFn);

	// Keep the draw function ref up-to-date without triggering re-renders
	drawFnRef.current = drawFn;

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			if (frameRef.current !== null) {
				cancelAnimationFrame(frameRef.current);
				frameRef.current = null;
			}
		};
	}, []);

	const scheduleDraw = useCallback(() => {
		if (frameRef.current !== null) {
			return;
		}

		frameRef.current = requestAnimationFrame(() => {
			frameRef.current = null;
			drawFnRef.current();
		});
	}, []);

	return scheduleDraw;
}

export { useScheduledDraw };
