import {
	PropsWithChildren,
	createContext,
	forwardRef,
	useContext,
	useEffect,
	useId,
	useMemo,
	useState,
} from "react";
import type { WithStyleProps } from "../types/with-style-props";
import { cx } from "../lib/cx";

type CodeBlockProps = PropsWithChildren & WithStyleProps;

type CodeBlockContextType = {
	registerLine: (id: string, line: string | undefined) => void;
	unregisterLine: (id: string) => void;
	getLineNumber: (id: string) => number | undefined;
};

const CodeBlockContext = createContext<CodeBlockContextType>({
	registerLine: () => {},
	unregisterLine: () => {},
	getLineNumber: () => undefined,
});

const CodeBlockCopyContext = createContext<string>("");

const CodeBlock = forwardRef<HTMLPreElement, CodeBlockProps>(({ className, children, style }, ref) => {
	type Line = {
		text: string;
		id: string;
	};
	const [lines, setLines] = useState<Array<Line>>([]);

	const value: CodeBlockContextType = useMemo(
		() => ({
			getLineNumber: (id) => {
				const result = lines.findIndex((line) => line.id === id);
				return result;
			},
			registerLine: (id, newLine) => {
				const text = newLine?.trim();
				if (!text) {
					return;
				}

				setLines((prevLines) => {
					// if the line already exists, do nothing
					if (prevLines.find((line) => line.id === id)) {
						return prevLines;
					}
					return [...prevLines, { text, id }];
				});
			},
			unregisterLine: (id) => {
				setLines((prevLines) => {
					const newLines = [...prevLines];
					// find the line index by id and remove it from the list
					const index = newLines.findIndex((line) => line.id === id);
					if (index !== -1) {
						newLines.splice(index, 1);
					}
					return newLines;
				});
			},
		}),
		[lines],
	);

	return (
		<CodeBlockContext.Provider value={value}>
			<CodeBlockCopyContext.Provider value={lines.map((line) => line.text).join("\n")}>
				<pre className={cx(className)} ref={ref} style={style}>
					{children}
				</pre>
			</CodeBlockCopyContext.Provider>
		</CodeBlockContext.Provider>
	);
});

const CodeBlockContent = forwardRef<HTMLSpanElement, PropsWithChildren & WithStyleProps>(
	({ children, className, style }, ref) => (
		<code className={cx("block", className)} ref={ref} style={style}>
			{children}
		</code>
	),
);

type CodeBlockLineProps = WithStyleProps & {
	children?: string | undefined;
	highlight?: boolean;
};

const CodeBlockLine = forwardRef<HTMLSpanElement, CodeBlockLineProps>(
	({ children, className, highlight = false, style }, ref) => {
		const id = useId();
		const ctx = useContext(CodeBlockContext);
		const lineNumber = ctx.getLineNumber(id);

		useEffect(() => {
			ctx.registerLine(id, children);

			return () => {
				ctx.unregisterLine(id);
			};
		});

		if (!children) {
			return null;
		}

		return (
			<span
				data-line-number={lineNumber}
				className={cx("block before:mr-1 before:content-[attr(data-line-number)]", className)}
				ref={ref}
				style={style}
			>
				{children}
			</span>
		);
	},
);

type CodeBlockCopyButtonProps = WithStyleProps & {
	onCopy?: (value: string) => void;
	onCopyError?: (error: unknown) => void;
};

const CodeBlockCopyButton = forwardRef<HTMLButtonElement, CodeBlockCopyButtonProps>(({ className, onCopy, onCopyError, style }, ref) => {
	const ctx = useContext(CodeBlockCopyContext);
	const [copied, setCopied] = useState(false);

	return (
		<button
			className={cx(className)}
			ref={ref}
			style={style}
			onClick={() => {
				window.navigator.clipboard
					.writeText(ctx)
					.then(() => {
						setCopied(true);
						onCopy?.(ctx);
						setTimeout(() => setCopied(false), 1000);
					})
					.catch((error) => {
						onCopyError?.(error);
					});
			}}
		>
			<CopyIcon />
		</button>
	);
});

export { CodeBlock, CodeBlockContent, CodeBlockCopyButton, CodeBlockLine };

const CopyIcon = ({ className, style }: WithStyleProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cx("inline leading-none", className)}
		height="1em"
		role="img"
		width="1em"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		viewBox="0 0 24 24"
		style={style}
	>
		<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
		<rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
	</svg>
);
