import { CaretDownIcon } from "@phosphor-icons/react/CaretDown";
import { CheckIcon } from "@phosphor-icons/react/Check";
import { CopyIcon } from "@phosphor-icons/react/Copy";
import { FileTextIcon } from "@phosphor-icons/react/FileText";
import { TerminalIcon } from "@phosphor-icons/react/Terminal";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import type {
	ComponentProps,
	ComponentRef,
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
	useRef,
	useState,
} from "react";
import assert from "tiny-invariant";
import { useCopyToClipboard } from "../../hooks/use-copy-to-clipboard.js";
import type { WithAsChild } from "../../types/as-child.js";
import { cx } from "../../utils/cx/cx.js";
import { Icon } from "../icon/icon.js";
import type { SvgAttributes } from "../icon/types.js";
import { TrafficPolicyFileIcon } from "../icons/traffic-policy-file.js";
import { escapeHtml } from "./escape-html.js";
import { Highlighter } from "./highlighter.js";
import { type Indentation, inferIndentation } from "./indentation.js";
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

/**
 * Code blocks render and apply syntax highlighting to blocks of code.
 * This is the root component for all code block components.
 *
 * @see https://mantle.ngrok.com/components/code-block#api-code-block
 *
 * @example
 * ```tsx
 * <CodeBlock>
 *   <CodeBlockHeader>
 *     <CodeBlockIcon preset="file" />
 *     <CodeBlockTitle>…</CodeBlockTitle>
 *   </CodeBlockHeader>
 *   <CodeBlockBody>
 *     <CodeBlockCopyButton />
 *     <CodeBlockCode language="…" value={fmtCode\`…\`} />
 *   </CodeBlockBody>
 *   <CodeBlockExpanderButton />
 * </CodeBlock>
 * ```
 */
const CodeBlock = forwardRef<
	ComponentRef<"div">,
	ComponentProps<"div"> & WithAsChild
>(({ asChild = false, className, ...props }, ref) => {
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

	const Component = asChild ? Slot : "div";

	return (
		<CodeBlockContext.Provider value={context}>
			<Component
				className={cx(
					"text-size-mono overflow-hidden rounded-md border border-gray-300 bg-gray-50 font-mono",
					"[&_svg]:shrink-0",
					className,
				)}
				ref={ref}
				{...props}
			/>
		</CodeBlockContext.Provider>
	);
});
CodeBlock.displayName = "CodeBlock";

/**
 * The body of the `CodeBlock`. This is where the `CodeBlockCode` and optional
 * `CodeBlockCopyButton` is rendered.
 *
 * @see https://mantle.ngrok.com/components/code-block#api-code-block-body
 *
 * @example
 * ```tsx
 * <CodeBlock>
 *   <CodeBlockHeader>
 *     <CodeBlockIcon preset="file" />
 *     <CodeBlockTitle>…</CodeBlockTitle>
 *   </CodeBlockHeader>
 *   <CodeBlockBody>
 *     <CodeBlockCopyButton />
 *     <CodeBlockCode language="…" value={fmtCode\`…\`} />
 *   </CodeBlockBody>
 *   <CodeBlockExpanderButton />
 * </CodeBlock>
 * ```
 */
const CodeBlockBody = forwardRef<
	ComponentRef<"div">,
	ComponentProps<"div"> & WithAsChild
>(({ asChild = false, className, ...props }, ref) => {
	const Component = asChild ? Slot : "div";

	return (
		<Component className={cx("relative", className)} ref={ref} {...props} />
	);
});
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
	 * The type of indentation to use. Can be either "tabs" or "spaces".
	 * @default inferred from the given language, fallback to `spaces`
	 */
	indentation?: Indentation;
	/**
	 * The language of the code block. This will be used to determine how to syntax highlight the code.
	 * @default `"text"`.
	 */
	language?: SupportedLanguage;
	/**
	 * @todo not implemented yet
	 */
	showLineNumbers?: boolean;
};

/**
 * The `CodeBlock` content. This is where the code is rendered and syntax highlighted.
 *
 * @see https://mantle.ngrok.com/components/code-block#api-code-block-code
 *
 * @example
 * ```tsx
 * <CodeBlock>
 *   <CodeBlockHeader>
 *     <CodeBlockIcon preset="file" />
 *     <CodeBlockTitle>…</CodeBlockTitle>
 *   </CodeBlockHeader>
 *   <CodeBlockBody>
 *     <CodeBlockCopyButton />
 *     <CodeBlockCode
 *       language="sh"
 *       value={fmtCode`ffmpeg -i multichannel.mxf -map 0:v:0 -map 0:a:0 -map 0:a:0 -c:a:0 ac3 -b:a:0 640k -ac:a:1 2 -c:a:1 aac -b:2 128k out.mp4`}
 *     />
 *   </CodeBlockBody>
 *   <CodeBlockExpanderButton />
 * </CodeBlock>
 * ```
 */
const CodeBlockCode = forwardRef<ComponentRef<"pre">, CodeBlockCodeProps>(
	(
		{
			className,
			highlightLines: _unusedHighlightLines, // not implemented yet
			indentation: propIndentation,
			language = "text",
			showLineNumbers: _unusedShowLineNumbers, // not implemented yet
			style,
			tabIndex,
			value,
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
		const indentation = inferIndentation(language, propIndentation);

		// trim any leading and trailing whitespace/empty lines, convert leading tabs to spaces
		const normalizedAndTrimmedValue = useMemo(
			() => normalizeIndentation(value, { indentation }),
			[value, indentation],
		);
		const [highlightedCodeInnerHtml, setHighlightedCodeInnerHtml] = useState(
			// initialize the <code> inner html with escaped HTML since we are using
			// dangerouslySetInnerHTML to set the inner html of the <code> element
			// and use Prism.js to "highlight" the code in a useEffect (client-side only)
			escapeHtml(normalizeIndentation(value, { indentation })),
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
					"text-size-inherit text-size-mono m-0 font-mono",
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

/**
 * The (optional) header slot of the `CodeBlock`. This is where things like the
 * `CodeBlockIcon` and `CodeBlockTitle` are rendered.
 *
 * @see https://mantle.ngrok.com/components/code-block#api-code-block-header
 *
 * @example
 * ```tsx
 * <CodeBlock>
 *   <CodeBlockHeader>
 *     <CodeBlockIcon preset="file" />
 *     <CodeBlockTitle>…</CodeBlockTitle>
 *   </CodeBlockHeader>
 *   <CodeBlockBody>
 *     <CodeBlockCopyButton />
 *     <CodeBlockCode language="…" value={fmtCode\`…\`} />
 *   </CodeBlockBody>
 *   <CodeBlockExpanderButton />
 * </CodeBlock>
 * ```
 */
const CodeBlockHeader = forwardRef<
	ComponentRef<"div">,
	ComponentProps<"div"> & WithAsChild
>(({ asChild = false, className, ...props }, ref) => {
	const Component = asChild ? Slot : "div";

	return (
		<Component
			className={cx(
				"flex items-center gap-1 border-b border-gray-300 bg-gray-100 px-4 py-2 text-gray-700",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
});
CodeBlockHeader.displayName = "CodeBlockHeader";

/**
 * The (optional) title of the `CodeBlock`. Default renders as an h3 element,
 * use asChild to render something else.
 *
 * @see https://mantle.ngrok.com/components/code-block#api-code-block-title
 *
 * @example
 * ```tsx
 * <CodeBlock>
 *   <CodeBlockHeader>
 *     <CodeBlockIcon preset="file" />
 *     <CodeBlockTitle>…</CodeBlockTitle>
 *   </CodeBlockHeader>
 *   <CodeBlockBody>
 *     <CodeBlockCopyButton />
 *     <CodeBlockCode language="…" value={fmtCode\`…\`} />
 *   </CodeBlockBody>
 *   <CodeBlockExpanderButton />
 * </CodeBlock>
 * ```
 */
const CodeBlockTitle = forwardRef<
	HTMLHeadingElement,
	HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ asChild = false, className, ...props }, ref) => {
	const Component = asChild ? Slot : "h3";

	return (
		<Component
			ref={ref}
			className={cx("text-size-mono m-0 font-mono font-normal", className)}
			{...props}
		/>
	);
});
CodeBlockTitle.displayName = "CodeBlockTitle";

type CodeBlockCopyButtonProps = Omit<
	ComponentProps<"button">,
	"children" | "type"
> &
	WithAsChild & {
		/**
		 * Callback fired when the copy button is clicked, passes the copied text as an argument.
		 */
		onCopy?: (value: string) => void;
		/**
		 * Callback fired when an error occurs during copying.
		 */
		onCopyError?: (error: unknown) => void;
	};

/**
 * The (optional) copy button of the `CodeBlock`. Render this as a child of the
 * `CodeBlockBody` to allow users to copy the code block contents to their
 * clipboard.
 *
 * @see https://mantle.ngrok.com/components/code-block#api-code-block-copy-button
 *
 * @example
 * ```tsx
 * <CodeBlock>
 *   <CodeBlockHeader>
 *     <CodeBlockIcon preset="file" />
 *     <CodeBlockTitle>…</CodeBlockTitle>
 *   </CodeBlockHeader>
 *   <CodeBlockBody>
 *     <CodeBlockCopyButton />
 *     <CodeBlockCode language="…" value={fmtCode\`…\`} />
 *   </CodeBlockBody>
 *   <CodeBlockExpanderButton />
 * </CodeBlock>
 * ```
 */
const CodeBlockCopyButton = forwardRef<
	ComponentRef<"button">,
	CodeBlockCopyButtonProps
>(
	(
		{ asChild = false, className, onCopy, onCopyError, onClick, ...props },
		ref,
	) => {
		const { copyText } = useContext(CodeBlockContext);
		const [, copyToClipboard] = useCopyToClipboard();
		const [wasCopied, setWasCopied] = useState(false);
		const timeoutHandle = useRef<number>(0);

		const Component = asChild ? Slot : "button";

		return (
			<Component
				type="button"
				className={cx(
					"focus-visible:border-accent-600 focus-visible:ring-focus-accent absolute right-2.5 top-2.5 z-10 flex size-7 items-center justify-center rounded border border-gray-300 bg-gray-50 shadow-[-1rem_0_0.75rem_-0.375rem_hsl(var(--gray-50)),1rem_0_0_-0.25rem_hsl(var(--gray-50))] hover:border-gray-400 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-4",
					wasCopied &&
						"bg-filled-success text-on-filled hover:bg-filled-success focus:bg-filled-success focus-visible:border-success-600 focus-visible:ring-focus-success w-auto gap-1 border-transparent pl-2 pr-1.5 hover:border-transparent",
					className,
				)}
				ref={ref}
				onClick={async (event) => {
					try {
						onClick?.(event);
						if (event.defaultPrevented) {
							// Clear any existing timeout
							window.clearTimeout(timeoutHandle.current);
							return;
						}

						await copyToClipboard(copyText);
						onCopy?.(copyText);
						setWasCopied(true);

						// Clear any existing timeout
						window.clearTimeout(timeoutHandle.current);

						// Reset the copied state after a short delay
						timeoutHandle.current = window.setTimeout(() => {
							setWasCopied(false);
						}, 2000);
					} catch (error) {
						onCopyError?.(error);
					}
				}}
				{...props}
			>
				<span className="sr-only">Copy code</span>
				{wasCopied ? (
					<>
						Copied
						<Icon svg={<CheckIcon weight="bold" />} className="size-4" />
					</>
				) : (
					<Icon svg={<CopyIcon />} className="-ml-px" />
				)}
			</Component>
		);
	},
);
CodeBlockCopyButton.displayName = "CodeBlockCopyButton";

type CodeBlockExpanderButtonProps = Omit<
	ComponentProps<"button">,
	"children" | "aria-controls" | "aria-expanded"
> &
	WithAsChild;

/**
 * The (optional) expander button of the `CodeBlock`. Render this as a child of the
 * `CodeBlockBody` to allow users to expand/collapse the code block contents.
 *
 * @note If this component is preset, the `CodeBlock` will automatically know
 * that it should be collapsible. Don't use this component if you don't want
 * the code block to be collapsible.
 *
 * @see https://mantle.ngrok.com/components/code-block#api-code-block-expander-button
 *
 * @example
 * ```tsx
 * <CodeBlock>
 *   <CodeBlockHeader>
 *     <CodeBlockIcon preset="file" />
 *     <CodeBlockTitle>…</CodeBlockTitle>
 *   </CodeBlockHeader>
 *   <CodeBlockBody>
 *     <CodeBlockCopyButton />
 *     <CodeBlockCode language="…" value={fmtCode\`…\`} />
 *   </CodeBlockBody>
 *   <CodeBlockExpanderButton />
 * </CodeBlock>
 * ```
 */
const CodeBlockExpanderButton = forwardRef<
	ComponentRef<"button">,
	CodeBlockExpanderButtonProps
>(({ asChild = false, className, onClick, ...props }, ref) => {
	const { codeId, isCodeExpanded, setIsCodeExpanded, setHasCodeExpander } =
		useContext(CodeBlockContext);

	useEffect(() => {
		setHasCodeExpander(true);

		return () => {
			setHasCodeExpander(false);
		};
	}, [setHasCodeExpander]);

	const Component = asChild ? Slot : "button";

	return (
		<Component
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
			<Icon
				svg={<CaretDownIcon weight="bold" />}
				className={cx(
					"size-4",
					isCodeExpanded && "rotate-180",
					"transition-all duration-150",
				)}
			/>
		</Component>
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
 *
 * @see https://mantle.ngrok.com/components/code-block#api-code-block-icon
 *
 * @example
 * ```tsx
 * <CodeBlock>
 *   <CodeBlockHeader>
 *     <CodeBlockIcon preset="file" />
 *     <CodeBlockTitle>…</CodeBlockTitle>
 *   </CodeBlockHeader>
 *   <CodeBlockBody>
 *     <CodeBlockCopyButton />
 *     <CodeBlockCode language="…" value={fmtCode\`…\`} />
 *   </CodeBlockBody>
 *   <CodeBlockExpanderButton />
 * </CodeBlock>
 * ```
 */
function CodeBlockIcon({
	className,
	preset,
	svg: _svgProp,
	...props
}: CodeBlockIconProps) {
	let svg = _svgProp;
	if (preset != null) {
		switch (preset) {
			case "file":
				svg = <FileTextIcon weight="fill" />;
				break;
			case "cli":
				svg = <TerminalIcon weight="fill" />;
				break;
			case "traffic-policy":
				svg = <TrafficPolicyFileIcon />;
				break;
		}
	}

	return <Icon className={className} svg={svg} {...props} />;
}

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
