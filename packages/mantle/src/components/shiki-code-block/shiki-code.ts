import type { SupportedLanguage } from "../code-block/supported-languages.js";
import type { LineRange } from "../code-block/line-numbers.js";
import type { Indentation } from "../code-block/indentation.js";

const mantleCodeBlockValueBrand: unique symbol = Symbol("MantleCodeBlockValue");

/**
 * The value produced by `mantleCode()`. Contains pre-rendered Shiki HTML (injected
 * by the Vite plugin at build time) and the original code string for the copy button.
 *
 * `~preHtml` is required at render time. Runtime syntax highlighting is intentionally
 * unsupported; only placeholder substitution for interpolated values is performed.
 */
type MantleCodeBlockValue = {
	/**
	 * Nominal type brand to prevent accidental use of plain objects.
	 */
	[mantleCodeBlockValueBrand]: true;
	/**
	 * The language used for syntax highlighting.
	 */
	language: SupportedLanguage;
	/**
	 * The original code string (used by the copy button).
	 */
	code: string;
	/**
	 * Fully pre-rendered Shiki HTML injected by the Vite plugin or server highlighter.
	 * This must be present for rendering.
	 */
	"~preHtml"?: string | undefined;
	/**
	 * Runtime values used to replace `SHIKI_VAL_N` placeholders in `~preHtml`.
	 * This enables interpolated template expressions while preserving build-time highlighting.
	 */
	"~preVals"?: unknown[] | undefined;
	/**
	 * Optional default for line-number rendering when this value is displayed.
	 */
	"~showLineNumbers"?: boolean | undefined;
	/**
	 * Optional default highlighted line numbers/ranges when this value is displayed.
	 */
	"~highlightLines"?: (LineRange | number)[] | undefined;
	/**
	 * Optional default start line number when line numbers are displayed.
	 * @default 1
	 */
	"~lineNumberStart"?: number | undefined;
};

type ReplacePrefix<T, OldPrefix extends string, NewPrefix extends string> = {
	[K in keyof T as K extends `${OldPrefix}${infer Rest}` ? `${NewPrefix}${Rest}` : K]: T[K];
};

type MantleCodeBlockValueInput = ReplacePrefix<
	Omit<MantleCodeBlockValue, typeof mantleCodeBlockValueBrand>,
	"~",
	""
>;

type MantleCodeOptions = {
	highlightLines?: (LineRange | number)[] | undefined;
	indentation?: Indentation | undefined;
	lineNumberStart?: number | undefined;
	showLineNumbers?: boolean | undefined;
};

function createMantleCodeBlockValue({
	preHtml,
	preVals,
	highlightLines,
	lineNumberStart,
	showLineNumbers,
	code,
	language,
}: MantleCodeBlockValueInput): MantleCodeBlockValue {
	return {
		[mantleCodeBlockValueBrand]: true,
		language,
		code,
		"~preHtml": preHtml,
		"~preVals": preVals,
		"~highlightLines": highlightLines,
		"~lineNumberStart": lineNumberStart,
		"~showLineNumbers": showLineNumbers,
	};
}

/**
 * Tagged template literal for Shiki syntax highlighting.
 *
 * Returns a `MantleCodeBlockValue` that `ShikiCodeBlock.Code` renders.
 * The Vite transform plugin rewrites calls to this function at build time,
 * inlining pre-rendered Shiki HTML so that no highlighting work happens in the browser.
 * Configure it via `mantleCodeBlockPlugins()` in `vite.config.ts`.
 *
 * Interpolated template expressions are supported via placeholder substitution.
 *
 * @example
 * ```tsx
 * // Static string
 * mantleCode("typescript")`const x: string = "hello";`
 * // Interpolated string
 * mantleCode("typescript")`const greeting = "Hello, ${name}!";`
 * ```
 */
function buildCodeFromTemplate(strings: TemplateStringsArray, values: unknown[]): string {
	let code = "";
	for (let index = 0; index < strings.length; index += 1) {
		code += strings[index] ?? "";
		if (index < values.length) {
			code += String(values[index]);
		}
	}
	return code;
}

function mantleCode(
	language: SupportedLanguage,
	options: MantleCodeOptions = {},
): (strings: TemplateStringsArray, ...values: unknown[]) => MantleCodeBlockValue {
	return (strings, ...values) => {
		const code = buildCodeFromTemplate(strings, values);

		return createMantleCodeBlockValue({
			language,
			code,
			preHtml: undefined,
			preVals: values.length > 0 ? values : undefined,
			highlightLines: options.highlightLines,
			lineNumberStart: options.lineNumberStart,
			showLineNumbers: options.showLineNumbers,
		});
	};
}

export { mantleCode };
export { createMantleCodeBlockValue };
export type { MantleCodeBlockValue, MantleCodeOptions };
