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

type MultiSelectProps = Primitive.ComboboxProviderProps<string[]>;

/**
 * Root component for a multi-select combobox. Provides state management for
 * selecting multiple values with typeahead filtering.
 *
 * @example
 * ```tsx
 * <MultiSelect.Root>
 *   <MultiSelect.Trigger>
 *     <MultiSelect.TagValues placeholder="Select items..." />
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
	return (
		<TriggerRefContext.Provider value={triggerRef}>
			<Primitive.ComboboxProvider<string[]> defaultSelectedValue={defaultSelectedValue} {...props}>
				{children}
			</Primitive.ComboboxProvider>
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
 *     <MultiSelect.TagValues placeholder="Select items..." />
 *   </MultiSelect.Trigger>
 *   <MultiSelect.Content>
 *     <MultiSelect.Item value="apple">Apple</MultiSelect.Item>
 *   </MultiSelect.Content>
 * </MultiSelect.Root>
 * ```
 */
const Trigger = forwardRef<HTMLDivElement, MultiSelectTriggerProps>(
	(
		{ "aria-invalid": _ariaInvalid, className, children, validation: _validation, ...props },
		ref,
	) => {
		const triggerRef = useContext(TriggerRefContext);
		const isInvalid = _ariaInvalid != null && _ariaInvalid !== "false";
		const validation = isInvalid
			? "error"
			: typeof _validation === "function"
				? _validation()
				: _validation;
		const ariaInvalid = _ariaInvalid ?? validation === "error";

		return (
			<div
				aria-invalid={ariaInvalid}
				className={cx(
					"font-sans text-sm",
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

type TagValuesContextValue = {
	handleTagKeyDown: (event: KeyboardEvent<HTMLSpanElement>, index: number) => void;
	removeValue: (value: string) => void;
	selectedArray: string[];
};

const TagValuesContext = createContext<TagValuesContextValue | null>(null);

type TagOptionProps = Omit<ComponentProps<"span">, "children"> & {
	/**
	 * The value to display in the tag label.
	 */
	value: string;
	/**
	 * Called when the remove button is clicked. If omitted and the component is rendered
	 * inside `MultiSelect.TagValues`, the value is removed from the selection via context.
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
	({ className, value, onRemove, locked = false, ...props }, ref) => {
		const ctx = useContext(TagValuesContext);
		const index = ctx?.selectedArray.indexOf(value) ?? -1;
		const handleRemove = onRemove ?? (() => ctx?.removeValue(value));

		return (
			<span
				ref={ref}
				role="option"
				aria-selected
				tabIndex={-1}
				data-locked={locked || undefined}
				className={cx(
					"bg-neutral-100 border border-neutral-300 rounded-xs text-strong inline-flex items-center gap-1 pl-1.5 pr-1 py-0.5 text-xs font-semibold font-mono",
					"focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-focus-accent",
					className,
				)}
				onKeyDown={(event) => {
					if (locked && (event.key === "Backspace" || event.key === "Delete")) {
						event.preventDefault();
						return;
					}
					ctx?.handleTagKeyDown(event, index);
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
						"hover:bg-neutral-200 hover:text-strong text-strong/25 rounded-sm p-px size-4",
						"disabled:pointer-events-none",
					)}
					onClick={(event) => {
						event.stopPropagation();
						handleRemove();
					}}
					onMouseDown={(event) => {
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

type MultiSelectTagValuesProps = Omit<Primitive.ComboboxProps, "render"> & {
	/**
	 * Placeholder text shown when no values are selected.
	 */
	placeholder?: string;
	/**
	 * Render function for custom tag content. Receives the value string and
	 * a remove callback. If not provided, a default tag with an X button is rendered.
	 */
	renderTag?: (value: string, remove: () => void) => React.ReactNode;
};

/**
 * Renders the selected values as removable tags along with the combobox
 * input for filtering. Place this inside `MultiSelect.Trigger`.
 *
 * @example
 * ```tsx
 * <MultiSelect.Root>
 *   <MultiSelect.Trigger>
 *     <MultiSelect.TagValues placeholder="Select items..." />
 *   </MultiSelect.Trigger>
 *   <MultiSelect.Content>
 *     <MultiSelect.Item value="apple">Apple</MultiSelect.Item>
 *   </MultiSelect.Content>
 * </MultiSelect.Root>
 * ```
 */
const TagValues = forwardRef<ComponentRef<"input">, MultiSelectTagValuesProps>(
	({ className, placeholder, renderTag, ...props }, ref) => {
		const store = Primitive.useComboboxContext();
		const selectedValues = Primitive.useStoreState(store, "selectedValue") as string[] | undefined;
		const selectedArray = useMemo(() => selectedValues ?? [], [selectedValues]);
		const tagRefs = useRef<Map<string, HTMLSpanElement>>(new Map());
		const inputRef = useRef<HTMLInputElement | null>(null);
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
				if (value === undefined) {
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
		}, []);

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

		const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
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
		};

		const setInputRef = useCallback(
			(node: HTMLInputElement | null) => {
				inputRef.current = node;
				if (typeof ref === "function") {
					ref(node);
				} else if (ref) {
					ref.current = node;
				}
			},
			[ref],
		);

		const contextValue = useMemo(
			() => ({ handleTagKeyDown, removeValue, selectedArray }),
			[handleTagKeyDown, removeValue, selectedArray],
		);

		return (
			<TagValuesContext.Provider value={contextValue}>
				{selectedArray.map((value) =>
					renderTag ? (
						renderTag(value, () => removeValue(value))
					) : (
						<TagOption
							key={value}
							ref={(node) => {
								if (node) {
									tagRefs.current.set(value, node);
								} else {
									tagRefs.current.delete(value);
								}
							}}
							value={value}
						/>
					),
				)}
				<Primitive.Combobox
					autoSelect
					className={cx(
						"pointer-coarse:text-base min-w-20 flex-1 border-0 bg-transparent text-sm outline-hidden",
						"placeholder:text-placeholder",
						className,
					)}
					onKeyDown={handleInputKeyDown}
					placeholder={selectedArray.length === 0 ? placeholder : undefined}
					ref={setInputRef}
					onFocusVisible={() => {
						store?.show();
					}}
					{...props}
				/>
			</TagValuesContext.Provider>
		);
	},
);
TagValues.displayName = "MultiSelectTagValues";

type MultiSelectContentProps = Omit<Primitive.ComboboxPopoverProps, "render"> & WithAsChild;

/**
 * Renders a popover that contains multi-select content, such as items, groups,
 * and separators. Opens below the trigger.
 *
 * @example
 * ```tsx
 * <MultiSelect.Root>
 *   <MultiSelect.Trigger>
 *     <MultiSelect.TagValues placeholder="Select items..." />
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
 *     <MultiSelect.TagValues placeholder="Select items..." />
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
	 *     <MultiSelect.TagValues placeholder="Select items..." />
	 *   </MultiSelect.Trigger>
	 *   <MultiSelect.Content>
	 *     <MultiSelect.Item value="apple">Apple</MultiSelect.Item>
	 *   </MultiSelect.Content>
	 * </MultiSelect.Root>
	 * ```
	 */
	Root,
	/**
	 * The trigger container for the multi-select. Wraps the input and selected
	 * value tags in a styled container.
	 *
	 * @example
	 * ```tsx
	 * <MultiSelect.Trigger>
	 *   <MultiSelect.TagValues placeholder="Select items..." />
	 * </MultiSelect.Trigger>
	 * ```
	 */
	Trigger,
	/**
	 * Renders the selected values as removable tags along with the combobox
	 * input for filtering.
	 *
	 * @example
	 * ```tsx
	 * <MultiSelect.TagValues placeholder="Select items..." />
	 * ```
	 */
	TagValues,
	/**
	 * The default tag rendered inside `MultiSelect.TagValues` for each selected value.
	 * Displays the value label with a remove button and keyboard navigation support.
	 *
	 * @example
	 * ```tsx
	 * <MultiSelect.TagOption
	 *   value="apple"
	 *   index={0}
	 *   onKeyDown={handleTagKeyDown}
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
