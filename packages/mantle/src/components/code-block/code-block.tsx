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
import { escapeHtml } from "./escape-html.js";
import type { Mode } from "./resolve-pre-rendered-props.js";
import type { MantleCodeBlockValue } from "./mantle-code.js";

type CodeBlockContextType = {
	codeId: string | undefined;
	copyTextRef: { current: string };
	hasCodeExpander: boolean;
	isCodeExpanded: boolean;
	registerCodeId: (id: string) => void;
	setHasCodeExpander: (value: boolean) => void;
	setIsCodeExpanded: Dispatch<SetStateAction<boolean>>;
	unregisterCodeId: (id: string) => void;
};

const CodeBlockContext = createContext<CodeBlockContextType | null>(null);

function useCodeBlockContext(): CodeBlockContextType {
	const context = useContext(CodeBlockContext);
	assert(context != null, "CodeBlock subcomponents must be rendered within a <CodeBlock.Root>.");
	return context;
}

/**
 * Shiki-powered code blocks with build-time syntax highlighting and zero browser bundle.
 * This is the root component for all CodeBlock components.
 *
 * @example
 * ```tsx
 * <CodeBlock.Root>
 *   <CodeBlock.Header>
 *     <CodeBlock.Icon preset="file" />
 *     <CodeBlock.Title>example.ts</CodeBlock.Title>
 *   </CodeBlock.Header>
 *   <CodeBlock.Body>
 *     <CodeBlock.CopyButton />
 *     <CodeBlock.Code value={mantleCode("typescript")`const x = "hello";`} />
 *   </CodeBlock.Body>
 *   <CodeBlock.ExpanderButton />
 * </CodeBlock.Root>
 * ```
 */
const Root = forwardRef<ComponentRef<"div">, Omit<ComponentProps<"div">, "align"> & WithAsChild>(
	({ asChild = false, className, ...props }, ref) => {
		const copyTextRef = useRef("");
		const [hasCodeExpander, setHasCodeExpander] = useState(false);
		const [isCodeExpanded, setIsCodeExpanded] = useState(false);
		const [codeId, setCodeId] = useState<string | undefined>(undefined);

		const registerCodeId = useRef((id: string) => {
			setCodeId((old) => {
				assert(old == null, "You can only render a single CodeBlock.Code within a CodeBlock.");
				return id;
			});
		}).current;

		const unregisterCodeId = useRef((id: string) => {
			setCodeId((old) => {
				assert(old === id, "You can only render a single CodeBlock.Code within a CodeBlock.");
				return undefined;
			});
		}).current;

		const context: CodeBlockContextType = useMemo(
			() =>
				({
					codeId,
					copyTextRef,
					hasCodeExpander,
					isCodeExpanded,
					registerCodeId,
					setHasCodeExpander,
					setIsCodeExpanded,
					unregisterCodeId,
				}) as const,
			[codeId, hasCodeExpander, isCodeExpanded, registerCodeId, unregisterCodeId],
		);

		const Component = asChild ? Slot : "div";

		return (
			<CodeBlockContext.Provider value={context}>
				<Component
					data-slot="code-block"
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
Root.displayName = "CodeBlock";

/**
 * The body of the `CodeBlock`. This is where `CodeBlock.Code` and
 * the optional `CodeBlock.CopyButton` are rendered.
 *
 * @example
 * ```tsx
 * <CodeBlock.Root>
 *   <CodeBlock.Body>
 *     <CodeBlock.CopyButton />
 *     <CodeBlock.Code value={mantleCode("typescript")`const x = "hello";`} />
 *   </CodeBlock.Body>
 * </CodeBlock.Root>
 * ```
 */
const Body = forwardRef<ComponentRef<"div">, ComponentProps<"div"> & WithAsChild>(
	({ asChild = false, className, ...props }, ref) => {
		const Component = asChild ? Slot : "div";
		return <Component className={cx("relative", className)} ref={ref} {...props} />;
	},
);
Body.displayName = "CodeBlockBody";

/**
 * Matches `SHIKI_VAL_<index>` placeholders injected by the Vite plugin for
 * interpolated template expressions. Hoisted to module scope to avoid
 * re-creating the regex on every substitution call.
 */
const LEGACY_SHIKI_VAL_PATTERN = /SHIKI_VAL_(\d+)/g;

function escapeForRegExp(value: string): string {
	return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getTemplateValPattern(preValToken: string | undefined): RegExp {
	if (preValToken == null || preValToken.length === 0) {
		return LEGACY_SHIKI_VAL_PATTERN;
	}

	return new RegExp(`${escapeForRegExp(preValToken)}(\\d+)__`, "g");
}

function substituteTemplateVals(
	input: string,
	vals: unknown[],
	preValToken: string | undefined,
	mapValue: (value: unknown) => string,
): string {
	if (preValToken == null) {
		if (!input.includes("SHIKI_VAL_")) {
			return input;
		}
	} else if (!input.includes(preValToken)) {
		return input;
	}

	return input.replaceAll(getTemplateValPattern(preValToken), (match, indexText: string) => {
		const index = Number.parseInt(indexText, 10);
		if (Number.isNaN(index) || index < 0 || index >= vals.length) {
			return match;
		}
		return mapValue(vals[index]);
	});
}

function substitutePreVals(html: string, vals: unknown[], preValToken: string | undefined): string {
	return substituteTemplateVals(html, vals, preValToken, (value) => escapeHtml(String(value)));
}

function substitutePreValsPlainText(
	text: string,
	vals: unknown[],
	preValToken: string | undefined,
): string {
	return substituteTemplateVals(text, vals, preValToken, (value) => String(value));
}

type CodeBlockCodeProps = Omit<ComponentProps<"pre">, "children"> & {
	/**
	 * The code value produced by `mantleCode("lang")` tagged template.
	 * Contains pre-rendered Shiki HTML (when the Vite plugin is active) and
	 * the original code string for the copy button.
	 */
	value: MantleCodeBlockValue;
};

/**
 * The `CodeBlock` content. Renders pre-highlighted code from `mantleCode()`.
 *
 * `value["~preHtml"]` must be provided by Mantle's Vite plugin or server highlighter.
 * Runtime highlighting and runtime line decoration are intentionally unsupported.
 *
 * @example
 * ```tsx
 * <CodeBlock.Body>
 *   <CodeBlock.CopyButton />
 *   <CodeBlock.Code value={mantleCode("typescript")`const x = "hello";`} />
 * </CodeBlock.Body>
 * ```
 */
const Code = forwardRef<ComponentRef<"pre">, CodeBlockCodeProps>(
	({ className, style, tabIndex, value, ...props }, ref) => {
		const id = useId();
		const { copyTextRef, hasCodeExpander, isCodeExpanded, registerCodeId, unregisterCodeId } =
			useCodeBlockContext();
		const {
			language,
			code,
			"~preValToken": __preValToken,
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
					? substitutePreValsPlainText(code, __preVals, __preValToken)
					: code,
			[__preValToken, __preVals, code],
		);

		useEffect(() => {
			copyTextRef.current = copyText;
		}, [copyText, copyTextRef]);

		useEffect(() => {
			registerCodeId(id);

			return () => {
				unregisterCodeId(id);
			};
		}, [id, registerCodeId, unregisterCodeId]);

		const renderedHtml = useMemo(() => {
			if (__preHtml == null) {
				return undefined;
			}
			return __preVals != null && __preVals.length > 0
				? substitutePreVals(__preHtml, __preVals, __preValToken)
				: __preHtml;
		}, [__preHtml, __preValToken, __preVals]);

		const isPreRendered = renderedHtml != null;
		const displayHtml = renderedHtml ?? escapeHtml(copyText);

		return (
			<pre
				aria-expanded={hasCodeExpander ? isCodeExpanded : undefined}
				className={cx(
					"scrollbar overflow-x-auto overflow-y-hidden py-4",
					!isPreRendered && "pr-14",
					"data-[mantle-line-numbers~='false']:pl-4",
					"text-mono m-0 font-mono",
					"aria-collapsed:max-h-[13.6rem]",
					className,
				)}
				data-highlighted={isPreRendered ? "true" : "false"}
				data-lang={language}
				data-mantle-highlight-lines={
					isPreRendered && effectiveHighlightLines != null && effectiveHighlightLines.length > 0
						? effectiveHighlightLines.join(",")
						: undefined
				}
				data-mantle-line-number-start={
					isPreRendered && effectiveShowLineNumbers ? String(effectiveLineNumberStart) : 1
				}
				data-mantle-line-numbers={isPreRendered && effectiveShowLineNumbers ? "true" : "false"}
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
					dangerouslySetInnerHTML={{ __html: displayHtml }}
				/>
			</pre>
		);
	},
);
Code.displayName = "CodeBlockCode";

/**
 * The (optional) header slot of the `CodeBlock`. This is where
 * `CodeBlock.Icon` and `CodeBlock.Title` are rendered.
 *
 * @example
 * ```tsx
 * <CodeBlock.Root>
 *   <CodeBlock.Header>
 *     <CodeBlock.Icon preset="file" />
 *     <CodeBlock.Title>example.ts</CodeBlock.Title>
 *   </CodeBlock.Header>
 * </CodeBlock.Root>
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
Header.displayName = "CodeBlockHeader";

/**
 * The (optional) title of the `CodeBlock`. Renders as `h3` by default;
 * use `asChild` to render a different element.
 *
 * @example
 * ```tsx
 * <CodeBlock.Header>
 *   <CodeBlock.Title>example.ts</CodeBlock.Title>
 * </CodeBlock.Header>
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
Title.displayName = "CodeBlockTitle";

type CodeBlockCopyButtonProps = Omit<ComponentProps<"button">, "children" | "type"> &
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
 * The (optional) copy button of the `CodeBlock`. Copies the code content
 * to the clipboard when clicked.
 *
 * @example
 * ```tsx
 * <CodeBlock.Body>
 *   <CodeBlock.CopyButton />
 *   <CodeBlock.Code value={mantleCode("typescript")`…`} />
 * </CodeBlock.Body>
 * ```
 */
const CopyButton = forwardRef<ComponentRef<"button">, CodeBlockCopyButtonProps>(
	({ asChild = false, className, onCopy, onCopyError, onClick, ...props }, ref) => {
		const { copyTextRef } = useCodeBlockContext();
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
						const text = copyTextRef.current;
						await copyToClipboard(text);
						onCopy?.(text);
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
CopyButton.displayName = "CodeBlockCopyButton";

type CodeBlockExpanderButtonProps = Omit<
	ComponentProps<"button">,
	"children" | "aria-controls" | "aria-expanded"
> &
	WithAsChild;

/**
 * The (optional) expander button of the `CodeBlock`. Toggles the expanded
 * state of the code block. When present, the code block is collapsible.
 *
 * @example
 * ```tsx
 * <CodeBlock.Root>
 *   <CodeBlock.Body>
 *     <CodeBlock.Code value={mantleCode("typescript")`…`} />
 *   </CodeBlock.Body>
 *   <CodeBlock.ExpanderButton />
 * </CodeBlock.Root>
 * ```
 */
const ExpanderButton = forwardRef<ComponentRef<"button">, CodeBlockExpanderButtonProps>(
	({ asChild = false, className, onClick, ...props }, ref) => {
		const { codeId, isCodeExpanded, setIsCodeExpanded, setHasCodeExpander } = useCodeBlockContext();

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
ExpanderButton.displayName = "CodeBlockExpanderButton";

type CodeBlockIconProps = Omit<SvgAttributes, "children"> &
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
 * A small icon for the `CodeBlock` header. Pass either a custom `svg`
 * or a `preset` value (not both).
 *
 * @example
 * ```tsx
 * <CodeBlock.Header>
 *   <CodeBlock.Icon preset="file" />
 *   <CodeBlock.Title>example.ts</CodeBlock.Title>
 * </CodeBlock.Header>
 * ```
 */
function CodeBlockIconComponent({
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
	return <MantleIcon className={className} svg={svg} {...props} />;
}
CodeBlockIconComponent.displayName = "CodeBlockIcon";

/**
 * Shiki-powered code blocks with build-time syntax highlighting and zero browser bundle.
 *
 * Use `mantleCodeBlockPlugins()` to enable pre-rendering at build time.
 *
 * @example
 * ```tsx
 * <CodeBlock.Root>
 *   <CodeBlock.Header>
 *     <CodeBlock.Icon preset="file" />
 *     <CodeBlock.Title>example.ts</CodeBlock.Title>
 *   </CodeBlock.Header>
 *   <CodeBlock.Body>
 *     <CodeBlock.CopyButton />
 *     <CodeBlock.Code value={mantleCode("typescript")`const x = "hello";`} />
 *   </CodeBlock.Body>
 *   <CodeBlock.ExpanderButton />
 * </CodeBlock.Root>
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
const CodeBlock = {
	/**
	 * The root component of the `CodeBlock`.
	 */
	Root,
	/**
	 * The body of the `CodeBlock`. Contains `Code` and optional `CopyButton`.
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
	Icon: CodeBlockIconComponent,
	/**
	 * The optional title rendered in the header.
	 */
	Title,
} as const;

export {
	//,
	CodeBlock,
};
