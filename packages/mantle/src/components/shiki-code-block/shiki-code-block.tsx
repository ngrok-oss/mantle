"use client";

import { CaretDownIcon } from "@phosphor-icons/react/CaretDown";
import { CheckIcon } from "@phosphor-icons/react/Check";
import { CopyIcon } from "@phosphor-icons/react/Copy";
import { FileTextIcon } from "@phosphor-icons/react/FileText";
import { TerminalIcon } from "@phosphor-icons/react/Terminal";
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
import { Icon as MantleIcon } from "../icon/icon.js";
import type { SvgAttributes } from "../icon/types.js";
import { TrafficPolicyFileIcon } from "../icons/traffic-policy-file.js";
import { Slot } from "../slot/index.js";
import { escapeHtml } from "../code-block/escape-html.js";
import type { Indentation } from "../code-block/indentation.js";
import type { LineRange } from "../code-block/line-numbers.js";
import type { Mode } from "../code-block/parse-metastring.js";
import type { MantleCodeBlockValue } from "./shiki-code.js";

type ShikiCodeBlockContextType = {
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

const ShikiCodeBlockContext = createContext<ShikiCodeBlockContextType>({
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
 * Shiki-powered code blocks with build-time syntax highlighting and zero browser bundle.
 * This is the root component for all ShikiCodeBlock components.
 *
 * @example
 * ```tsx
 * <ShikiCodeBlock.Root>
 *   <ShikiCodeBlock.Header>
 *     <ShikiCodeBlock.Icon preset="file" />
 *     <ShikiCodeBlock.Title>example.ts</ShikiCodeBlock.Title>
 *   </ShikiCodeBlock.Header>
 *   <ShikiCodeBlock.Body>
 *     <ShikiCodeBlock.CopyButton />
 *     <ShikiCodeBlock.Code value={mantleCode("typescript")`const x = "hello";`} />
 *   </ShikiCodeBlock.Body>
 *   <ShikiCodeBlock.ExpanderButton />
 * </ShikiCodeBlock.Root>
 * ```
 */
const Root = forwardRef<ComponentRef<"div">, Omit<ComponentProps<"div">, "align"> & WithAsChild>(
	({ asChild = false, className, ...props }, ref) => {
		const [copyText, setCopyText] = useState("");
		const [hasCodeExpander, setHasCodeExpander] = useState(false);
		const [isCodeExpanded, setIsCodeExpanded] = useState(false);
		const [codeId, setCodeId] = useState<string | undefined>(undefined);

		const context: ShikiCodeBlockContextType = useMemo(
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
								"You can only render a single ShikiCodeBlock.Code within a ShikiCodeBlock.",
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
								"You can only render a single ShikiCodeBlock.Code within a ShikiCodeBlock.",
							);
							return undefined;
						});
					},
				}) as const,
			[codeId, copyText, hasCodeExpander, isCodeExpanded],
		);

		const Component = asChild ? Slot : "div";

		return (
			<ShikiCodeBlockContext.Provider value={context}>
				<Component
					data-slot="shiki-code-block"
					className={cx(
						"text-mono overflow-hidden rounded-md border border-gray-300 bg-gray-50 font-mono",
						"[&_svg]:shrink-0",
						className,
					)}
					ref={ref}
					{...props}
				/>
			</ShikiCodeBlockContext.Provider>
		);
	},
);
Root.displayName = "ShikiCodeBlock";

/**
 * The body of the `ShikiCodeBlock`. This is where `ShikiCodeBlock.Code` and
 * the optional `ShikiCodeBlock.CopyButton` are rendered.
 *
 * @example
 * ```tsx
 * <ShikiCodeBlock.Root>
 *   <ShikiCodeBlock.Body>
 *     <ShikiCodeBlock.CopyButton />
 *     <ShikiCodeBlock.Code value={mantleCode("typescript")`const x = "hello";`} />
 *   </ShikiCodeBlock.Body>
 * </ShikiCodeBlock.Root>
 * ```
 */
const Body = forwardRef<ComponentRef<"div">, ComponentProps<"div"> & WithAsChild>(
	({ asChild = false, className, ...props }, ref) => {
		const Component = asChild ? Slot : "div";
		return <Component className={cx("relative", className)} ref={ref} {...props} />;
	},
);
Body.displayName = "ShikiCodeBlockBody";

function substituteTemplateVals(
	input: string,
	vals: unknown[],
	mapValue: (value: unknown) => string,
): string {
	return input.replaceAll(/SHIKI_VAL_(\d+)/g, (match, indexText: string) => {
		const index = Number.parseInt(indexText, 10);
		if (Number.isNaN(index) || index < 0 || index >= vals.length) {
			return match;
		}
		return mapValue(vals[index]);
	});
}

function substitutePreVals(html: string, vals: unknown[]): string {
	return substituteTemplateVals(html, vals, (value) => escapeHtml(String(value)));
}

function substitutePreValsPlainText(text: string, vals: unknown[]): string {
	return substituteTemplateVals(text, vals, (value) => String(value));
}

type ShikiCodeBlockCodeProps = Omit<ComponentProps<"pre">, "children"> & {
	/**
	 * The code value produced by `mantleCode("lang")` tagged template.
	 * Contains pre-rendered Shiki HTML (when the Vite plugin is active) and
	 * the original code string for the copy button.
	 */
	value: MantleCodeBlockValue;
	/**
	 * The type of indentation to use. Can be either "tabs" or "spaces".
	 * @default inferred from the language, fallback to `spaces`
	 */
	indentation?: Indentation;
	/**
	 * Runtime line decoration is intentionally unsupported in strict pre-rendered mode.
	 */
	highlightLines?: (LineRange | number)[];
	/**
	 * Runtime line decoration is intentionally unsupported in strict pre-rendered mode.
	 */
	showLineNumbers?: boolean;
	/**
	 * The first line number to render when line numbers are shown.
	 * @default 1
	 */
	lineNumberStart?: number;
};

/**
 * The `ShikiCodeBlock` content. Renders pre-highlighted code from `mantleCode()`.
 *
 * `value["~preHtml"]` must be provided by Mantle's Vite plugin or server highlighter.
 * Runtime highlighting and runtime line decoration are intentionally unsupported.
 *
 * @example
 * ```tsx
 * <ShikiCodeBlock.Body>
 *   <ShikiCodeBlock.CopyButton />
 *   <ShikiCodeBlock.Code value={mantleCode("typescript")`const x = "hello";`} />
 * </ShikiCodeBlock.Body>
 * ```
 */
const Code = forwardRef<ComponentRef<"pre">, ShikiCodeBlockCodeProps>(
	(
		{
			className,
			highlightLines,
			indentation: propIndentation,
			lineNumberStart,
			showLineNumbers,
			style,
			tabIndex,
			value,
			...props
		},
		ref,
	) => {
		const id = useId();
		const { hasCodeExpander, isCodeExpanded, registerCodeId, setCopyText, unregisterCodeId } =
			useContext(ShikiCodeBlockContext);
		const hasWarnedRuntimeIndentationRef = useRef(false);
		const hasWarnedRuntimeLinePropsRef = useRef(false);
		const {
			language,
			code,
			"~preVals": __preVals,
			"~highlightLines": __highlightLines,
			"~lineNumberStart": __lineNumberStart,
			"~preHtml": __preHtml,
			"~showLineNumbers": __showLineNumbers,
		} = value;

		const effectiveHighlightLines = __highlightLines;
		const effectiveLineNumberStart = __lineNumberStart ?? 1;
		const effectiveShowLineNumbers = __showLineNumbers ?? false;
		const copyText = useMemo(
			() =>
				__preVals != null && __preVals.length > 0
					? substitutePreValsPlainText(code, __preVals)
					: code,
			[__preVals, code],
		);

		useEffect(() => {
			setCopyText(copyText);
		}, [copyText, setCopyText]);

		useEffect(() => {
			registerCodeId(id);

			return () => {
				unregisterCodeId(id);
			};
		}, [id, registerCodeId, unregisterCodeId]);

		if (__preHtml == null) {
			throw new Error(
				`[ShikiCodeBlock] Missing pre-rendered HTML for language "${language}". ` +
					`Add mantleCodeBlockPlugins() to your vite.config.ts or provide server-rendered HTML via createMantleServerHighlighter().`,
			);
		}

		useEffect(() => {
			if (propIndentation == null) {
				return;
			}
			if (hasWarnedRuntimeIndentationRef.current) {
				return;
			}
			hasWarnedRuntimeIndentationRef.current = true;
			console.warn(
				"[ShikiCodeBlock] Runtime indentation prop is ignored in strict pre-rendered mode. " +
					"Set indentation during build/server highlighting.",
			);
		}, [propIndentation]);

		useEffect(() => {
			if (highlightLines == null && lineNumberStart == null && showLineNumbers == null) {
				return;
			}
			if (hasWarnedRuntimeLinePropsRef.current) {
				return;
			}
			hasWarnedRuntimeLinePropsRef.current = true;
			console.warn(
				"[ShikiCodeBlock] Runtime line props are ignored in strict pre-rendered mode. " +
					"Set line options via mantleCode(..., options) or server highlighter options.",
			);
		}, [highlightLines, lineNumberStart, showLineNumbers]);

		const renderedHtml =
			__preVals != null && __preVals.length > 0
				? substitutePreVals(__preHtml, __preVals)
				: __preHtml;

		return (
			<pre
				aria-expanded={hasCodeExpander ? isCodeExpanded : undefined}
				className={cx(
					"scrollbar overflow-x-auto overflow-y-hidden py-4",
					"data-[mantle-line-numbers~='false']:px-4",
					"text-mono m-0 font-mono",
					"aria-collapsed:max-h-[13.6rem]",
					className,
				)}
				data-lang={language}
				data-mantle-highlight-lines={
					effectiveHighlightLines != null && effectiveHighlightLines.length > 0
						? effectiveHighlightLines.join(",")
						: undefined
				}
				data-mantle-line-number-start={
					effectiveShowLineNumbers ? String(effectiveLineNumberStart) : 1
				}
				data-mantle-line-numbers={effectiveShowLineNumbers ? "true" : "false"}
				id={id}
				ref={ref}
				style={
					{
						...style,
						"--mantle-line-number-start": String(effectiveLineNumberStart),
						tabSize: 2,
						MozTabSize: 2,
					} as ComponentProps<"pre">["style"]
				}
				tabIndex={tabIndex ?? -1}
				{...props}
			>
				<code
					className="text-size-inherit block w-full"
					style={{ display: "block", minWidth: "100%", width: "100%" }}
					dangerouslySetInnerHTML={{ __html: renderedHtml }}
				/>
			</pre>
		);
	},
);
Code.displayName = "ShikiCodeBlockCode";

/**
 * The (optional) header slot of the `ShikiCodeBlock`. This is where
 * `ShikiCodeBlock.Icon` and `ShikiCodeBlock.Title` are rendered.
 *
 * @example
 * ```tsx
 * <ShikiCodeBlock.Root>
 *   <ShikiCodeBlock.Header>
 *     <ShikiCodeBlock.Icon preset="file" />
 *     <ShikiCodeBlock.Title>example.ts</ShikiCodeBlock.Title>
 *   </ShikiCodeBlock.Header>
 * </ShikiCodeBlock.Root>
 * ```
 */
const Header = forwardRef<ComponentRef<"div">, ComponentProps<"div"> & WithAsChild>(
	({ asChild = false, className, ...props }, ref) => {
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
	},
);
Header.displayName = "ShikiCodeBlockHeader";

/**
 * The (optional) title of the `ShikiCodeBlock`. Renders as `h3` by default;
 * use `asChild` to render a different element.
 *
 * @example
 * ```tsx
 * <ShikiCodeBlock.Header>
 *   <ShikiCodeBlock.Title>example.ts</ShikiCodeBlock.Title>
 * </ShikiCodeBlock.Header>
 * ```
 */
const Title = forwardRef<
	HTMLHeadingElement,
	HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ asChild = false, className, ...props }, ref) => {
	const Component = asChild ? Slot : "h3";
	return (
		<Component
			ref={ref}
			className={cx("text-mono m-0 font-mono font-normal", className)}
			{...props}
		/>
	);
});
Title.displayName = "ShikiCodeBlockTitle";

type ShikiCodeBlockCopyButtonProps = Omit<ComponentProps<"button">, "children" | "type"> &
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
 * The (optional) copy button of the `ShikiCodeBlock`. Copies the code content
 * to the clipboard when clicked.
 *
 * @example
 * ```tsx
 * <ShikiCodeBlock.Body>
 *   <ShikiCodeBlock.CopyButton />
 *   <ShikiCodeBlock.Code value={mantleCode("typescript")`…`} />
 * </ShikiCodeBlock.Body>
 * ```
 */
const CopyButton = forwardRef<ComponentRef<"button">, ShikiCodeBlockCopyButtonProps>(
	({ asChild = false, className, onCopy, onCopyError, onClick, ...props }, ref) => {
		const { copyText } = useContext(ShikiCodeBlockContext);
		const [, copyToClipboard] = useCopyToClipboard();
		const [wasCopied, setWasCopied] = useState(false);
		const timeoutHandle = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

		useEffect(() => {
			return () => {
				if (timeoutHandle.current != null) {
					clearTimeout(timeoutHandle.current);
				}
			};
		}, []);

		const Component = asChild ? Slot : "button";

		return (
			<Component
				type="button"
				className={cx(
					"focus-visible:border-accent-600 focus-visible:ring-focus-accent absolute right-2.5 top-2.5 z-10 flex size-7 items-center justify-center rounded border border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-200 focus-visible:outline-hidden focus-visible:ring-4",
					// "shadow-[-1rem_0_0.75rem_-0.375rem_var(--color-gray-50),1rem_0_0_-0.25rem_var(--color-gray-50)]",
					"shadow",
					wasCopied &&
						"bg-filled-success text-on-filled hover:bg-filled-success focus:bg-filled-success focus-visible:border-success-600 focus-visible:ring-focus-success w-auto gap-1 border-transparent pl-2 pr-1.5 hover:border-transparent",
					className,
				)}
				ref={ref}
				onClick={async (event) => {
					try {
						onClick?.(event);
						if (event.defaultPrevented) {
							if (timeoutHandle.current != null) {
								clearTimeout(timeoutHandle.current);
							}
							return;
						}
						await copyToClipboard(copyText);
						onCopy?.(copyText);
						setWasCopied(true);
						if (timeoutHandle.current != null) {
							clearTimeout(timeoutHandle.current);
						}
						timeoutHandle.current = setTimeout(() => {
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
						<MantleIcon svg={<CheckIcon weight="bold" />} className="size-4" />
					</>
				) : (
					<MantleIcon svg={<CopyIcon />} className="-ml-px" />
				)}
			</Component>
		);
	},
);
CopyButton.displayName = "ShikiCodeBlockCopyButton";

type ShikiCodeBlockExpanderButtonProps = Omit<
	ComponentProps<"button">,
	"children" | "aria-controls" | "aria-expanded"
> &
	WithAsChild;

/**
 * The (optional) expander button of the `ShikiCodeBlock`. Toggles the expanded
 * state of the code block. When present, the code block is collapsible.
 *
 * @example
 * ```tsx
 * <ShikiCodeBlock.Root>
 *   <ShikiCodeBlock.Body>
 *     <ShikiCodeBlock.Code value={mantleCode("typescript")`…`} />
 *   </ShikiCodeBlock.Body>
 *   <ShikiCodeBlock.ExpanderButton />
 * </ShikiCodeBlock.Root>
 * ```
 */
const ExpanderButton = forwardRef<ComponentRef<"button">, ShikiCodeBlockExpanderButtonProps>(
	({ asChild = false, className, onClick, ...props }, ref) => {
		const { codeId, isCodeExpanded, setIsCodeExpanded, setHasCodeExpander } =
			useContext(ShikiCodeBlockContext);

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
				<MantleIcon
					svg={<CaretDownIcon weight="bold" />}
					className={cx("size-4", isCodeExpanded && "rotate-180", "transition-all duration-150")}
				/>
			</Component>
		);
	},
);
ExpanderButton.displayName = "ShikiCodeBlockExpanderButton";

type ShikiCodeBlockIconProps = Omit<SvgAttributes, "children"> &
	(
		| {
				/**
				 * A custom icon SVG to display in the code block header.
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
				 * A custom icon SVG to display in the code block header.
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
 * A small icon for the `ShikiCodeBlock` header. Pass either a custom `svg`
 * or a `preset` value (not both).
 *
 * @example
 * ```tsx
 * <ShikiCodeBlock.Header>
 *   <ShikiCodeBlock.Icon preset="file" />
 *   <ShikiCodeBlock.Title>example.ts</ShikiCodeBlock.Title>
 * </ShikiCodeBlock.Header>
 * ```
 */
function ShikiCodeBlockIconComponent({
	className,
	preset,
	svg: _svgProp,
	...props
}: ShikiCodeBlockIconProps) {
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
	return <MantleIcon className={className} svg={svg} {...props} />;
}
ShikiCodeBlockIconComponent.displayName = "ShikiCodeBlockIcon";

/**
 * Shiki-powered code blocks with build-time syntax highlighting and zero browser bundle.
 *
 * Use `mantleCodeBlockPlugins()` to enable pre-rendering at build time.
 *
 * @example
 * ```tsx
 * <ShikiCodeBlock.Root>
 *   <ShikiCodeBlock.Header>
 *     <ShikiCodeBlock.Icon preset="file" />
 *     <ShikiCodeBlock.Title>example.ts</ShikiCodeBlock.Title>
 *   </ShikiCodeBlock.Header>
 *   <ShikiCodeBlock.Body>
 *     <ShikiCodeBlock.CopyButton />
 *     <ShikiCodeBlock.Code value={mantleCode("typescript")`const x = "hello";`} />
 *   </ShikiCodeBlock.Body>
 *   <ShikiCodeBlock.ExpanderButton />
 * </ShikiCodeBlock.Root>
 *
 * // Server-highlighted HTML fetched via an action route + React Query mutation
 * const highlightMutation = useMutation({
 *   mutationFn: async () => {
 *     const response = await fetch("/api/shiki-highlight", {
 *       method: "POST",
 *       headers: { "Content-Type": "application/json" },
 *       body: JSON.stringify({ code: source, language: "typescript" }),
 *     });
 *     return response.json();
 *   },
 * });
 *
 * const serverValue = createMantleCodeBlockValue({
 *   language: "typescript",
 *   code: source,
 *   preHtml: highlightMutation.data?.html,
 * });
 * ```
 */
const ShikiCodeBlock = {
	/**
	 * The root component of the `ShikiCodeBlock`.
	 */
	Root,
	/**
	 * The body of the `ShikiCodeBlock`. Contains `Code` and optional `CopyButton`.
	 */
	Body,
	/**
	 * The code content. Renders pre-highlighted Shiki HTML when the Vite plugin is active.
	 */
	Code,
	/**
	 * The optional copy button.
	 */
	CopyButton,
	/**
	 * The optional expander button for collapsible code blocks.
	 */
	ExpanderButton,
	/**
	 * The optional header slot for icon and title.
	 */
	Header,
	/**
	 * A small icon for the code block header. Use `preset` or `svg`.
	 */
	Icon: ShikiCodeBlockIconComponent,
	/**
	 * The optional title rendered in the header.
	 */
	Title,
} as const;

export {
	//,
	ShikiCodeBlock,
};
