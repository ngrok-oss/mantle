import type { SupportedLanguage } from "./supported-languages.js";

const indentations = ["tabs", "spaces"] as const;
type Indentation = (typeof indentations)[number];
const INDENTATION_TABS = "tabs" satisfies Indentation;
const INDENTATION_SPACES = "spaces" satisfies Indentation;

/**
 * Languages that require or strongly prefer tabs
 */
const tabIndentedLanguages = [
	"cs",
	"csharp",
	"css",
	"go",
	"java",
	"javascript",
	"js",
	"jsx",
	"ts",
	"tsx",
	"typescript",
] as const satisfies SupportedLanguage[];

/**
 * Languages that require or strongly prefer spaces
 */
const spaceIndentedLanguages = [
	"bash",
	"html",
	"json",
	"plain",
	"plaintext",
	"py",
	"python",
	"rb",
	"ruby",
	"rust",
	"sh",
	"shell",
	"text",
	"txt",
	"xml",
	"yaml",
	"yml",
] as const satisfies SupportedLanguage[];

const tabIndentedLanguageSet = new Set<SupportedLanguage>(tabIndentedLanguages);
const spaceIndentedLanguageSet = new Set<SupportedLanguage>(spaceIndentedLanguages);

/**
 * Type Predicate: checks if the given value is a valid indentation type.
 */
function isIndentation(input: unknown): input is Indentation {
	return input === INDENTATION_TABS || input === INDENTATION_SPACES;
}

/**
 * Infers the indentation type based on the language and preferred indentation.
 *
 * @param language - The language to check.
 * @param preferredIndentation - The preferred indentation type (overrides what is detected).
 */
function inferIndentation(
	language: SupportedLanguage,
	preferredIndentation: Indentation | undefined,
) {
	// if the user has a preferred indentation, use that regardless of the language
	if (preferredIndentation) {
		return preferredIndentation;
	}

	if (tabIndentedLanguageSet.has(language)) {
		return "tabs";
	}

	if (spaceIndentedLanguageSet.has(language)) {
		return "spaces";
	}

	return "spaces";
}

export {
	//,
	indentations,
	inferIndentation,
	isIndentation,
};

export type {
	//,
	Indentation,
};
