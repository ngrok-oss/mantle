"use client";

import { CaretDownIcon } from "@phosphor-icons/react/CaretDown";
import {
	type ComponentPropsWithoutRef,
	type ComponentRef,
	type CSSProperties,
	type ReactNode,
	createContext,
	forwardRef,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import invariant from "tiny-invariant";
import { useIsomorphicLayoutEffect } from "../../hooks/use-isomorphic-layout-effect.js";
import { cx } from "../../utils/cx/cx.js";
import { Icon, type IconProps } from "../icon/icon.js";
import { Slot } from "../slot/index.js";
import { type AccordionType, isItemOpen, nextOpenValues, toOpenValues } from "./accordion-state.js";

/**
 * Invokes the consumer's `onValueChange` with the correctly-typed value for the
 * current `type`. Kept as a standalone function so the discriminated-union
 * narrowing on `props.type` (and thus the matching `onValueChange` signature) is
 * preserved without a type assertion.
 *
 * @example
 * emitValueChange({ type: "single", onValueChange }, ["a"]);        // onValueChange("a")
 * emitValueChange({ type: "multiple", onValueChange }, ["a", "b"]); // onValueChange(["a", "b"])
 */
function emitValueChange(props: AccordionRootProps, next: readonly string[]): void {
	if (props.type === "single") {
		props.onValueChange?.(next[0] ?? "");
	} else {
		props.onValueChange?.([...next]);
	}
}

/**
 * Feature-detects support for `hidden="until-found"` + the `beforematch` event,
 * which is what lets the browser's find-in-page reveal collapsed content. Safe
 * to call only on the client (after mount).
 *
 * @example
 * if (supportsBeforeMatch()) { node.setAttribute("hidden", "until-found"); }
 */
function supportsBeforeMatch(): boolean {
	return (
		typeof document !== "undefined" && document.body != null && "onbeforematch" in document.body
	);
}

type AccordionContextValue = {
	type: AccordionType;
	openValues: readonly string[];
	setItemOpen: (value: string, open: boolean) => void;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

/**
 * Reads the nearest {@link Root} context, throwing a helpful error if a part is
 * rendered outside of `Accordion.Root`.
 */
function useAccordionContext(component: string): AccordionContextValue {
	const context = useContext(AccordionContext);
	invariant(context, `\`${component}\` must be rendered within \`Accordion.Root\`.`);
	return context;
}

type AccordionItemContextValue = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

/**
 * Reads the nearest {@link Item} context, throwing a helpful error if a part is
 * rendered outside of `Accordion.Item`.
 */
function useAccordionItemContext(component: string): AccordionItemContextValue {
	const context = useContext(AccordionItemContext);
	invariant(context, `\`${component}\` must be rendered within \`Accordion.Item\`.`);
	return context;
}

/**
 * `"single"` mode props: at most one item open at a time. `value`/`defaultValue`
 * are the open item's value (`""` for none).
 */
type AccordionSingleProps = {
	type: "single";
	/** The controlled open item value (`""` for none). */
	value?: string;
	/** The initial open item value when uncontrolled. */
	defaultValue?: string;
	/** Called with the newly open item value (`""` when collapsed). */
	onValueChange?: (value: string) => void;
};

/**
 * `"multiple"` mode props: any number of items may be open. `value`/`defaultValue`
 * are the list of open item values.
 */
type AccordionMultipleProps = {
	type: "multiple";
	/** The controlled list of open item values. */
	value?: string[];
	/** The initial list of open item values when uncontrolled. */
	defaultValue?: string[];
	/** Called with the new list of open item values. */
	onValueChange?: (value: string[]) => void;
};

/**
 * Props for {@link Root}. A discriminated union on `type` so `value`,
 * `defaultValue`, and `onValueChange` are typed as a single string in
 * `"single"` mode and a string array in `"multiple"` mode.
 */
type AccordionRootProps = (AccordionSingleProps | AccordionMultipleProps) & {
	/**
	 * Render the single child element as the container instead of a `<div>`,
	 * merging the container's props onto it (Radix-style composition).
	 */
	asChild?: boolean;
	children?: ReactNode;
	className?: string;
	id?: string;
	style?: CSSProperties;
};

/**
 * A vertically stacked set of disclosure sections. The root owns the open/closed
 * state and provides it to its items.
 *
 * Built without a UI framework's collapsible: each section's collapsed content
 * stays in the DOM with `hidden="until-found"`, so the browser's find-in-page
 * (⌘F / Ctrl-F) can discover and auto-reveal matches inside closed sections (the
 * `beforematch` event syncs that reveal back into this component's state). Works
 * with controlled (`value` + `onValueChange`) and uncontrolled (`defaultValue`)
 * usage in both `"single"` and `"multiple"` modes.
 *
 * @see https://mantle.ngrok.com/components/accordion#api-accordion
 *
 * @example
 * <Accordion.Root type="single" defaultValue="shipping">
 *   <Accordion.Item value="shipping">
 *     <Accordion.Trigger>
 *       How long does shipping take?
 *       <Accordion.TriggerIcon />
 *     </Accordion.Trigger>
 *     <Accordion.Content>Two to five business days.</Accordion.Content>
 *   </Accordion.Item>
 * </Accordion.Root>
 */
const Root = forwardRef<ComponentRef<"div">, AccordionRootProps>((props, ref) => {
	const type = props.type;
	const isControlled = props.value != null;

	const [internalOpenValues, setInternalOpenValues] = useState<readonly string[]>(() =>
		toOpenValues(props.defaultValue),
	);
	const openValues = isControlled ? toOpenValues(props.value) : internalOpenValues;

	// `props` is intentionally a dependency: it carries the latest, correctly-typed
	// `onValueChange` (see `emitValueChange`). The memo only exists to satisfy
	// `react/jsx-no-constructed-context-values`; recomputing per render is fine at
	// accordion scale.
	const context = useMemo<AccordionContextValue>(() => {
		const setItemOpen = (value: string, open: boolean) => {
			const next = nextOpenValues(openValues, value, open, type);
			if (next === openValues) {
				return;
			}
			if (!isControlled) {
				setInternalOpenValues(next);
			}
			emitValueChange(props, next);
		};
		return { type, openValues, setItemOpen };
	}, [type, openValues, isControlled, props]);

	const containerProps = {
		"data-slot": "accordion",
		id: props.id,
		style: props.style,
		className: cx("w-full", props.className),
	};

	return (
		<AccordionContext.Provider value={context}>
			{props.asChild ? (
				<Slot ref={ref} {...containerProps}>
					{props.children}
				</Slot>
			) : (
				<div ref={ref} {...containerProps}>
					{props.children}
				</div>
			)}
		</AccordionContext.Provider>
	);
});
Root.displayName = "Accordion";

/**
 * A single collapsible section, rendered as a plain `<div role="group">` — the
 * same accessibility role the browser gives a native `<details>`. Derives its
 * open state from {@link Root}.
 *
 * Because the item is just a `<div>`, its header can be any layout — e.g. a flex
 * row with the {@link Trigger} alongside a separate, non-toggling action button.
 *
 * @see https://mantle.ngrok.com/components/accordion#api-accordion-item
 *
 * @example
 * <Accordion.Root type="single" defaultValue="item-1">
 *   <Accordion.Item value="item-1">
 *     <Accordion.Trigger>
 *       Is it accessible?
 *       <Accordion.TriggerIcon />
 *     </Accordion.Trigger>
 *     <Accordion.Content>
 *       Yes. It adheres to the WAI-ARIA disclosure pattern.
 *     </Accordion.Content>
 *   </Accordion.Item>
 * </Accordion.Root>
 */
const Item = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<"div"> & {
		/** The unique value identifying this item within its accordion. */
		value: string;
	}
>(({ className, children, value, ...props }, ref) => {
	const { openValues, setItemOpen } = useAccordionContext("Accordion.Item");
	const open = isItemOpen(openValues, value);

	const setOpen = useCallback(
		(next: boolean) => {
			setItemOpen(value, next);
		},
		[setItemOpen, value],
	);

	const itemContext = useMemo<AccordionItemContextValue>(
		() => ({ open, setOpen }),
		[open, setOpen],
	);

	return (
		<AccordionItemContext.Provider value={itemContext}>
			<div
				ref={ref}
				{...props}
				role="group"
				data-slot="accordion-item"
				data-state={open ? "open" : "closed"}
				className={cx("border-card-muted border-b last:border-b-0", className)}
			>
				{children}
			</div>
		</AccordionItemContext.Provider>
	);
});
Item.displayName = "AccordionItem";

/**
 * The interactive header that toggles its section, rendered as a `<button>` with
 * `aria-expanded` — the disclosure semantics a native `<summary>` provides, but
 * via a real button so the role is consistent across browsers (native summary's
 * role varies). Place the {@link TriggerIcon} as the last child so the default
 * `justify-between` layout pushes it to the trailing edge.
 *
 * @see https://mantle.ngrok.com/components/accordion#api-accordion-trigger
 *
 * @example
 * <Accordion.Root type="single" defaultValue="item-1">
 *   <Accordion.Item value="item-1">
 *     <Accordion.Trigger>
 *       Is it accessible?
 *       <Accordion.TriggerIcon />
 *     </Accordion.Trigger>
 *     <Accordion.Content>
 *       Yes. It adheres to the WAI-ARIA disclosure pattern.
 *     </Accordion.Content>
 *   </Accordion.Item>
 * </Accordion.Root>
 */
const Trigger = forwardRef<
	ComponentRef<"button">,
	Omit<ComponentPropsWithoutRef<"button">, "type">
>(({ className, children, onClick, ...props }, ref) => {
	const { open, setOpen } = useAccordionItemContext("Accordion.Trigger");

	return (
		<button
			ref={ref}
			type="button"
			{...props}
			data-slot="accordion-trigger"
			data-state={open ? "open" : "closed"}
			aria-expanded={open}
			className={cx(
				"group flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-sm font-medium outline-none",
				// `-mx-2 px-2` gives the focus ring (and tap target) horizontal breathing room
				// without shifting the trigger's content — the negative margin cancels the padding,
				// the same trick the tabs trigger uses. `rounded-md` matches Button/IconButton.
				"-mx-2 rounded-md px-2",
				"focus:outline-hidden focus-visible:ring-4 focus-visible:ring-focus-accent",
				className,
			)}
			onClick={(event) => {
				onClick?.(event);
				setOpen(!open);
			}}
		>
			{children}
		</button>
	);
});
Trigger.displayName = "AccordionTrigger";

// Hoisted so the default `svg` is a stable element reference instead of a new
// element allocated on every render.
const defaultTriggerIcon = <CaretDownIcon weight="bold" />;

/**
 * The icon that indicates the open/closed state of its {@link Trigger}. Defaults
 * to a downward caret that rotates 180° when the section is open. Pass `svg` to
 * override it with any icon (the rotation-on-open still applies; override
 * `className` to change that).
 *
 * @see https://mantle.ngrok.com/components/accordion#api-accordion-trigger-icon
 *
 * @example
 * // Default caret
 * <Accordion.Root type="single" defaultValue="item-1">
 *   <Accordion.Item value="item-1">
 *     <Accordion.Trigger>
 *       Is it accessible?
 *       <Accordion.TriggerIcon />
 *     </Accordion.Trigger>
 *     <Accordion.Content>
 *       Yes. It adheres to the WAI-ARIA disclosure pattern.
 *     </Accordion.Content>
 *   </Accordion.Item>
 * </Accordion.Root>
 *
 * @example
 * // Custom icon
 * import { PlusIcon } from "@phosphor-icons/react/Plus";
 *
 * <Accordion.TriggerIcon svg={<PlusIcon />} />
 */
const TriggerIcon = ({
	className,
	svg = defaultTriggerIcon,
	...props
}: Omit<IconProps, "svg"> & {
	/** The icon to render. Defaults to a downward caret that rotates open. */
	svg?: IconProps["svg"];
}) => (
	<Icon
		{...props}
		data-slot="accordion-trigger-icon"
		svg={svg}
		className={cx(
			"size-4 shrink-0 text-muted transition-transform duration-200 group-data-[state=open]:rotate-180",
			className,
		)}
	/>
);
TriggerIcon.displayName = "AccordionTriggerIcon";

/**
 * The collapsible body of an {@link Item}. Always rendered into the DOM; when
 * collapsed (in supporting browsers) it carries `hidden="until-found"` so its
 * text stays discoverable by the browser's find-in-page, and a `beforematch`
 * listener opens the section when the browser reveals a match. It is flow
 * content, so it may contain anything — including interactive elements.
 *
 * @see https://mantle.ngrok.com/components/accordion#api-accordion-content
 *
 * @example
 * <Accordion.Root type="single" defaultValue="item-1">
 *   <Accordion.Item value="item-1">
 *     <Accordion.Trigger>
 *       Is it accessible?
 *       <Accordion.TriggerIcon />
 *     </Accordion.Trigger>
 *     <Accordion.Content>
 *       Yes. It adheres to the WAI-ARIA disclosure pattern.
 *     </Accordion.Content>
 *   </Accordion.Item>
 * </Accordion.Root>
 */
const Content = forwardRef<ComponentRef<"div">, ComponentPropsWithoutRef<"div">>(
	({ className, children, ...props }, forwardedRef) => {
		const { open, setOpen } = useAccordionItemContext("Accordion.Content");
		const nodeRef = useRef<HTMLDivElement | null>(null);

		const assignRef = useCallback(
			(node: HTMLDivElement | null) => {
				nodeRef.current = node;
				if (typeof forwardedRef === "function") {
					forwardedRef(node);
				} else if (forwardedRef != null) {
					forwardedRef.current = node;
				}
			},
			[forwardedRef],
		);

		// When the browser is about to reveal a find-in-page match inside this
		// (collapsed) region, open the item so our state agrees and it stays open.
		useEffect(() => {
			const node = nodeRef.current;
			if (node == null || !supportsBeforeMatch()) {
				return;
			}
			const handleBeforeMatch = () => {
				// The browser reveals and highlights the match synchronously right after
				// this event, but our React-driven height (`data-[state=open]:h-auto`) only
				// applies a tick later. Without expanding now, the box is still
				// `h-0 overflow-hidden` when the browser paints its find highlight, so the
				// match opens but its highlight is clipped to zero height and lost. Removing
				// `hidden` restores `content-visibility`, so setting `height: auto` lays the
				// text out at full height before the highlight paints. The close branch of
				// the effect below clears this inline height so the slide animation resumes.
				node.removeAttribute("hidden");
				node.style.height = "auto";
				setOpen(true);
			};
			node.addEventListener("beforematch", handleBeforeMatch);
			return () => {
				node.removeEventListener("beforematch", handleBeforeMatch);
			};
		}, [setOpen]);

		// Toggle `hidden="until-found"` with the open state, imperatively: React types
		// `hidden` as boolean-only (no `"until-found"`) and has no `onBeforeMatch`, so
		// going through the JSX attribute is impossible without a type assertion.
		// Layout effect so the collapsed item is hidden before first paint (no flash).
		useIsomorphicLayoutEffect(() => {
			const node = nodeRef.current;
			if (node == null) {
				return;
			}
			if (open || !supportsBeforeMatch()) {
				node.removeAttribute("hidden");
			} else {
				node.setAttribute("hidden", "until-found");
				// Drop any inline height a find-in-page reveal set so the class-driven
				// `h-0 ↔ h-auto` open/close slide takes over again.
				node.style.height = "";
			}
		}, [open]);

		return (
			<div
				ref={assignRef}
				{...props}
				data-slot="accordion-content"
				data-state={open ? "open" : "closed"}
				className={cx(
					// Animate height 0 <-> auto via `interpolate-size` (Chromium only; other
					// engines snap, which is fine — the slide is a progressive enhancement and
					// find-in-page works regardless). `content-visibility` transitions with
					// `allow-discrete` so the content stays rendered through the close slide
					// before `hidden="until-found"` skips it; `overflow-hidden` clips.
					"h-0 overflow-hidden text-sm transition-[height,content-visibility] duration-200 ease-out [interpolate-size:allow-keywords] transition-discrete data-[state=open]:h-auto motion-reduce:transition-none",
					className,
				)}
			>
				<div className="pb-4">{children}</div>
			</div>
		);
	},
);
Content.displayName = "AccordionContent";

/**
 * A vertically stacked set of disclosure sections styled after the shadcn /
 * ngrok.com accordion.
 *
 * Its defining feature: collapsed content is never removed from the DOM — it
 * stays put with `hidden="until-found"` — so the browser's find-in-page (⌘F /
 * Ctrl-F) can find text inside closed sections and auto-expand them (synced via
 * the `beforematch` event). Built on plain `<div>`/`<button>` elements, so a
 * section header can be any layout, including a non-toggling action button
 * beside the trigger.
 *
 * @see https://mantle.ngrok.com/components/accordion
 *
 * @example
 * Composition:
 * ```
 * Accordion.Root
 * └── Accordion.Item
 *     ├── Accordion.Trigger
 *     │   └── Accordion.TriggerIcon
 *     └── Accordion.Content
 * ```
 *
 * @example
 * <Accordion.Root type="single" defaultValue="item-1">
 *   <Accordion.Item value="item-1">
 *     <Accordion.Trigger>
 *       Is it accessible?
 *       <Accordion.TriggerIcon />
 *     </Accordion.Trigger>
 *     <Accordion.Content>
 *       Yes. It adheres to the WAI-ARIA disclosure pattern.
 *     </Accordion.Content>
 *   </Accordion.Item>
 * </Accordion.Root>
 */
const Accordion = {
	/**
	 * The root that owns open/closed state. See {@link Root}.
	 *
	 * @example
	 * <Accordion.Root type="single" defaultValue="item-1">
	 *   <Accordion.Item value="item-1">
	 *     <Accordion.Trigger>
	 *       Is it accessible?
	 *       <Accordion.TriggerIcon />
	 *     </Accordion.Trigger>
	 *     <Accordion.Content>
	 *       Yes. It adheres to the WAI-ARIA disclosure pattern.
	 *     </Accordion.Content>
	 *   </Accordion.Item>
	 * </Accordion.Root>
	 */
	Root,
	/**
	 * A single collapsible section. See {@link Item}.
	 *
	 * @example
	 * <Accordion.Root type="single" defaultValue="item-1">
	 *   <Accordion.Item value="item-1">
	 *     <Accordion.Trigger>
	 *       Is it accessible?
	 *       <Accordion.TriggerIcon />
	 *     </Accordion.Trigger>
	 *     <Accordion.Content>
	 *       Yes. It adheres to the WAI-ARIA disclosure pattern.
	 *     </Accordion.Content>
	 *   </Accordion.Item>
	 * </Accordion.Root>
	 */
	Item,
	/**
	 * The `<button>` header that toggles a section. See {@link Trigger}.
	 *
	 * @example
	 * <Accordion.Root type="single" defaultValue="item-1">
	 *   <Accordion.Item value="item-1">
	 *     <Accordion.Trigger>
	 *       Is it accessible?
	 *       <Accordion.TriggerIcon />
	 *     </Accordion.Trigger>
	 *     <Accordion.Content>
	 *       Yes. It adheres to the WAI-ARIA disclosure pattern.
	 *     </Accordion.Content>
	 *   </Accordion.Item>
	 * </Accordion.Root>
	 */
	Trigger,
	/**
	 * The caret indicating open/closed state. See {@link TriggerIcon}.
	 *
	 * @example
	 * <Accordion.Root type="single" defaultValue="item-1">
	 *   <Accordion.Item value="item-1">
	 *     <Accordion.Trigger>
	 *       Is it accessible?
	 *       <Accordion.TriggerIcon />
	 *     </Accordion.Trigger>
	 *     <Accordion.Content>
	 *       Yes. It adheres to the WAI-ARIA disclosure pattern.
	 *     </Accordion.Content>
	 *   </Accordion.Item>
	 * </Accordion.Root>
	 */
	TriggerIcon,
	/**
	 * The collapsible, find-in-page-discoverable body. See {@link Content}.
	 *
	 * @example
	 * <Accordion.Root type="single" defaultValue="item-1">
	 *   <Accordion.Item value="item-1">
	 *     <Accordion.Trigger>
	 *       Is it accessible?
	 *       <Accordion.TriggerIcon />
	 *     </Accordion.Trigger>
	 *     <Accordion.Content>
	 *       Yes. It adheres to the WAI-ARIA disclosure pattern.
	 *     </Accordion.Content>
	 *   </Accordion.Item>
	 * </Accordion.Root>
	 */
	Content,
} as const;

export {
	//,
	Accordion,
};
