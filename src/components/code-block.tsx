import { PropsWithChildren, createContext, forwardRef, useContext, useEffect, useState } from "react";
import type { WithStyleProps } from "../types/with-style-props";
import { cx } from "../lib/cx";

const supportedLanguages = [
	"cs",
	"csharp",
	"css",
	"dotnet",
	"go",
	"html",
	"java",
	"javascript",
	"js",
	"py",
	"python",
	"ruby",
	"rust",
	"sh",
	"ts",
	"typescript",
	"yaml",
	"yml",
] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

/**
 * Formats a language name into a class name that Prism.js can understand.
 * @default "language-sh"
 */
const formatLanguageClassName = (language: SupportedLanguage | undefined = "sh") => {
	const lang = language ?? "sh";
	return `language-${lang}`;
};

type CodeBlockContextType = (newCopyText: string) => void;

const CodeBlockContext = createContext<CodeBlockContextType>(() => {});

const CodeBlockCopyContext = createContext<string>("");

type CodeBlockProps = PropsWithChildren & WithStyleProps;

const CodeBlock = forwardRef<HTMLDivElement, CodeBlockProps>(({ className, children, style }, ref) => {
	const [copyText, setCopyText] = useState("");

	return (
		<CodeBlockContext.Provider value={setCopyText}>
			<CodeBlockCopyContext.Provider value={copyText}>
				<div className={cx("relative rounded-md border border-gray-200 bg-gray-50", className)} ref={ref} style={style}>
					{children}
				</div>
			</CodeBlockCopyContext.Provider>
		</CodeBlockContext.Provider>
	);
});
CodeBlock.displayName = "CodeBlock";

type CodeBlockBodyProps = WithStyleProps & PropsWithChildren;

const CodeBlockBody = forwardRef<HTMLDivElement, CodeBlockBodyProps>(({ className, children, style }, ref) => (
	<div className={cx("relative", className)} ref={ref} style={style}>
		<CodeBlockCopyButton className="absolute right-2 top-2" />
		{children}
	</div>
));
CodeBlockBody.displayName = "CodeBlockBody";

type LineRange = `${number}-${number}`;

type CodeBlockContentProps = WithStyleProps & {
	children?: string | undefined;
	highlightLines?: (LineRange | number)[];
	language?: SupportedLanguage;
	showLineNumbers?: boolean;
};

const CodeBlockContent = forwardRef<HTMLPreElement, CodeBlockContentProps>(
	({ children, className, highlightLines, language, showLineNumbers, style }, ref) => {
		const setCopyText = useContext(CodeBlockContext);

		// trim any leading and trailing whitespace/empty lines
		const trimmedCode = children?.trim() ?? "";
		const lines = trimmedCode.split("\n");

		const highlightLineNumberSet = resolveHighlightedLineNumbers(...(highlightLines ?? []));

		useEffect(() => {
			setCopyText(trimmedCode);
		}, [trimmedCode, setCopyText]);

		return (
			<pre className={cx(formatLanguageClassName(language), "flex py-4 font-mono", className)} ref={ref} style={style}>
				{showLineNumbers && (
					<div aria-hidden className="pointer-events-none flex-shrink-0 select-none text-right">
						{lines.map((line, index) => {
							const lineNumber = index + 1;
							const shouldHighlight = highlightLineNumberSet.has(lineNumber);

							return (
								<span
									key={line + lineNumber}
									className={cx(
										"block border-r px-2 text-gray-400",
										shouldHighlight && "border-l-4 border-l-blue-200 bg-blue-100 text-gray-600",
									)}
								>
									{lineNumber}
								</span>
							);
						})}
					</div>
				)}
				<code className="block min-w-0 flex-1">
					{lines.map((line, index) => {
						const lineNumber = index + 1;
						const shouldHighlight = highlightLineNumberSet.has(lineNumber);

						return (
							<span
								key={line + lineNumber}
								data-line-number={lineNumber}
								data-highlight={shouldHighlight || undefined}
								className={cx("block px-4", shouldHighlight && "bg-blue-100")}
								ref={ref}
								style={style}
							>
								{line === "" ? "\n" : line}
							</span>
						);
					})}
				</code>
			</pre>
		);
	},
);
CodeBlockContent.displayName = "CodeBlockContent";

const isPositiveLineNumber = (n: number | undefined): n is number =>
	n != null && !Number.isNaN(n) && n > 0 && Number.isFinite(n);

/**
 * Resolves a list of line ranges and numbers into a unique list of line numbers as a set.
 */
export function resolveHighlightedLineNumbers(...highlightLines: (LineRange | number)[]): Set<number> {
	const lineNumberSet = new Set<number>();

	if (!highlightLines) {
		return lineNumberSet;
	}

	for (const item of highlightLines) {
		if (typeof item === "number") {
			if (!isPositiveLineNumber(item)) {
				continue;
			}
			// only support integer line numbers
			const int = Math.floor(item);
			lineNumberSet.add(int);
		} else {
			let [start, end] = item.split("-").map((n) => Number.parseInt(n, 10));

			// ignore invalid ranges that don't contain valid line numbers
			if (!isPositiveLineNumber(start) || !isPositiveLineNumber(end)) {
				continue;
			}

			// swap start and end if they are backwards
			if (start > end) {
				[start, end] = [end, start];
			}

			// add all line numbers in the range, inclusive
			for (let i = start; i <= end; i++) {
				const int = Math.floor(i);
				lineNumberSet.add(int);
			}
		}
	}

	return lineNumberSet;
}

const CodeBlockHeader = forwardRef<HTMLDivElement, PropsWithChildren & WithStyleProps>(
	({ children, className, style }, ref) => (
		<div
			className={cx("border-bottom border-gray-300 bg-gray-100 px-4 py-2 font-mono text-base text-gray-700", className)}
			ref={ref}
			style={style}
		>
			{children}
		</div>
	),
);
CodeBlockHeader.displayName = "CodeBlockHeader";

type CodeBlockCopyButtonProps = WithStyleProps & {
	onCopy?: (value: string) => void;
	onCopyError?: (error: unknown) => void;
};

const CodeBlockCopyButton = forwardRef<HTMLButtonElement, CodeBlockCopyButtonProps>(
	({ className, onCopy, onCopyError, style }, ref) => {
		const ctx = useContext(CodeBlockCopyContext);
		const [, setCopied] = useState(false);

		return (
			<button
				type="button"
				className={cx("p-2", className)}
				ref={ref}
				style={style}
				onClick={() => {
					window.navigator.clipboard
						.writeText(ctx)
						.then(() => {
							setCopied(true);
							onCopy?.(ctx);
							setTimeout(() => {
								setCopied(false);
							}, 1000);
						})
						.catch((error) => {
							onCopyError?.(error);
						});
				}}
			>
				<CopyIcon />
			</button>
		);
	},
);
CodeBlockCopyButton.displayName = "CodeBlockCopyButton";

export function innerCode(templateLiteralList: string[]) {
	return templateLiteralList.join("\n");
}

export { CodeBlock, CodeBlockBody, CodeBlockContent, CodeBlockCopyButton, CodeBlockHeader };

const CopyIcon = ({ className, style }: WithStyleProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cx("inline leading-none", className)}
		height="1em"
		role="img"
		width="1em"
		fill="none"
		viewBox="0 0 16 19"
		style={style}
	>
		<rect x="0.75" y="4.75" width="10.5" height="13.5" rx="1.25" stroke="currentColor" strokeWidth="1.5" />
		<path
			d="M4 5.5V2C4 1.44772 4.44772 1 5 1H14C14.5523 1 15 1.44772 15 2V13C15 13.5523 14.5523 14 14 14H10.5"
			stroke="currentColor"
			strokeWidth="1.5"
		/>
	</svg>
);
