import { parseBooleanish } from "../../types/booleanish.js";
import { type Indentation, isIndentation } from "./indentation.js";

const modes = [
	//,
	"cli",
	"file",
	"traffic-policy",
] as const;
type Mode = (typeof modes)[number];

type MetaInput = {
	collapsible?: boolean | undefined;
	disableCopy?: boolean | undefined;
	indentation?: Indentation | undefined;
	mode?: Mode | undefined;
	title?: string | undefined;
};

type Meta = {
	collapsible: boolean;
	disableCopy: boolean;
	indentation?: Indentation | undefined;
	mode?: Mode | undefined;
	title?: string | undefined;
};

const defaultMeta = {
	collapsible: false,
	disableCopy: false,
	indentation: undefined,
	mode: undefined,
	title: undefined,
} as const satisfies Meta;

type DefaultMeta = typeof defaultMeta;

/**
 * Parses a markdown code block (```) metastring into a meta object.
 * Defaults to DefaultMeta if no metastring given or if metastring is invalid.
 * Useful for parsing the metastring from a markdown code block to pass into the
 * CodeBlock components as props.
 */
function parseMetastring(input: string | undefined): Meta {
	const metastring = input?.trim() ?? "";
	if (!metastring) {
		return defaultMeta;
	}

	const metaJson = tokenizeMetastring(metastring).reduce<Record<string, unknown>>((acc, token) => {
		const [key, value] = token.split("=");
		if (!key) {
			return acc;
		}
		const normalizedValue = normalizeValue(value);
		acc[key] = normalizedValue ?? true;
		return acc;
	}, {});

	try {
		const parsed = parseMetaJson(metaJson);

		// return the parsed meta object, with default values filled in
		return {
			...defaultMeta,
			...parsed,
		};
		// oxlint-disable-next-line no-unused-vars
	} catch (_) {
		return defaultMeta;
	}
}

export {
	//,
	defaultMeta,
	parseMetastring,
};
export type {
	//,
	Meta,
	MetaInput,
	Mode,
	DefaultMeta,
};

/**
 * Remove leading and trailing `"` quotes around value
 * @private
 *
 * @example
 * ```tsx
 * const normalized = normalizeValue('"hello world"');
 * // Returns: "hello world"
 *
 * const unchanged = normalizeValue('hello');
 * // Returns: "hello"
 * ```
 */
export function normalizeValue(value: string | undefined) {
	return value?.trim().replace(/^"(.*)"$/, "$1");
}

/**
 * Splits a metastring into an array of tokens that can be parsed into a meta object.
 * Should allow for quotes and spaces in tokens
 * @private
 *
 * @example
 * ```tsx
 * const tokens = tokenizeMetastring('title="My File" collapsible mode=cli');
 * // Returns: ['title="My File"', 'collapsible', 'mode=cli']
 *
 * const simpleTokens = tokenizeMetastring('collapsible disableCopy');
 * // Returns: ['collapsible', 'disableCopy']
 * ```
 */
export function tokenizeMetastring(value: string | undefined): string[] {
	const input = value?.trim() ?? "";
	const result: string[] = [];

	let currentString = "";
	let inQuotes = false;

	for (const char of input) {
		if (char === " " && !inQuotes) {
			if (currentString) {
				result.push(currentString);
				currentString = "";
			}
		} else if (char === '"') {
			inQuotes = !inQuotes;
			currentString += char;
		} else {
			currentString += char;
		}
	}

	if (currentString) {
		result.push(currentString);
	}

	return result;
}

/**
 * Type Predicate: checks if the given value is a valid mode.
 * @private
 */
function isMode(input: unknown): input is Mode {
	return modes.includes(input as Mode);
}

/**
 * Parses a meta JSON object into a Meta object.
 * @private
 */
function parseMetaJson(input: Record<string, unknown>): Meta {
	const {
		collapsible = defaultMeta.collapsible,
		disableCopy = defaultMeta.disableCopy,
		indentation = defaultMeta.indentation,
		mode = defaultMeta.mode,
		title = defaultMeta.title,
	} = input;

	return {
		collapsible:
			typeof collapsible === "string" || typeof collapsible === "boolean"
				? parseBooleanish(collapsible)
				: defaultMeta.collapsible,
		disableCopy:
			typeof disableCopy === "string" || typeof disableCopy === "boolean"
				? parseBooleanish(disableCopy)
				: defaultMeta.disableCopy,
		indentation: isIndentation(indentation) ? indentation : defaultMeta.indentation,
		mode: isMode(mode) ? mode : defaultMeta.mode,
		title: typeof title === "string" ? title.trim() : defaultMeta.title,
	};
}
