const compactFormatter = new Intl.NumberFormat("en-US", {
	notation: "compact",
	maximumSignificantDigits: 3,
});

const scientificFormatter = new Intl.NumberFormat("en-US", {
	notation: "scientific",
	maximumSignificantDigits: 2,
});

/**
 * Formats a number using compact notation (e.g., `1.5B`, `42k`, `100`).
 * Useful for axis tick labels where space is limited.
 *
 * @param value - The number to format.
 * @returns A compact string representation.
 */
function formatCompact(value: number): string {
	return compactFormatter.format(value);
}

/**
 * Formats a number using scientific notation (e.g., `1.2E4`, `3.0E-2`).
 *
 * @param value - The number to format.
 * @returns A scientific notation string.
 */
function formatScientific(value: number): string {
	return scientificFormatter.format(value);
}

/**
 * Formats a number as a percentage with adaptive precision.
 * Automatically adjusts decimal places based on the value magnitude:
 * - Values >= 1%: 1 decimal place
 * - Values >= 0.01%: 2 decimal places
 * - Smaller values: 3 decimal places
 *
 * @param value - A number between 0 and 1 (e.g., 0.42 for 42%).
 * @returns A formatted percentage string (e.g., `"42.0%"`, `"0.05%"`).
 */
function formatPercent(value: number): string {
	const percent = value * 100;
	if (Math.abs(percent) >= 1) {
		return `${percent.toFixed(1)}%`;
	}
	if (Math.abs(percent) >= 0.01) {
		return `${percent.toFixed(2)}%`;
	}
	return `${percent.toFixed(3)}%`;
}

/**
 * Formats a number with adaptive decimal precision based on the visible range.
 * When the axis range is very small, more decimal places are shown to
 * differentiate tick labels.
 *
 * @param value - The number to format.
 * @param range - The total range of the axis (max - min).
 * @returns A formatted string with appropriate precision.
 */
function formatAdaptiveDecimal(value: number, range: number): string {
	if (range <= 0.01) {
		return value.toFixed(4);
	}
	if (range <= 0.1) {
		return value.toFixed(3);
	}
	if (range <= 1) {
		return value.toFixed(2);
	}
	if (range <= 100) {
		return value.toFixed(1);
	}
	return value.toFixed(0);
}

export { formatAdaptiveDecimal, formatCompact, formatPercent, formatScientific };
