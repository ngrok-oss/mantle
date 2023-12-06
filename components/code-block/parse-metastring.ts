// import type { SupportedLanguage } from "./supported-languages";
import { z } from "zod";

const modes = ["file", "cli"] as const;
export type Mode = (typeof modes)[number];

const metaSchema = z.object({
	collapsible: z.boolean().default(false),
	disableCopy: z.boolean().default(false),
	mode: z.enum(modes).optional(),
	title: z.string().trim().optional(),
});

export type MetaInput = z.input<typeof metaSchema>;

export type Meta = z.infer<typeof metaSchema>;

export const defaultMeta = {
	collapsible: false,
	disableCopy: false,
	mode: undefined,
	title: undefined,
} as const satisfies Meta;

export type DefaultMeta = typeof defaultMeta;

/**
 * Parses a markdown code block (```) metastring into a meta object.
 * Defaults to DefaultMeta if no metastring given or if metastring is invalid.
 * Useful for parsing the metastring from a markdown code block to pass into the
 * CodeBlock components as props.
 */
export function parseMetastring(value: string | undefined): Meta {
	const metastring = value?.trim() ?? "";
	if (!metastring) {
		return defaultMeta;
	}

	const metaJson = tokenizeMetastring(metastring).reduce(
		(acc, token) => {
			const [key, _value] = token.split("=");
			if (!key) {
				return acc;
			}
			const value = normalizeValue(_value);
			acc[key] = value ?? true;
			return acc;
		},
		{} as Record<string, unknown>,
	);

	try {
		const parsed = metaSchema.parse(metaJson);

		// return the parsed meta object, with default values filled in
		return {
			...defaultMeta,
			...parsed,
		};
	} catch (_) {
		return defaultMeta;
	}
}

/**
 * Remove leading and trailing `"` quotes around value
 * @private
 */
export function normalizeValue(value: string | undefined) {
	return value?.trim().replace(/^"(.*)"$/, "$1");
}

/**
 * Splits a metastring into an array of tokens that can be parsed into a meta object.
 * Should allow for quotes and spaces in tokens
 * @private
 */
export function tokenizeMetastring(value: string | undefined): string[] {
	const input = value?.trim() ?? "";
	const result: Array<string> = [];

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
		console.log({ currentString });
		result.push(currentString);
	}

	return result;
}
