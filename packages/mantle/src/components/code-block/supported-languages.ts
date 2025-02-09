/**
 * List of supported languages for syntax highlighting.
 * @private
 */
export const supportedLanguages = [
	"bash",
	"cs",
	"csharp",
	"css",
	"dotnet",
	"go",
	"html",
	"java",
	"javascript",
	"js",
	"json",
	"jsx",
	"markup",
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
	"ts",
	"tsx",
	"txt",
	"typescript",
	"xml",
	"yaml",
	"yml",
] as const;

/**
 * Supported languages for syntax highlighting.
 */
type SupportedLanguage = (typeof supportedLanguages)[number];

/**
 * Parses a markdown code block (```) language class into a SupportedLanguage.
 * Defaults to "sh" if no supported language is found.
 */
function parseLanguage(
	value: `language-${string}` | `lang-${string}` | (string & {}) | undefined,
): SupportedLanguage {
	if (!value) {
		return "sh";
	}

	// remove leading "language-" and "lang-" prefixes
	// find first '-' and slice from there
	const maybeLanguage = value.trim().slice(value.indexOf("-") + 1);

	return isSupportedLanguage(maybeLanguage) ? maybeLanguage : "sh";
}

/**
 * Type Predicate: checks if an arbitrary value is a supported syntax highlighting language.
 */
const isSupportedLanguage = (value: unknown): value is SupportedLanguage => {
	return (
		typeof value === "string" &&
		supportedLanguages.includes(value as SupportedLanguage)
	);
};

/**
 * A class name for a language that Prism.js can understand.
 */
type LanguageClass = `language-${SupportedLanguage}`;

/**
 * Formats a language name into a class name that Prism.js can understand.
 * @default "language-sh"
 */
function formatLanguageClassName(
	language: SupportedLanguage | undefined = "sh",
) {
	const lang = language ?? "sh";
	const className: LanguageClass = `language-${lang}`;
	return className;
}

export { isSupportedLanguage, parseLanguage, formatLanguageClassName };
export type { SupportedLanguage };
