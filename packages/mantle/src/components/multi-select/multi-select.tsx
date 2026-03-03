"use client";

import * as Primitive from "@ariakit/react";
import { CheckIcon } from "@phosphor-icons/react/Check";
import { XIcon } from "@phosphor-icons/react/X";
import type {
	ComponentProps,
	ComponentPropsWithoutRef,
	ComponentRef,
	KeyboardEvent,
	RefObject,
} from "react";
import { createContext, forwardRef, useCallback, useContext, useMemo, useRef } from "react";
import type { WithAsChild } from "../../types/as-child.js";
import { cx } from "../../utils/cx/cx.js";
import { Icon } from "../icon/icon.js";
import type { WithValidation } from "../input/types.js";
import { Separator } from "../separator/separator.js";
import { Slot } from "../slot/index.js";

const TriggerRefContext = createContext<RefObject<HTMLDivElement | null>>({ current: null });

/**
 * Bridges keyboard-nav state between `TagValues` and `Input`, which are siblings in the tree
 * and cannot communicate via a context that either one provides — it must come from a shared
 * ancestor (`Root`). Both refs are written by one side and read by the other:
 *   - `onInputKeyDownRef`: written by `TagValues`, called by `Input` on keydown
 *   - `inputRef`: written by `Input` (registers its DOM node), read by `TagValues` (to focus it)
 */
type TagBridgeContextValue = {
	onInputKeyDownRef: { current: ((event: KeyboardEvent<HTMLInputElement>) => void) | undefined };
	inputRef: { current: HTMLInputElement | null };
};

const TagBridgeContext = createContext<TagBridgeContextValue>({
	onInputKeyDownRef: { current: undefined },
	inputRef: { current: null },
});

type MultiSelectProps = Primitive.ComboboxProviderProps<string[]>;

/**
 * Root component for a multi-select combobox. Provides state management for
 * selecting multiple values with typeahead filtering.
 *
 * @example
 * ```tsx
 * <MultiSelect.Root>
 *   <MultiSelect.Trigger>
 *     <MultiSelect.TagValues />
 *     <MultiSelect.Input placeholder="Select items..." />
 *   </MultiSelect.Trigger>
 *   <MultiSelect.Content>
 *     <MultiSelect.Item value="apple">Apple</MultiSelect.Item>
 *     <MultiSelect.Item value="banana">Banana</MultiSelect.Item>
 *   </MultiSelect.Content>
 * </MultiSelect.Root>
 * ```
 */
const Root = ({ children, defaultSelectedValue = [], ...props }: MultiSelectProps) => {
	const triggerRef = useRef<HTMLDivElement | null>(null);
	const onInputKeyDownRef = useRef<((event: KeyboardEvent<HTMLInputElement>) => void) | undefined>(
		undefined,
	);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const tagBridge = useMemo(() => ({ onInputKeyDownRef, inputRef }), []);
	return (
		<TriggerRefContext.Provider value={triggerRef}>
			<TagBridgeContext.Provider value={tagBridge}>
				<Primitive.ComboboxProvider<string[]>
					defaultSelectedValue={defaultSelectedValue}
					{...props}
				>
					{children}
				</Primitive.ComboboxProvider>
			</TagBridgeContext.Provider>
		</TriggerRefContext.Provider>
	);
};
Root.displayName = "MultiSelect";

type MultiSelectTriggerProps = ComponentPropsWithoutRef<"div"> & WithValidation;

/**
 * The trigger container for the multi-select. Wraps the input and selected
 * value tags in a styled container that looks like a form input.
 *
 * @example
 * ```tsx
 * <MultiSelect.Root>
 *   <MultiSelect.Trigger>
 *     <MultiSelect.TagValues />
 *     <MultiSelect.Input placeholder="Select items..." />
 *   </MultiSelect.Trigger>
 *   <MultiSelect.Content>
 *     <MultiSelect.Item value="apple">Apple</MultiSelect.Item>
 *   </MultiSelect.Content>
 * </MultiSelect.Root>
 * ```
 */
const Trigger = forwardRef<HTMLDivElement, MultiSelectTriggerProps>(
	(
		{
			"aria-invalid": _ariaInvalid,
			className,
			children,
			onMouseDown,
			validation: _validation,
			...props
		},
		ref,
	) => {
		const triggerRef = useContext(TriggerRefContext);
		const { inputRef } = useContext(TagBridgeContext);
		const isInvalid = _ariaInvalid != null && _ariaInvalid !== "false";
		const validation = isInvalid
			? "error"
			: typeof _validation === "function"
				? _validation()
				: _validation;

		return (
			<div
				role="group"
				className={cx(
					"cursor-text select-none font-sans text-sm",
					"border-form bg-form text-strong flex w-full flex-wrap items-center gap-1 rounded-md border px-2 py-1.5",
					"has-focus:outline-hidden has-focus-within:ring-4 has-aria-expanded:ring-4",
					"has-focus-within:border-accent-600 has-focus-within:ring-focus-accent has-aria-expanded:border-accent-600 has-aria-expanded:ring-focus-accent",
					"hover:border-neutral-400",
					"data-validation-success:border-success-600 data-validation-success:has-focus-within:border-success-600 data-validation-success:has-focus-within:ring-focus-success data-validation-success:has-aria-expanded:border-success-600 data-validation-success:has-aria-expanded:ring-focus-success",
					"data-validation-warning:border-warning-600 data-validation-warning:has-focus-within:border-warning-600 data-validation-warning:has-focus-within:ring-focus-warning data-validation-warning:has-aria-expanded:border-warning-600 data-validation-warning:has-aria-expanded:ring-focus-warning",
					"data-validation-error:border-danger-600 data-validation-error:has-focus-within:border-danger-600 data-validation-error:has-focus-within:ring-focus-danger data-validation-error:has-aria-expanded:border-danger-600 data-validation-error:has-aria-expanded:ring-focus-danger",
					className,
				)}
				data-validation={validation || undefined}
				onMouseDown={(event) => {
					const target = event.target as HTMLElement;
					// When clicking on non-interactive areas (padding, flex gaps between tags), prevent the
					// default mousedown behavior (which would cause text selection) and explicitly focus the
					// input. Clicks on buttons, the input itself, or tag spans are handled by those elements.
					if (!target.closest("button, input, [role='option']")) {
						event.preventDefault();
						inputRef.current?.focus();
					}
					onMouseDown?.(event);
				}}
				ref={(node) => {
					triggerRef.current = node;
					if (typeof ref === "function") {
						ref(node);
					} else if (ref) {
						ref.current = node;
					}
				}}
				{...props}
			>
				{children}
			</div>
		);
	},
);
Trigger.displayName = "MultiSelectTrigger";

type TagOptionProps = Omit<ComponentProps<"span">, "children"> & {
	/**
	 * The value to display in the tag label.
	 */
	value: string;
	/**
	 * Called when the remove button is clicked.
	 */
	onRemove?: () => void;
	/**
	 * When true, the tag cannot be removed. The remove button is disabled and
	 * Delete/Backspace key presses are ignored while the tag is focused.
	 */
	locked?: boolean;
};

/**
 * The default tag rendered inside `MultiSelect.TagValues` for each selected value.
 * Displays the value label with a remove button and full keyboard navigation support.
 *
 * Use this when building a custom `TagValues`-like component and you want the
 * default tag chrome with consistent styling.
 *
 * @example
 * ```tsx
 * <MultiSelect.TagOption value="apple" />
 * ```
 */
const TagOption = forwardRef<HTMLSpanElement, TagOptionProps>(
	({ className, value, onRemove, locked = false, onKeyDown, ...props }, ref) => {
		return (
			<span
				ref={ref}
				role="option"
				aria-selected
				tabIndex={-1}
				data-locked={locked || undefined}
				className={cx(
					"cursor-default bg-neutral-100 border border-neutral-300 rounded-xs text-strong inline-flex items-center gap-1 pl-1.5 pr-1 py-0.5 text-xs font-semibold font-mono",
					"focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-focus-accent",
					className,
				)}
				onKeyDown={(event) => {
					if (locked && (event.key === "Backspace" || event.key === "Delete")) {
						event.preventDefault();
						return;
					}
					onKeyDown?.(event);
				}}
				{...props}
			>
				{value}
				<button
					type="button"
					aria-label={`Remove ${value}`}
					tabIndex={-1}
					disabled={locked}
					className={cx(
						"cursor-pointer hover:bg-neutral-200 hover:text-strong text-strong/25 rounded-sm p-px size-4",
						"disabled:pointer-events-none disabled:cursor-default",
					)}
					onClick={(event) => {
						// Prevent the click from bubbling to the trigger, which would reopen or refocus the combobox
						event.stopPropagation();
						onRemove?.();
					}}
					onMouseDown={(event) => {
						// Prevent the input from losing focus on click, which would close the popover before the remove fires
						event.preventDefault();
					}}
				>
					<Icon svg={<XIcon weight="bold" />} className="size-3" />
				</button>
			</span>
		);
	},
);
TagOption.displayName = "MultiSelectTagOption";

/**
 * Props passed to the children render function of `MultiSelect.TagValues`.
 * Spread these onto `MultiSelect.TagOption` (or your own tag component) to
 * get the value, remove handler, and ref-based keyboard-nav registration
 * all wired up automatically.
 */
type TagRenderProps = TagOptionProps & {
	/** Ref callback — forward this to the tag element to enable keyboard navigation between tags. */
	ref: (node: HTMLSpanElement | null) => void;
};

type MultiSelectTagValuesProps = {
	/**
	 * Optional render function for each tag. Receives `{ value, onRemove, ref }` — spread
	 * these onto `MultiSelect.TagOption` (or your own element) for full keyboard-nav support.
	 * When omitted, the default `MultiSelect.TagOption` is rendered for each selected value.
	 *
	 * @example
	 * ```tsx
	 * <MultiSelect.TagValues>
	 *   {(props) => (
	 *     <MultiSelect.TagOption key={props.value} {...props} locked={props.value === "global"} />
	 *   )}
	 * </MultiSelect.TagValues>
	 * ```
	 */
	children?: (props: TagRenderProps) => React.ReactNode;
};

/**
 * Renders the selected values as removable tags. Place this inside
 * `MultiSelect.Trigger`, followed by `MultiSelect.Input`.
 *
 * @example
 * ```tsx
 * <MultiSelect.Root>
 *   <MultiSelect.Trigger>
 *     <MultiSelect.TagValues />
 *     <MultiSelect.Input placeholder="Select items..." />
 *   </MultiSelect.Trigger>
 *   <MultiSelect.Content>
 *     <MultiSelect.Item value="apple">Apple</MultiSelect.Item>
 *   </MultiSelect.Content>
 * </MultiSelect.Root>
 * ```
 */
const TagValues = ({ children }: MultiSelectTagValuesProps) => {
	const store = Primitive.useComboboxContext();
	const selectedValues = Primitive.useStoreState(store, "selectedValue") as string[] | undefined;
	const selectedArray = useMemo(() => selectedValues ?? [], [selectedValues]);
	const tagRefs = useRef<Map<string, HTMLSpanElement>>(new Map());
	const { onInputKeyDownRef, inputRef } = useContext(TagBridgeContext);
	const focusedTagIndexRef = useRef<number>(-1);

	const removeValue = useCallback(
		(value: string) => {
			if (store) {
				const current = (store.getState().selectedValue ?? []) as string[];
				store.setSelectedValue(current.filter((v) => v !== value));
			}
		},
		[store],
	);

	const focusTag = useCallback(
		(index: number) => {
			const value = selectedArray[index];
			if (value == null) {
				return;
			}
			const tagEl = tagRefs.current.get(value);
			if (tagEl) {
				tagEl.focus();
				focusedTagIndexRef.current = index;
			}
		},
		[selectedArray],
	);

	const focusInput = useCallback(() => {
		focusedTagIndexRef.current = -1;
		inputRef.current?.focus();
	}, [inputRef]);

	const handleTagKeyDown = useCallback(
		(event: KeyboardEvent<HTMLSpanElement>, index: number) => {
			const value = selectedArray[index];
			switch (event.key) {
				case "ArrowLeft": {
					event.preventDefault();
					if (index > 0) {
						focusTag(index - 1);
					}
					break;
				}
				case "ArrowRight": {
					event.preventDefault();
					if (index < selectedArray.length - 1) {
						focusTag(index + 1);
					} else {
						focusInput();
					}
					break;
				}
				case "Backspace":
				case "Delete": {
					event.preventDefault();
					if (value !== undefined) {
						removeValue(value);
						// After removal, the array shifts. Focus the next logical tag or the input.
						if (event.key === "Backspace") {
							if (index > 0) {
								// Focus the previous tag (will have same index - 1 after removal)
								// We need to wait for the next render, so use requestAnimationFrame
								const prevIndex = index - 1;
								requestAnimationFrame(() => focusTag(prevIndex));
							} else {
								requestAnimationFrame(() => {
									// If there are remaining tags, focus the first one (now at index 0)
									if (selectedArray.length > 1) {
										focusTag(0);
									} else {
										focusInput();
									}
								});
							}
						} else {
							// Delete: move focus right
							requestAnimationFrame(() => {
								// index stays the same since the item at `index` was removed and the next one slides in
								if (index < selectedArray.length - 1) {
									focusTag(index);
								} else {
									focusInput();
								}
							});
						}
					}
					break;
				}
				default: {
					// If a printable character is typed while a tag is focused, jump to input
					if (event.key.length === 1 && !event.ctrlKey && !event.metaKey) {
						focusInput();
					}
					break;
				}
			}
		},
		[selectedArray, focusTag, focusInput, removeValue],
	);

	const handleInputKeyDown = useCallback(
		(event: KeyboardEvent<HTMLInputElement>) => {
			if (
				event.key === "ArrowLeft" &&
				event.currentTarget.selectionStart === 0 &&
				selectedArray.length > 0
			) {
				event.preventDefault();
				focusTag(selectedArray.length - 1);
				return;
			}
			if (
				event.key === "Backspace" &&
				event.currentTarget.value === "" &&
				selectedArray.length > 0
			) {
				const lastValue = selectedArray[selectedArray.length - 1];
				if (lastValue !== undefined && !tagRefs.current.get(lastValue)?.dataset.locked) {
					removeValue(lastValue);
				}
			}
		},
		[selectedArray, focusTag, removeValue],
	);

	// Write the latest handler into the bridge ref so Input can call it via onKeyDown.
	// Assigned directly during render (safe — refs are mutable and don't trigger re-renders).
	onInputKeyDownRef.current = handleInputKeyDown;

	return (
		<>
			{selectedArray.map((value, index) => {
				const tagOptionProps: TagRenderProps = {
					value,
					onRemove: () => removeValue(value),
					ref: (node: HTMLSpanElement | null) => {
						if (node) {
							tagRefs.current.set(value, node);
						} else {
							tagRefs.current.delete(value);
						}
					},
					onKeyDown: (event: KeyboardEvent<HTMLSpanElement>) => handleTagKeyDown(event, index),
				};

				if (children) {
					return children(tagOptionProps);
				}

				return <TagOption key={value} {...tagOptionProps} />;
			})}
		</>
	);
};
TagValues.displayName = "MultiSelectTagValues";

type MultiSelectInputProps = Omit<Primitive.ComboboxProps, "render">;

/**
 * The combobox input for filtering items. Place this inside `MultiSelect.Trigger`,
 * after `MultiSelect.TagValues`.
 *
 * @example
 * ```tsx
 * <MultiSelect.Root>
 *   <MultiSelect.Trigger>
 *     <MultiSelect.TagValues />
 *     <MultiSelect.Input placeholder="Select items..." />
 *   </MultiSelect.Trigger>
 *   <MultiSelect.Content>
 *     <MultiSelect.Item value="apple">Apple</MultiSelect.Item>
 *   </MultiSelect.Content>
 * </MultiSelect.Root>
 * ```
 */
const Input = forwardRef<ComponentRef<"input">, MultiSelectInputProps>(
	({ className, onFocus, onKeyDown, placeholder, ...props }, ref) => {
		const store = Primitive.useComboboxContext();
		const { onInputKeyDownRef, inputRef } = useContext(TagBridgeContext);
		const selectedValues = Primitive.useStoreState(store, "selectedValue") as string[] | undefined;
		const hasSelectedValues = (selectedValues?.length ?? 0) > 0;

		const setRef = useCallback(
			(node: HTMLInputElement | null) => {
				// Register this input's DOM node in the bridge so TagValues can focus it for keyboard nav.
				inputRef.current = node;
				if (typeof ref === "function") {
					ref(node);
				} else if (ref) {
					ref.current = node;
				}
			},
			[ref, inputRef],
		);

		return (
			<Primitive.Combobox
				autoSelect
				className={cx(
					"pointer-coarse:text-base min-w-20 flex-1 select-text border-0 bg-transparent text-sm outline-hidden",
					"placeholder:select-none placeholder:text-placeholder",
					className,
				)}
				onKeyDown={(event) => {
					onInputKeyDownRef.current?.(event);
					onKeyDown?.(event);
				}}
				onFocus={(event) => {
					store?.show();
					onFocus?.(event);
				}}
				placeholder={hasSelectedValues ? undefined : placeholder}
				ref={setRef}
				{...props}
			/>
		);
	},
);
Input.displayName = "MultiSelectInput";

type MultiSelectContentProps = Omit<Primitive.ComboboxPopoverProps, "render"> & WithAsChild;

/**
 * Renders a popover that contains multi-select content, such as items, groups,
 * and separators. Opens below the trigger.
 *
 * @example
 * ```tsx
 * <MultiSelect.Root>
 *   <MultiSelect.Trigger>
 *     <MultiSelect.TagValues />
 *     <MultiSelect.Input placeholder="Select items..." />
 *   </MultiSelect.Trigger>
 *   <MultiSelect.Content>
 *     <MultiSelect.Item value="apple">Apple</MultiSelect.Item>
 *     <MultiSelect.Item value="banana">Banana</MultiSelect.Item>
 *   </MultiSelect.Content>
 * </MultiSelect.Root>
 * ```
 */
const Content = forwardRef<ComponentRef<"div">, MultiSelectContentProps>(
	(
		{ asChild = false, children, className, sameWidth = true, unmountOnHide = true, ...props },
		ref,
	) => {
		const triggerRef = useContext(TriggerRefContext);
		const internalRef = useRef<HTMLDivElement | null>(null);

		const getAnchorRect = useCallback(() => {
			return triggerRef.current?.getBoundingClientRect() ?? null;
		}, [triggerRef]);

		return (
			<Primitive.ComboboxPopover
				className={cx(
					"border-popover bg-popover relative z-50 max-h-96 min-w-32 scrollbar overflow-y-scroll overflow-x-hidden overscroll-y-none rounded-md border shadow-md pt-1 font-sans flex flex-col gap-px focus:outline-hidden",
					className,
				)}
				getAnchorRect={getAnchorRect}
				gutter={4}
				ref={(node) => {
					internalRef.current = node;
					if (typeof ref === "function") {
						ref(node);
					} else if (ref) {
						ref.current = node;
					}
				}}
				render={
					asChild ? ({ ref, ...childProps }) => <Slot ref={ref} {...childProps} /> : undefined
				}
				sameWidth={sameWidth}
				unmountOnHide={unmountOnHide}
				{...props}
			>
				{children}
			</Primitive.ComboboxPopover>
		);
	},
);
Content.displayName = "MultiSelectContent";

type MultiSelectItemProps = Omit<Primitive.ComboboxItemProps, "render"> & WithAsChild;

/**
 * Renders a selectable item inside a `MultiSelect.Content` component.
 * Items display a checkbox indicator when selected.
 *
 * @example
 * ```tsx
 * <MultiSelect.Content>
 *   <MultiSelect.Item value="apple">Apple</MultiSelect.Item>
 *   <MultiSelect.Item value="banana">Banana</MultiSelect.Item>
 * </MultiSelect.Content>
 * ```
 */
const Item = forwardRef<ComponentRef<"div">, MultiSelectItemProps>(
	({ asChild = false, children, className, focusOnHover = true, value, ...props }, ref) => {
		return (
			<Primitive.ComboboxItem
				className={cx(
					"mx-1 cursor-pointer rounded-md px-2 py-1.5 text-strong text-sm font-normal flex min-w-0 items-center justify-between gap-2",
					"[[role=option]+&]:mt-px",
					"data-active-item:bg-active-menu-item",
					"aria-disabled:opacity-50",
					"aria-selected:bg-selected-menu-item aria-selected:data-active-item:bg-active-selected-menu-item",
					className,
				)}
				focusOnHover={focusOnHover}
				ref={ref}
				render={
					asChild ? ({ ref, ...childProps }) => <Slot ref={ref} {...childProps} /> : undefined
				}
				resetValueOnSelect
				value={value}
				{...props}
			>
				{children}
				<Primitive.ComboboxItemCheck>
					<Icon svg={<CheckIcon weight="bold" />} className="size-4 text-accent-600" />
				</Primitive.ComboboxItemCheck>
			</Primitive.ComboboxItem>
		);
	},
);
Item.displayName = "MultiSelectItem";

type MultiSelectGroupProps = Omit<Primitive.ComboboxGroupProps, "render"> & WithAsChild;

/**
 * Renders a group for MultiSelect.Item elements.
 *
 * @example
 * ```tsx
 * <MultiSelect.Content>
 *   <MultiSelect.Group>
 *     <MultiSelect.GroupLabel>Fruits</MultiSelect.GroupLabel>
 *     <MultiSelect.Item value="apple">Apple</MultiSelect.Item>
 *     <MultiSelect.Item value="banana">Banana</MultiSelect.Item>
 *   </MultiSelect.Group>
 * </MultiSelect.Content>
 * ```
 */
const Group = forwardRef<ComponentRef<"div">, MultiSelectGroupProps>(
	({ asChild = false, children, ...props }, ref) => {
		return (
			<Primitive.ComboboxGroup
				className="mx-1"
				ref={ref}
				render={
					asChild ? ({ ref, ...childProps }) => <Slot ref={ref} {...childProps} /> : undefined
				}
				{...props}
			>
				{children}
			</Primitive.ComboboxGroup>
		);
	},
);
Group.displayName = "MultiSelectGroup";

type MultiSelectGroupLabelProps = Omit<Primitive.ComboboxGroupLabelProps, "render"> & WithAsChild;

/**
 * Renders a label in a multi-select group.
 *
 * @example
 * ```tsx
 * <MultiSelect.Content>
 *   <MultiSelect.Group>
 *     <MultiSelect.GroupLabel>Fruits</MultiSelect.GroupLabel>
 *     <MultiSelect.Item value="apple">Apple</MultiSelect.Item>
 *   </MultiSelect.Group>
 * </MultiSelect.Content>
 * ```
 */
const GroupLabel = forwardRef<ComponentRef<"div">, MultiSelectGroupLabelProps>(
	({ asChild = false, children, className, ...props }, ref) => {
		return (
			<Primitive.ComboboxGroupLabel
				className={cx("text-muted px-2 py-1 text-xs font-medium", className)}
				ref={ref}
				render={
					asChild ? ({ ref, ...childProps }) => <Slot ref={ref} {...childProps} /> : undefined
				}
				{...props}
			>
				{children}
			</Primitive.ComboboxGroupLabel>
		);
	},
);
GroupLabel.displayName = "MultiSelectGroupLabel";

type MultiSelectGroupDescriptionProps = ComponentPropsWithoutRef<"p">;

/**
 * Renders a description below a `MultiSelect.GroupLabel` inside a `MultiSelect.Group`.
 * Provides context about the group's purpose or constraints.
 *
 * @example
 * ```tsx
 * <MultiSelect.Group>
 *   <MultiSelect.GroupLabel>Regional Aliases</MultiSelect.GroupLabel>
 *   <MultiSelect.GroupDescription>
 *     Include all points of presence that are geographically within the region.
 *   </MultiSelect.GroupDescription>
 *   <MultiSelect.Item value="global">global</MultiSelect.Item>
 * </MultiSelect.Group>
 * ```
 */
const GroupDescription = forwardRef<HTMLParagraphElement, MultiSelectGroupDescriptionProps>(
	({ className, children, ...props }, ref) => {
		return (
			<p className={cx("text-muted px-2 pb-1 text-xs", className)} ref={ref} {...props}>
				{children}
			</p>
		);
	},
);
GroupDescription.displayName = "MultiSelectGroupDescription";

/**
 * Renders a separator between MultiSelect.Items or MultiSelect.Groups.
 *
 * @example
 * ```tsx
 * <MultiSelect.Content>
 *   <MultiSelect.Group>
 *     <MultiSelect.Item value="apple">Apple</MultiSelect.Item>
 *   </MultiSelect.Group>
 *   <MultiSelect.Separator />
 *   <MultiSelect.Group>
 *     <MultiSelect.Item value="carrot">Carrot</MultiSelect.Item>
 *   </MultiSelect.Group>
 * </MultiSelect.Content>
 * ```
 */
const MultiSelectSeparatorComponent = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
	<Separator ref={ref} className={cx("my-1 w-auto", className)} {...props} />
));
MultiSelectSeparatorComponent.displayName = "MultiSelectSeparator";

type MultiSelectEmptyProps = ComponentPropsWithoutRef<"div">;

/**
 * Renders a message when no items match the current filter.
 *
 * @example
 * ```tsx
 * <MultiSelect.Content>
 *   {matches.length === 0 && (
 *     <MultiSelect.Empty>No results found</MultiSelect.Empty>
 *   )}
 * </MultiSelect.Content>
 * ```
 */
const Empty = forwardRef<HTMLDivElement, MultiSelectEmptyProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div
				className={cx("mx-1 text-muted px-2 py-6 text-center text-sm", className)}
				ref={ref}
				role="presentation"
				{...props}
			>
				{children}
			</div>
		);
	},
);
Empty.displayName = "MultiSelectEmpty";

type MultiSelectContentFooterProps = ComponentPropsWithoutRef<"div">;

/**
 * Renders a sticky footer inside `MultiSelect.Content`. Automatically pins to
 * the bottom when the popover opens below the trigger, or to the top when it
 * flips above — and switches the separator border accordingly.
 *
 * @example
 * ```tsx
 * <MultiSelect.Content>
 *   <MultiSelect.Item value="apple">Apple</MultiSelect.Item>
 *   <MultiSelect.ContentFooter>
 *     <p>Upgrade to unlock more options.</p>
 *     <Button>Upgrade</Button>
 *   </MultiSelect.ContentFooter>
 * </MultiSelect.Content>
 * ```
 */
const ContentFooter = forwardRef<HTMLDivElement, MultiSelectContentFooterProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cx("bg-popover sticky bottom-0 border-t border-popover", className)}
				{...props}
			>
				{children}
			</div>
		);
	},
);
ContentFooter.displayName = "MultiSelectContentFooter";

/**
 * A multi-select combobox that allows users to select multiple values with
 * typeahead filtering. Selected values are displayed as removable tags.
 *
 * Built on top of Ariakit's Combobox primitives with full keyboard support
 * and WAI-ARIA compliance.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/combobox/
 * @see https://ariakit.org/components/combobox
 *
 * @example
 * ```tsx
 * <MultiSelect.Root>
 *   <MultiSelect.Trigger>
 *     <MultiSelect.TagValues />
 *     <MultiSelect.Input placeholder="Select items..." />
 *   </MultiSelect.Trigger>
 *   <MultiSelect.Content>
 *     <MultiSelect.Item value="apple">Apple</MultiSelect.Item>
 *     <MultiSelect.Item value="banana">Banana</MultiSelect.Item>
 *     <MultiSelect.Item value="cherry">Cherry</MultiSelect.Item>
 *   </MultiSelect.Content>
 * </MultiSelect.Root>
 * ```
 */
const MultiSelect = {
	/**
	 * Root component for a multi-select combobox. Provides state management for
	 * selecting multiple values with typeahead filtering.
	 *
	 * @example
	 * ```tsx
	 * <MultiSelect.Root>
	 *   <MultiSelect.Trigger>
	 *     <MultiSelect.TagValues />
	 *     <MultiSelect.Input placeholder="Select items..." />
	 *   </MultiSelect.Trigger>
	 *   <MultiSelect.Content>
	 *     <MultiSelect.Item value="apple">Apple</MultiSelect.Item>
	 *   </MultiSelect.Content>
	 * </MultiSelect.Root>
	 * ```
	 */
	Root,
	/**
	 * The trigger container for the multi-select. Wraps the tags and input
	 * in a styled container.
	 *
	 * @example
	 * ```tsx
	 * <MultiSelect.Trigger>
	 *   <MultiSelect.TagValues />
	 *   <MultiSelect.Input placeholder="Select items..." />
	 * </MultiSelect.Trigger>
	 * ```
	 */
	Trigger,
	/**
	 * Renders the selected values as removable tags. Place this inside
	 * `MultiSelect.Trigger`, followed by `MultiSelect.Input`. Optionally
	 * accepts a children render function to customize each tag.
	 *
	 * @example
	 * ```tsx
	 * // Default tags
	 * <MultiSelect.TagValues />
	 *
	 * // Custom tags via children render function
	 * <MultiSelect.TagValues>
	 *   {(props) => (
	 *     <MultiSelect.TagOption key={props.value} {...props} locked={props.value === "global"} />
	 *   )}
	 * </MultiSelect.TagValues>
	 * ```
	 */
	TagValues,
	/**
	 * The combobox input for filtering items. Place this inside
	 * `MultiSelect.Trigger`, after `MultiSelect.TagValues`.
	 *
	 * @example
	 * ```tsx
	 * <MultiSelect.Input placeholder="Select items..." />
	 * ```
	 */
	Input,
	/**
	 * The default tag rendered inside `MultiSelect.TagValues` for each selected value.
	 * Displays the value label with a remove button and keyboard navigation support.
	 *
	 * @example
	 * ```tsx
	 * <MultiSelect.TagOption
	 *   value="apple"
	 *   onRemove={() => removeValue("apple")}
	 * />
	 * ```
	 */
	TagOption,
	/**
	 * Renders a popover that contains multi-select content.
	 *
	 * @example
	 * ```tsx
	 * <MultiSelect.Content>
	 *   <MultiSelect.Item value="apple">Apple</MultiSelect.Item>
	 * </MultiSelect.Content>
	 * ```
	 */
	Content,
	/**
	 * Renders a sticky footer inside `MultiSelect.Content`. Pins to the bottom
	 * when the popover opens below the trigger, or to the top when it flips above.
	 *
	 * @example
	 * ```tsx
	 * <MultiSelect.ContentFooter>
	 *   <p>Upgrade to unlock more options.</p>
	 * </MultiSelect.ContentFooter>
	 * ```
	 */
	ContentFooter,
	/**
	 * Renders a selectable item with a checkbox indicator inside a `MultiSelect.Content`.
	 *
	 * @example
	 * ```tsx
	 * <MultiSelect.Item value="apple">Apple</MultiSelect.Item>
	 * ```
	 */
	Item,
	/**
	 * Renders a group for MultiSelect.Item elements.
	 *
	 * @example
	 * ```tsx
	 * <MultiSelect.Group>
	 *   <MultiSelect.GroupLabel>Fruits</MultiSelect.GroupLabel>
	 *   <MultiSelect.Item value="apple">Apple</MultiSelect.Item>
	 * </MultiSelect.Group>
	 * ```
	 */
	Group,
	/**
	 * Renders a label in a multi-select group.
	 *
	 * @example
	 * ```tsx
	 * <MultiSelect.GroupLabel>Fruits</MultiSelect.GroupLabel>
	 * ```
	 */
	GroupLabel,
	/**
	 * Renders a description below a `MultiSelect.GroupLabel` inside a `MultiSelect.Group`.
	 *
	 * @example
	 * ```tsx
	 * <MultiSelect.GroupDescription>
	 *   Include all points of presence within the region.
	 * </MultiSelect.GroupDescription>
	 * ```
	 */
	GroupDescription,
	/**
	 * Renders a separator between items or groups.
	 *
	 * @example
	 * ```tsx
	 * <MultiSelect.Separator />
	 * ```
	 */
	Separator: MultiSelectSeparatorComponent,
	/**
	 * Renders a message when no items match the current filter.
	 *
	 * @example
	 * ```tsx
	 * <MultiSelect.Empty>No results found</MultiSelect.Empty>
	 * ```
	 */
	Empty,
} as const;

export {
	//,
	MultiSelect,
};
