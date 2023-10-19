import { HTMLAttributes, createContext, forwardRef, useContext, useEffect, useState } from "react";
import type { WithStyleProps } from "@/types/with-style-props";
import { cx } from "@/lib/cx";
import { SupportedLanguage } from "./utils/supported-languages";
import { formatLanguageClassName } from "./utils/format-language-classname";
import { LineRange, resolveLineNumbers } from "./utils/line-numbers";
import { Slot } from "@radix-ui/react-slot";

/**
 * TODO(cody):
 * - implement syntax highlighting w/ prism or highlightjs (spike on both, figure out which is easier/less bs)
 * - fix overflow-y-auto on CodeBlockBody
 * - fix line numbers, maybe try grid instead of :before and flex?
 * - fix line hightlighting
 * - fix line wrapping? horizontal scrolling has problems w/ line highlighting :(
 */

type CodeBlockContextType = (newCopyText: string) => void;

const CodeBlockContext = createContext<CodeBlockContextType>(() => {});

const CodeBlockCopyContext = createContext<string>("");

const CodeBlock = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
	const [copyText, setCopyText] = useState("");

	return (
		<CodeBlockContext.Provider value={setCopyText}>
			<CodeBlockCopyContext.Provider value={copyText}>
				<div
					className={cx("overflow-hidden rounded-md border border-gray-200 bg-gray-50", className)}
					ref={ref}
					{...props}
				/>
			</CodeBlockCopyContext.Provider>
		</CodeBlockContext.Provider>
	);
});
CodeBlock.displayName = "CodeBlock";

const CodeBlockBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
	<div className={cx("relative h-full", className)} ref={ref} {...props} />
));
CodeBlockBody.displayName = "CodeBlockBody";

type CodeBlockContentProps = WithStyleProps & {
	children?: string | undefined;
	highlightLines?: (LineRange | number)[];
	language?: SupportedLanguage;
	showLineNumbers?: boolean;
};

const CodeBlockContent = forwardRef<HTMLPreElement, CodeBlockContentProps>((props, ref) => {
	const { children, className, /* highlightLines, */ language = "sh", /* showLineNumbers = false, */ style } = props;
	const highlightLines = undefined; // debug only, punting for now
	const showLineNumbers = false; // debug only, punting for now

	const setCopyText = useContext(CodeBlockContext);

	// trim any leading and trailing whitespace/empty lines
	const trimmedCode = children?.trim() ?? "";
	const lines = trimmedCode.split("\n");

	const highlightLineNumberSet = resolveLineNumbers(...(highlightLines ?? []));

	useEffect(() => {
		setCopyText(trimmedCode);
	}, [trimmedCode, setCopyText]);

	return (
		<pre
			className={cx(
				formatLanguageClassName(language),
				"block h-full overflow-auto py-4 font-mono text-sm leading-normal",
				className,
			)}
			data-lang={language}
			data-line-numbers={showLineNumbers || undefined}
			ref={ref}
			style={style}
		>
			{/* TODO(cody): maybe retry this, but use grid instead? */}
			{/* {showLineNumbers && (
				<div aria-hidden className="pointer-events-none flex-shrink-0 select-none text-right">
					{lines.map((line, index) => {
						const lineNumber = index + 1;
						const shouldHighlight = highlightLineNumberSet.has(lineNumber);

						return (
							<span
								key={line + lineNumber}
								className={cx(
									"block border-r px-2 text-gray-400",
									shouldHighlight && "border-l-4 border-l-brand-primary-200 bg-brand-primary-100 ",
								)}
							>
								{lineNumber}
							</span>
						);
					})}
				</div>
			)} */}
			<code className="">
				{lines.map((line, index) => {
					const lineNumber = index + 1;
					const shouldHighlight = highlightLineNumberSet.has(lineNumber);

					return (
						<span
							key={line + lineNumber}
							data-line-number={showLineNumbers ? lineNumber : undefined}
							data-highlight={shouldHighlight || undefined}
							className={cx(
								"relative block whitespace-pre-wrap before:sticky before:left-0 before:inline-block before:border-brand-primary-200 before:bg-gray-50 before:text-right before:text-gray-400",
								showLineNumbers ? "before:w-14 before:pr-4 before:content-[attr(data-line-number)]" : "px-4",
								shouldHighlight && "bg-brand-primary-100 before:border-l-4 before:bg-brand-primary-100",
							)}
						>
							{line === "" ? "\n" : line}
						</span>
					);
				})}
			</code>
		</pre>
	);
});
CodeBlockContent.displayName = "CodeBlockContent";

const CodeBlockHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
	<div
		className={cx(
			"flex-shrink-0 border-b border-gray-200 bg-gray-100 px-4 py-2 font-mono text-base text-gray-700",
			className,
		)}
		ref={ref}
		{...props}
	/>
));
CodeBlockHeader.displayName = "CodeBlockHeader";

const CodeBlockTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }>(
	({ asChild = false, className, ...props }, ref) => {
		const Comp = asChild ? Slot : "h3";
		return <Comp ref={ref} className={cx("font-mono text-[13px] font-normal leading-[22px]", className)} {...props} />;
	},
);
CodeBlockTitle.displayName = "CodeBlockTitle";

type CodeBlockCopyButtonProps = WithStyleProps & {
	onCopy?: (value: string) => void;
	onCopyError?: (error: unknown) => void;
};

const CodeBlockCopyButton = forwardRef<HTMLButtonElement, CodeBlockCopyButtonProps>(
	({ className, onCopy, onCopyError, style }, ref) => {
		const copyText = useContext(CodeBlockCopyContext);
		const [, setCopied] = useState(false); // todo: useme

		return (
			<button
				type="button"
				className={cx("absolute right-2 top-2 z-50 p-2", className)}
				ref={ref}
				style={style}
				onClick={() => {
					window.navigator.clipboard
						.writeText(copyText)
						.then(() => {
							setCopied(true);
							onCopy?.(copyText);
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

export { CodeBlock, CodeBlockBody, CodeBlockContent, CodeBlockCopyButton, CodeBlockHeader, CodeBlockTitle };

const CopyIcon = ({ className, style }: WithStyleProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth="{1.5}"
		stroke="currentColor"
		className={cx("h-6 w-6", className)}
		style={style}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M8.75 7.75v-3.5a1.5 1.5 0 0 1 1.5-1.5h8.5a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5h-3.5m-10 5h8.5a1.5 1.5 0 0 0 1.5-1.5V9.25a1.5 1.5 0 0 0-1.5-1.5h-8.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5Z"
		/>
	</svg>
);
