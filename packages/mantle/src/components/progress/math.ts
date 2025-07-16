/**
 * Clamp a value between a minimum and maximum value.
 */
function clamp(
	value: number,
	{ min, max }: { min: number; max: number },
): number {
	return Math.min(max, Math.max(min, value));
}

/**
 * Check if a value is a number.
 */
function isNumber(value: unknown): value is number {
	return typeof value === "number";
}

/**
 * Check if a value is a valid number within the range of 0 to `max`.
 */
function isValidValueNumber(value: unknown, max: number): value is number {
	return isNumber(value) && !Number.isNaN(value) && value <= max && value >= 0;
}

/**
 * Check if a value is a valid number greater than 0.
 */
function isValidMaxNumber(value: unknown): value is number {
	return isNumber(value) && !Number.isNaN(value) && value > 0;
}

export {
	//,
	clamp,
	isNumber,
	isValidValueNumber,
	isValidMaxNumber,
};
