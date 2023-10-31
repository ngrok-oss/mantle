import { SupportedLanguage } from "./supported-languages";

/**
 * A class name for a language that Prism.js can understand.
 */
type LanguageClass = `language-${SupportedLanguage}`;

/**
 * Formats a language name into a class name that Prism.js can understand.
 * @default "language-sh"
 */
export function formatLanguageClassName(language: SupportedLanguage | undefined = "sh") {
	const lang = language ?? "sh";
	const className: LanguageClass = `language-${lang}`;
	return className;
}
