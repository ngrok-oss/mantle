import { useCallback, useRef } from "react";
import type { RefObject } from "react";
import { useIsomorphicLayoutEffect } from "../../hooks/use-isomorphic-layout-effect.js";
import type { ContainerSize } from "./use-container-size.js";

/**
 * Manages a DPR-aware canvas rendering context.
 *
 * On each size change, this hook:
 * 1. Sets the canvas buffer dimensions to account for `devicePixelRatio`.
 * 2. Applies a DPR transform so subsequent drawing uses CSS pixel coordinates.
 * 3. Clears the canvas.
 *
 * The returned `getContext` function lazily retrieves the 2D context
 * and is safe to call in draw functions. Returns `null` during SSR or
 * if the canvas element is not mounted.
 *
 * @param canvasRef - A ref to the canvas element.
 * @param size - The container size in CSS pixels.
 * @returns A function that returns the prepared `CanvasRenderingContext2D` or `null`.
 */
function useCanvasContext(
	canvasRef: RefObject<HTMLCanvasElement | null>,
	size: ContainerSize,
): () => CanvasRenderingContext2D | null {
	const contextRef = useRef<CanvasRenderingContext2D | null>(null);

	useIsomorphicLayoutEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas || size.width === 0 || size.height === 0) {
			contextRef.current = null;
			return;
		}

		const context = canvas.getContext("2d");
		if (!context) {
			contextRef.current = null;
			return;
		}

		const dpr = window.devicePixelRatio || 1;
		canvas.width = Math.round(size.width * dpr);
		canvas.height = Math.round(size.height * dpr);
		context.setTransform(dpr, 0, 0, dpr, 0, 0);

		contextRef.current = context;
	}, [canvasRef, size.width, size.height]);

	const getContext = useCallback(() => contextRef.current, []);

	return getContext;
}

export { useCanvasContext };
