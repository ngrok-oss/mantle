import type { LineRange } from "./line-numbers.js";

function parseCodeBlockShowLineNumbers(value: unknown): boolean | undefined {
	if (typeof value === "boolean") {
		return value;
	}
	if (typeof value === "string") {
		if (value === "true") {
			return true;
		}
		if (value === "false") {
			return false;
		}
	}
	return undefined;
}

function parseCodeBlockLineNumberStart(value: unknown): number | undefined {
	if (typeof value === "number" && Number.isFinite(value) && value > 0) {
		return Math.floor(value);
	}
	if (typeof value === "string" && /^\d+$/.test(value)) {
		return Number.parseInt(value, 10);
	}
	return undefined;
}

function parseCodeBlockHighlightLines(value: unknown): (LineRange | number)[] | undefined {
	const parseSingle = (item: unknown): LineRange | number | undefined => {
		if (typeof item === "number") {
			return Number.isFinite(item) && item > 0 ? Math.floor(item) : undefined;
		}
		if (typeof item === "string") {
			const trimmed = item.trim();
			if (/^\d+$/.test(trimmed)) {
				return Number.parseInt(trimmed, 10);
			}
			if (/^\d+-\d+$/.test(trimmed)) {
				return trimmed as LineRange;
			}
		}
		return undefined;
	};

	if (typeof value === "string") {
		const parsed: (LineRange | number)[] = [];
		const segments = value.split(",");
		for (const segment of segments) {
			const maybe = parseSingle(segment);
			if (maybe != null) {
				parsed.push(maybe);
			}
		}
		return parsed.length > 0 ? parsed : undefined;
	}

	if (!Array.isArray(value)) {
		return undefined;
	}
	const parsed: (LineRange | number)[] = [];
	for (const item of value) {
		const maybe = parseSingle(item);
		if (maybe != null) {
			parsed.push(maybe);
		}
	}
	return parsed.length > 0 ? parsed : undefined;
}

export {
	//,
	parseCodeBlockHighlightLines,
	parseCodeBlockLineNumberStart,
	parseCodeBlockShowLineNumbers,
};
