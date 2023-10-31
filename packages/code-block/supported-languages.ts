/**
 * List of supported languages for syntax highlighting.
 */
const supportedLanguages = [
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
	"py",
	"python",
	"rb",
	"ruby",
	"rust",
	"sh",
	"shell",
	"ts",
	"tsx",
	"typescript",
	"yaml",
	"yml",
] as const;

/**
 * Supported languages for syntax highlighting.
 */
export type SupportedLanguage = (typeof supportedLanguages)[number];

/**
 * Type Predicate: checks if an arbitrary value is a supported syntax highlighting language.
 */
export const isSupportedLanguage = (value: unknown): value is SupportedLanguage => {
	return typeof value === "string" && supportedLanguages.includes(value as SupportedLanguage);
};
