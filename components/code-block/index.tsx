import { Slot } from "@radix-ui/react-slot";
import Prism from "prismjs";
import {
	createContext,
	Dispatch,
	ElementRef,
	forwardRef,
	HTMLAttributes,
	SetStateAction,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-jsx.js";
import "prismjs/components/prism-tsx.js";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { cx } from "../cx";
import type { WithStyleProps } from "../types/with-style-props";
import { LineRange } from "./line-numbers";
import { formatLanguageClassName, type SupportedLanguage } from "./supported-languages";

/**
 * TODO(cody):
 * - fix line numbers, maybe try grid instead of :before and flex?
 * - fix line hightlighting
 * - fix line wrapping? horizontal scrolling has problems w/ line highlighting :(
 */

type CodeBlockContextType = {
	copyText: string;
	hasCodeExpander: boolean;
	isCodeExpanded: boolean;
	setCopyText: (newCopyText: string) => void;
	setHasCodeExpander: (value: boolean) => void;
	setIsCodeExpanded: Dispatch<SetStateAction<boolean>>;
};

const CodeBlockContext = createContext<CodeBlockContextType>({
	copyText: "",
	hasCodeExpander: false,
	isCodeExpanded: false,
	setCopyText: () => {},
	setHasCodeExpander: () => {},
	setIsCodeExpanded: () => {},
});

const CodeBlock = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
	const [copyText, setCopyText] = useState("");
	const [hasCodeExpander, setHasCodeExpander] = useState(false);
	const [isCodeExpanded, setIsCodeExpanded] = useState(false);

	const context: CodeBlockContextType = useMemo(
		() =>
			({
				copyText,
				hasCodeExpander,
				isCodeExpanded,
				setCopyText,
				setHasCodeExpander,
				setIsCodeExpanded,
			}) as const,
		[copyText, hasCodeExpander, isCodeExpanded],
	);

	return (
		<CodeBlockContext.Provider value={context}>
			<div
				className={cx(
					"overflow-hidden rounded-md border border-gray-300 bg-gray-50 font-mono text-[0.8125rem]",
					className,
				)}
				ref={ref}
				{...props}
			/>
		</CodeBlockContext.Provider>
	);
});
CodeBlock.displayName = "CodeBlock";

const CodeBlockBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
	<div className={cx("relative", className)} ref={ref} {...props} />
));
CodeBlockBody.displayName = "CodeBlockBody";

type CodeBlockCodeProps = WithStyleProps & {
	children?: string | undefined;
	highlightLines?: (LineRange | number)[];
	language?: SupportedLanguage;
	showLineNumbers?: boolean;
};

const CodeBlockCode = forwardRef<HTMLPreElement, CodeBlockCodeProps>((props, ref) => {
	const { children, className, language = "sh", style } = props;
	const innerPreRef = useRef<ElementRef<"pre">>();

	const { hasCodeExpander, isCodeExpanded, setCopyText } = useContext(CodeBlockContext);

	const shouldCollapseCodeHeight = hasCodeExpander && !isCodeExpanded;

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
				"scrollbar overflow-x-auto overflow-y-hidden p-4 pr-[3.375rem] firefox:after:mr-[3.375rem] firefox:after:inline-block firefox:after:content-['']",
				shouldCollapseCodeHeight && "max-h-[13.6rem]",
				className,
			)}
			data-lang={language}
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
CodeBlockCode.displayName = "CodeBlockCode";

const CodeBlockHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
	<div
		className={cx("flex items-center gap-1 border-b border-gray-300 bg-gray-100 px-4 py-2 text-gray-700", className)}
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
		const { copyText } = useContext(CodeBlockContext);
		const [, copyToClipboard] = useCopyToClipboard();
		const [copied, setCopied] = useState(false);

		useEffect(() => {
			if (copied) {
				const timeoutId = window.setTimeout(() => {
					setCopied(false);
				}, 2000);

				return () => {
					clearTimeout(timeoutId);
				};
			}
		}, [copied]);

		return (
			<button
				type="button"
				className={cx(
					"absolute right-[0.625rem] top-[0.625rem] z-10 flex h-8 w-8 items-center justify-center place-items-center rounded-sm border border-gray-300 bg-gray-50 shadow-[-1rem_0_0.75rem_-0.375rem_hsl(var(--gray-050)),1rem_0_0_-0.25rem_hsl(var(--gray-050))] hover:border-gray-400 hover:bg-gray-200",
					copied &&
						"gap-1 w-auto border-transparent bg-green-500 focus:bg-green-500 px-2 text-button hover:border-transparent hover:bg-green-500",
					className,
				)}
				ref={ref}
				style={style}
				onClick={async () => {
					try {
						await copyToClipboard(copyText);
						onCopy?.(copyText);
						setCopied(true);
					} catch (error) {
						onCopyError?.(error);
					}
				}}
			>
				<span className="sr-only">Copy code</span>
				{copied ? (
					<>
						Copied
						<CheckIcon />
					</>
				) : (
					<CopyIcon className="-ml-px" />
				)}
			</button>
		);
	},
);
CodeBlockCopyButton.displayName = "CodeBlockCopyButton";

const CodeBlockExpanderButton = forwardRef<HTMLButtonElement, Exclude<HTMLAttributes<HTMLButtonElement>, "children">>(
	({ className, ...props }, ref) => {
		const { isCodeExpanded, setIsCodeExpanded, setHasCodeExpander } = useContext(CodeBlockContext);

		useEffect(() => {
			setHasCodeExpander(true);

			return () => {
				setHasCodeExpander(false);
			};
		}, [setHasCodeExpander]);

		return (
			<button
				ref={ref}
				type="button"
				className={cx(
					"bg-gray-050 flex w-full items-center justify-center border-t border-gray-300 px-4 py-2 font-sans text-gray-700 hover:bg-gray-100",
					className,
				)}
				onClick={() => {
					setIsCodeExpanded((prev) => !prev);
				}}
				{...props}
			>
				{isCodeExpanded ? "Show less" : "Show more"} <ExpandIcon className={isCodeExpanded ? "rotate-180" : ""} />
			</button>
		);
	},
);
CodeBlockExpanderButton.displayName = "CodeBlockExpanderButton";

export {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	CodeBlockExpanderButton,
	CodeBlockHeader,
	CodeBlockTitle,
};

const ExpandIcon = ({ className, style }: WithStyleProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		className={cx("relative top-px h-5 w-5 transition-transform", className)}
		style={style}
	>
		<path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
	</svg>
);

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

const CheckIcon = ({ className, style }: WithStyleProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		className={cx("h-5 w-5", className)}
		style={style}
	>
		<path d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" />
	</svg>
);
