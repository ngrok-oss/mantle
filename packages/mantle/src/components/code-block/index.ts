export {
	//,
	CodeBlock,
} from "./code-block.js";

export {
	//,
	escapeHtml,
} from "./escape-html.js";

export {
	//,
	fmtCode,
} from "./fmt-code.js";

export {
	//,
	inferIndentation,
	isIndentation,
} from "./indentation.js";

export type {
	//,
	Indentation,
} from "./indentation.js";

export {
	//,
	decorateHighlightedHtml,
} from "./decorate-highlighted-html.js";

export type {
	//,
	DecorateHighlightedHtmlInput,
} from "./decorate-highlighted-html.js";

export {
	//,
	hasMoreThanNLines,
} from "./has-more-than-n-lines.js";

export {
	//,
	normalizeIndentation,
} from "./normalize-indentation.js";

export {
	//,
	defaultMeta,
	parseMetastring,
} from "./parse-metastring.js";

export type {
	//,
	Meta,
	MetaInput,
	Mode,
	DefaultMeta,
} from "./parse-metastring.js";

export {
	//,
	parseCodeBlockHighlightLines,
	parseCodeBlockLineNumberStart,
	parseCodeBlockShowLineNumbers,
} from "./parse-line-options.js";

export {
	//,
	resolvePreRenderedCodeBlockProps,
} from "./resolve-pre-rendered-props.js";

export type {
	//,
	CodeBlockPreElementInput,
	ResolvedPreRenderedCodeBlockProps,
	ResolvePreRenderedCodeBlockPropsResult,
} from "./resolve-pre-rendered-props.js";

export type {
	//,
	LineRange,
} from "./line-numbers.js";

export {
	//,
	formatLanguageClassName,
	isSupportedLanguage,
	parseLanguage,
	supportedLanguages,
} from "./supported-languages.js";

export type {
	//,
	SupportedLanguage,
} from "./supported-languages.js";
