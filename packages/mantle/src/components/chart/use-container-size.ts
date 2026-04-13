import { useEffect, useState } from "react";
import type { RefObject } from "react";

/** Container dimensions in CSS pixels. */
type ContainerSize = {
	width: number;
	height: number;
};

/**
 * Tracks the dimensions of a DOM element using `ResizeObserver`.
 *
 * Returns `{ width: 0, height: 0 }` on the server and until the first
 * observation completes. Updates are debounced via `requestAnimationFrame`
 * to avoid layout thrashing.
 *
 * @param containerRef - A ref to the DOM element to observe.
 * @returns The current `{ width, height }` in CSS pixels.
 *
 * @example
 * ```tsx
 * const containerRef = useRef<HTMLDivElement>(null);
 * const size = useContainerSize(containerRef);
 *
 * return (
 *   <div ref={containerRef} className="h-64">
 *     {size.width > 0 && <canvas ... />}
 *   </div>
 * );
 * ```
 */
function useContainerSize(containerRef: RefObject<HTMLElement | null>): ContainerSize {
	const [size, setSize] = useState<ContainerSize>({ width: 0, height: 0 });

	useEffect(() => {
		const element = containerRef.current;
		if (!element) {
			return;
		}

		let frameId: number | null = null;

		const observer = new ResizeObserver((entries) => {
			// Debounce via rAF to avoid layout thrashing
			if (frameId !== null) {
				cancelAnimationFrame(frameId);
			}

			frameId = requestAnimationFrame(() => {
				frameId = null;
				const entry = entries[0];
				if (!entry) {
					return;
				}

				const { width, height } = entry.contentRect;
				setSize((previous) => {
					if (previous.width === width && previous.height === height) {
						return previous;
					}
					return { width, height };
				});
			});
		});

		observer.observe(element);

		return () => {
			observer.disconnect();
			if (frameId !== null) {
				cancelAnimationFrame(frameId);
			}
		};
	}, [containerRef]);

	return size;
}

export { useContainerSize };
export type { ContainerSize };
