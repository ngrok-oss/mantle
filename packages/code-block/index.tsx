import { ElementRef, HTMLAttributes, createContext, forwardRef, useContext, useEffect, useRef, useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import Prism from "prismjs";
import "prismjs/components/prism-bash";

import type { WithStyleProps } from "../types/with-style-props";
import { cx } from "../cx";
import { SupportedLanguage } from "./supported-languages";
import { formatLanguageClassName } from "./format-language-classname";
import { LineRange } from "./line-numbers";

/**
 * TODO(cody):
 * - implement syntax highlighting w/ prism or highlightjs (spike on both, figure out which is easier/less bs)
 * - fix overflow-y-auto on CodeBlockBody
 * - fix line numbers, maybe try grid instead of :before and flex?
 * - fix line hightlighting
 * - fix line wrapping? horizontal scrolling has problems w/ line highlighting :(
 * - actually use that `useState` var in CodeBlockCopyButton
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
					className={cx(
						"overflow-hidden rounded-md border border-gray-300 bg-gray-50 font-mono text-[0.8125rem]",
						className,
					)}
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
	const { children, className, language = "sh", style } = props;
	const innerPreRef = useRef<ElementRef<"pre">>();

	const setCopyText = useContext(CodeBlockContext);

	// trim any leading and trailing whitespace/empty lines
	const trimmedCode = children?.trim() ?? "";

	useEffect(() => {
		setCopyText(trimmedCode);
	}, [trimmedCode, setCopyText]);

	useEffect(() => {
		if (!innerPreRef.current) {
			return;
		}
		Prism.highlightElement(innerPreRef.current);
	}, [trimmedCode]);

	return (
		<pre
			className={cx(
				formatLanguageClassName(language),
				"scrollbar overflow-auto p-4 pr-16 firefox:after:mr-16 firefox:after:inline-block firefox:after:content-['']",
				className,
			)}
			data-lang={language}
			// data-line-numbers={showLineNumbers || undefined}
			ref={(node) => {
				innerPreRef.current = node ?? undefined;
				return ref;
			}}
			style={{ tabSize: 2, MozTabSize: 2, ...style }}
		>
			<code>{trimmedCode}</code>
		</pre>
	);
});
CodeBlockContent.displayName = "CodeBlockContent";

const CodeBlockHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
	<div
		className={cx("flex-shrink-0 border-b border-gray-300 bg-gray-100 px-4 py-2 text-gray-700", className)}
		ref={ref}
		{...props}
	/>
));
CodeBlockHeader.displayName = "CodeBlockHeader";

const CodeBlockTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }>(
	({ asChild = false, className, ...props }, ref) => {
		const Comp = asChild ? Slot : "h3";
		return <Comp ref={ref} className={cx("font-mono text-[0.8125rem] font-normal", className)} {...props} />;
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
				className={cx(
					"absolute right-3.5 top-2 z-50 rounded-sm border border-gray-300 bg-gray-50 p-1 hover:border-gray-400 hover:bg-gray-200 focus:bg-gray-200",
					className,
				)}
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
