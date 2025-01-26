import { z } from "zod";

const modes = [
	//,
	"cli",
	"file",
	"traffic-policy",
] as const;
type Mode = (typeof modes)[number];

const metaSchema = z.object({
	collapsible: z.boolean().default(false),
	disableCopy: z.boolean().default(false),
	mode: z.enum(modes).optional(),
	title: z.string().trim().optional(),
});

type MetaInput = z.input<typeof metaSchema>;

type Meta = z.infer<typeof metaSchema>;

const defaultMeta = {
	collapsible: false,
	disableCopy: false,
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
function parseMetastring(value: string | undefined): Meta {
	const metastring = value?.trim() ?? "";
	if (!metastring) {
		return defaultMeta;
	}

	const metaJson = tokenizeMetastring(metastring).reduce<Record<string, unknown>>((acc, token) => {
		const [key, _value] = token.split("=");
		if (!key) {
			return acc;
		}
		const value = normalizeValue(_value);
		acc[key] = value ?? true;
		return acc;
	}, {});

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
