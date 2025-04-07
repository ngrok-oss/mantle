import { CaretDown } from "@phosphor-icons/react/CaretDown";
import { Check } from "@phosphor-icons/react/Check";
import { Copy } from "@phosphor-icons/react/Copy";
import { FileText } from "@phosphor-icons/react/FileText";
import { Terminal } from "@phosphor-icons/react/Terminal";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import type {
	ComponentProps,
	Dispatch,
	HTMLAttributes,
	ReactNode,
	SetStateAction,
} from "react";
import {
	createContext,
	forwardRef,
	useContext,
	useEffect,
	useId,
	useMemo,
	useState,
} from "react";
import assert from "tiny-invariant";
import { useCopyToClipboard } from "../../hooks/use-copy-to-clipboard.js";
import { cx } from "../../utils/cx/cx.js";
import { Icon } from "../icon/icon.js";
import type { SvgAttributes } from "../icon/types.js";
import { escapeHtml } from "./escape-html.js";
import { Highlighter } from "./highlighter.js";
import type { LineRange } from "./line-numbers.js";
import { normalizeIndentation } from "./normalize.js";
import type { Mode } from "./parse-metastring.js";
import type { SupportedLanguage } from "./supported-languages.js";
import {
	formatLanguageClassName,
	supportedLanguages,
} from "./supported-languages.js";

/**
 * TODO(cody):
 * - fix line numbers, maybe try grid instead of :before and flex?
 * - fix line hightlighting
 * - fix line wrapping? horizontal scrolling has problems w/ line highlighting :(
 */

type CodeBlockContextType = {
	codeId: string | undefined;
	copyText: string;
	hasCodeExpander: boolean;
	isCodeExpanded: boolean;
	registerCodeId: (id: string) => void;
	setCopyText: (newCopyText: string) => void;
	setHasCodeExpander: (value: boolean) => void;
	setIsCodeExpanded: Dispatch<SetStateAction<boolean>>;
	unregisterCodeId: (id: string) => void;
};

const CodeBlockContext = createContext<CodeBlockContextType>({
	codeId: undefined,
	copyText: "",
	hasCodeExpander: false,
	isCodeExpanded: false,
	registerCodeId: () => {},
	setCopyText: () => {},
	setHasCodeExpander: () => {},
	setIsCodeExpanded: () => {},
	unregisterCodeId: () => {},
});

const CodeBlock = forwardRef<HTMLDivElement, ComponentProps<"div">>(
	({ className, ...props }, ref) => {
		const [copyText, setCopyText] = useState("");
		const [hasCodeExpander, setHasCodeExpander] = useState(false);
		const [isCodeExpanded, setIsCodeExpanded] = useState(false);
		const [codeId, setCodeId] = useState<string | undefined>(undefined);

		const context: CodeBlockContextType = useMemo(
			() =>
				({
					codeId,
					copyText,
					hasCodeExpander,
					isCodeExpanded,
					registerCodeId: (id) => {
						setCodeId((old) => {
							assert(
								old == null,
								"You can only render a single CodeBlockCode within a CodeBlock.",
							);
							return id;
						});
					},
					setCopyText,
					setHasCodeExpander,
					setIsCodeExpanded,
					unregisterCodeId: (id) => {
						setCodeId((old) => {
							assert(
								old === id,
								"You can only render a single CodeBlockCode within a CodeBlock.",
							);
							return undefined;
						});
					},
				}) as const,
			[codeId, copyText, hasCodeExpander, isCodeExpanded],
		);

		return (
			<CodeBlockContext.Provider value={context}>
				<div
					className={cx(
						"text-mono overflow-hidden rounded-md border border-gray-300 bg-gray-50 font-mono",
						"[&_svg]:shrink-0",
						className,
					)}
					ref={ref}
					{...props}
				/>
			</CodeBlockContext.Provider>
		);
	},
);
CodeBlock.displayName = "CodeBlock";

const CodeBlockBody = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div className={cx("relative", className)} ref={ref} {...props} />
));
CodeBlockBody.displayName = "CodeBlockBody";

type CodeBlockCodeProps = Omit<ComponentProps<"pre">, "children"> & {
	/**
	 * The code to display in the code block. Should be code formatted as a string. This code will be passed to our syntax highlighter.
	 */
	value: string;
	/**
	 * @todo not implemented yet
	 */
	highlightLines?: (LineRange | number)[];
	/**
	 * The language of the code block. This will be used to determine how to syntax highlight the code. @default `"text"`.
	 */
	language?: SupportedLanguage;
	/**
	 * @todo not implemented yet
	 */
	showLineNumbers?: boolean;
};

const CodeBlockCode = forwardRef<HTMLPreElement, CodeBlockCodeProps>(
	(
		{
			className,
			language = "text",
			style,
			value,
			highlightLines: _unusedHighlightLines, // not implemented yet
			showLineNumbers: _unusedShowLineNumbers, // not implemented yet
			tabIndex,
			...props
		},
		ref,
	) => {
		const id = useId();
		const {
			hasCodeExpander,
			isCodeExpanded,
			registerCodeId,
			setCopyText,
			unregisterCodeId,
		} = useContext(CodeBlockContext);

		// trim any leading and trailing whitespace/empty lines, convert leading tabs to spaces
		const normalizedAndTrimmedValue = useMemo(
			() => normalizeIndentation(value),
			[value],
		);
		const [highlightedCodeInnerHtml, setHighlightedCodeInnerHtml] = useState(
			// initialize the <code> inner html with escaped HTML since we are using
			// dangerouslySetInnerHTML to set the inner html of the <code> element
			// and use Prism.js to "highlight" the code in a useEffect (client-side only)
			escapeHtml(normalizeIndentation(value)),
		);

		useEffect(() => {
			const grammar = Highlighter.languages[language];
			assert(
				grammar,
				`CodeBlock does not support the language "${language}". The syntax highlighter does not have a grammar for this language. The supported languages are: ${supportedLanguages.join(", ")}.`,
			);
			const newHighlightedCodeInnerHtml = Highlighter.highlight(
				normalizedAndTrimmedValue,
				grammar,
				language,
			);
			setHighlightedCodeInnerHtml(newHighlightedCodeInnerHtml);
		}, [normalizedAndTrimmedValue, language]);

		useEffect(() => {
			setCopyText(normalizedAndTrimmedValue);
		}, [normalizedAndTrimmedValue, setCopyText]);

		useEffect(() => {
			registerCodeId(id);

			return () => {
				unregisterCodeId(id);
			};
		}, [id, registerCodeId, unregisterCodeId]);

		const languageClassName = formatLanguageClassName(language);

		return (
			<pre
				aria-expanded={hasCodeExpander ? isCodeExpanded : undefined}
				className={cx(
					"scrollbar firefox:after:mr-[3.375rem] firefox:after:inline-block firefox:after:content-[''] overflow-x-auto overflow-y-hidden p-4 pr-14",
					"text-size-inherit text-mono m-0 font-mono",
					"aria-collapsed:max-h-[13.6rem]",
					languageClassName, // place it last because prism does weird stuff client side, causes hydration mismatches
					className,
				)}
				data-lang={language}
				id={id}
				ref={ref}
				style={{
					...style,
					tabSize: 2,
					MozTabSize: 2,
				}}
				// prism.js adds a tabindex of 0 to the pre element by default (unless it's set)
				// this is unnecessary, we do not want this automatic behavior!
				tabIndex={tabIndex ?? -1}
				{...props}
			>
				<code
					className={clsx("text-size-inherit", languageClassName)}
					dangerouslySetInnerHTML={{
						__html: highlightedCodeInnerHtml,
					}}
					// we need to suppress the hydration warning because we are setting the innerHTML of the code block
					// and using Prism.js to "highlight" the code in a useEffect (client-side only), which does different things on the client and server
					suppressHydrationWarning
				/>
			</pre>
		);
	},
);
CodeBlockCode.displayName = "CodeBlockCode";

const CodeBlockHeader = forwardRef<HTMLDivElement, ComponentProps<"div">>(
	({ className, ...props }, ref) => (
		<div
			className={cx(
				"flex items-center gap-1 border-b border-gray-300 bg-gray-100 px-4 py-2 text-gray-700",
				className,
			)}
			ref={ref}
			{...props}
		/>
	),
);
CodeBlockHeader.displayName = "CodeBlockHeader";

const CodeBlockTitle = forwardRef<
	HTMLHeadingElement,
	HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ asChild = false, className, ...props }, ref) => {
	const Comp = asChild ? Slot : "h3";
	return (
		<Comp
			ref={ref}
			className={cx("text-mono m-0 font-mono font-normal", className)}
			{...props}
		/>
	);
});
CodeBlockTitle.displayName = "CodeBlockTitle";

type CodeBlockCopyButtonProps = Omit<
	ComponentProps<"button">,
	"children" | "type"
> & {
	/**
	 * Callback fired when the copy button is clicked, passes the copied text as an argument.
	 */
	onCopy?: (value: string) => void;
	/**
	 * Callback fired when an error occurs during copying.
	 */
	onCopyError?: (error: unknown) => void;
};

const CodeBlockCopyButton = forwardRef<
	HTMLButtonElement,
	CodeBlockCopyButtonProps
>(({ className, onCopy, onCopyError, onClick, ...props }, ref) => {
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
				"focus-visible:border-accent-600 focus-visible:ring-focus-accent absolute right-2.5 top-2.5 z-10 flex size-7 items-center justify-center rounded border border-gray-300 bg-gray-50 shadow-[-1rem_0_0.75rem_-0.375rem_hsl(var(--gray-50)),1rem_0_0_-0.25rem_hsl(var(--gray-50))] hover:border-gray-400 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-4",
				copied &&
					"bg-filled-success text-on-filled hover:bg-filled-success focus:bg-filled-success focus-visible:border-success-600 focus-visible:ring-focus-success w-auto gap-1 border-transparent pl-2 pr-1.5 hover:border-transparent",
				className,
			)}
			ref={ref}
			onClick={async (event) => {
				try {
					onClick?.(event);
					await copyToClipboard(copyText);
					onCopy?.(copyText);
					setCopied(true);
				} catch (error) {
					onCopyError?.(error);
				}
			}}
			{...props}
		>
			<span className="sr-only">Copy code</span>
			{copied ? (
				<>
					Copied
					<Check className="size-4 shrink-0" weight="bold" />
				</>
			) : (
				<Copy className="-ml-px size-5 shrink-0" />
			)}
		</button>
	);
});
CodeBlockCopyButton.displayName = "CodeBlockCopyButton";

type CodeBlockExpanderButtonProps = Omit<
	HTMLAttributes<HTMLButtonElement>,
	"children" | "aria-controls" | "aria-expanded"
>;

const CodeBlockExpanderButton = forwardRef<
	HTMLButtonElement,
	CodeBlockExpanderButtonProps
>(({ className, onClick, ...props }, ref) => {
	const { codeId, isCodeExpanded, setIsCodeExpanded, setHasCodeExpander } =
		useContext(CodeBlockContext);

	useEffect(() => {
		setHasCodeExpander(true);

		return () => {
			setHasCodeExpander(false);
		};
	}, [setHasCodeExpander]);

	return (
		<button
			{...props}
			aria-controls={codeId}
			aria-expanded={isCodeExpanded}
			className={cx(
				"flex w-full items-center justify-center gap-0.5 border-t border-gray-300 bg-gray-50 px-4 py-2 font-sans text-gray-700 hover:bg-gray-100",
				className,
			)}
			ref={ref}
			type="button"
			onClick={(event) => {
				setIsCodeExpanded((prev) => !prev);
				onClick?.(event);
			}}
		>
			{isCodeExpanded ? "Show less" : "Show more"}{" "}
			<CaretDown
				className={cx(
					"size-4 shrink-0",
					isCodeExpanded && "rotate-180",
					"transition-all duration-150",
				)}
				weight="bold"
			/>
		</button>
	);
});
CodeBlockExpanderButton.displayName = "CodeBlockExpanderButton";

type CodeBlockIconProps = Omit<SvgAttributes, "children"> &
	(
		| {
				/**
				 * A custom icon to display in the code block header.
				 * (Pass only one of `svg` or `preset`.)
				 */
				svg: ReactNode;
				/**
				 * A preset icon to display in the code block header.
				 * (Pass only one of `svg` or `preset`.)
				 */
				preset?: undefined | never;
		  }
		| {
				/**
				 * A custom icon to display in the code block header.
				 * (Pass only one of `svg` or `preset`.)
				 */
				svg?: undefined | never;
				/**
				 * A preset icon to display in the code block header.
				 * (Pass only one of `svg` or `preset`.)
				 */
				preset: Mode;
		  }
	);

/**
 * A small icon that represents the type of code block being displayed,
 * rendered as an SVG next to the code block title in the code block header.
 *
 * You can pass in a custom SVG component or use one of the presets
 * (pass only one of `svg` or `preset`).
 */
function CodeBlockIcon({
	className: _className,
	preset,
	svg,
	...props
}: CodeBlockIconProps) {
	const className = cx("size-5 shrink-0", _className);

	if (preset != null) {
		switch (preset) {
			case "file":
				return <FileText className={className} weight="fill" {...props} />;
			case "cli":
				return <Terminal className={className} weight="fill" {...props} />;
			case "traffic-policy":
				return <TrafficPolicyFileIcon className={className} {...props} />;
			default:
				return null;
		}
	}

	return <Icon className={className} svg={svg} {...props} />;
}

const TrafficPolicyFileIcon = (props: SvgAttributes) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 256 256"
		{...props}
	>
		<path fill="none" d="M0 0h256v256H0z" />
		<path d="m213.7 82.3-56-56c-1.5-1.5-3.5-2.3-5.7-2.3H56c-8.8 0-16 7.2-16 16v88c0 4.4 3.6 8 8 8s8-3.6 8-8V40h88v48c0 4.4 3.6 8 8 8h48v120h-40c-4.4 0-8 3.6-8 8s3.6 8 8 8h40c8.8 0 16-7.2 16-16V88c0-2.1-.8-4.2-2.3-5.7zm-53.7-31L188.7 80H160V51.3z" />
		<path d="M124.6 194.5h-6.8v-27.3h6.8c1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4h-6.8v-10.2c0-3.8-3.1-6.8-6.8-6.8H63.3c-3.8 0-6.8 3.1-6.8 6.8v10.2h-6.8c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4h6.8v27.3h-6.8c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4h6.8v23.9c0 3.8 3.1 6.8 6.8 6.8H111c3.8 0 6.8-3.1 6.8-6.8v-23.9h6.8c1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4zm-37.5-11.9c-6.6 0-11.9-5.3-11.9-11.9s5.3-11.9 11.9-11.9S99 164.1 99 170.7s-5.3 11.9-11.9 11.9zm0 10.2c6.6 0 11.9 5.3 11.9 11.9s-5.3 11.9-11.9 11.9-11.9-5.3-11.9-11.9 5.3-11.9 11.9-11.9z" />
	</svg>
);

export {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	CodeBlockExpanderButton,
	CodeBlockHeader,
	CodeBlockIcon,
	CodeBlockTitle,
};
