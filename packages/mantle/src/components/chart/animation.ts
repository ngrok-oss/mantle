/**
 * Cubic ease-out: fast start, gradual deceleration.
 * Good for entry animations (line reveal, bar growth).
 */
function easeOutCubic(t: number): number {
	const inverted = 1 - t;
	return 1 - inverted * inverted * inverted;
}

/**
 * Cubic ease-in-out: smooth acceleration and deceleration.
 * Good for data update transitions.
 */
function easeInOutCubic(t: number): number {
	if (t < 0.5) {
		return 4 * t * t * t;
	}
	const inverted = -2 * t + 2;
	return 1 - (inverted * inverted * inverted) / 2;
}

/** Configuration for an animation instance. */
type AnimationConfig = {
	/** Duration in milliseconds. */
	duration: number;
	/** Easing function mapping [0, 1] → [0, 1]. */
	easing: (t: number) => number;
	/** Called on each animation frame with the eased progress (0 to 1). */
	onFrame: (progress: number) => void;
	/** Called when the animation completes. */
	onComplete?: () => void;
};

/** Handle returned by `startAnimation` for controlling the animation. */
type AnimationHandle = {
	/** Cancels the running animation. */
	cancel: () => void;
};

/**
 * Starts a `requestAnimationFrame`-driven animation.
 *
 * @param config - Animation configuration including duration, easing, and callbacks.
 * @returns A handle to cancel the animation.
 */
function startAnimation(config: AnimationConfig): AnimationHandle {
	const { duration, easing, onFrame, onComplete } = config;
	let frameId: number | null = null;
	let startTime: number | null = null;
	let cancelled = false;

	function tick(timestamp: number) {
		if (cancelled) {
			return;
		}

		if (startTime === null) {
			startTime = timestamp;
		}

		const elapsed = timestamp - startTime;
		const rawProgress = Math.min(elapsed / duration, 1);
		const easedProgress = easing(rawProgress);

		onFrame(easedProgress);

		if (rawProgress < 1) {
			frameId = requestAnimationFrame(tick);
		} else {
			frameId = null;
			onComplete?.();
		}
	}

	frameId = requestAnimationFrame(tick);

	return {
		cancel() {
			cancelled = true;
			if (frameId !== null) {
				cancelAnimationFrame(frameId);
				frameId = null;
			}
		},
	};
}

/**
 * Linearly interpolates between two values.
 *
 * @param start - Start value.
 * @param end - End value.
 * @param progress - Interpolation factor from 0 (start) to 1 (end).
 * @returns The interpolated value.
 */
function lerp(start: number, end: number, progress: number): number {
	return start + (end - start) * progress;
}

/**
 * Interpolates between two arrays of numbers element-by-element.
 *
 * @param startValues - Starting values.
 * @param endValues - Target values. Must be the same length as `startValues`.
 * @param progress - Interpolation factor from 0 to 1.
 * @returns A new array of interpolated values.
 */
function lerpArray(
	startValues: ReadonlyArray<number>,
	endValues: ReadonlyArray<number>,
	progress: number,
): number[] {
	return endValues.map((endValue, index) => {
		const startValue = startValues[index] ?? 0;
		return lerp(startValue, endValue, progress);
	});
}

export { easeInOutCubic, easeOutCubic, lerp, lerpArray, startAnimation };
export type { AnimationConfig, AnimationHandle };
