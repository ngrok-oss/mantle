import * as Primitive from "@ariakit/react";
import { Slot } from "@radix-ui/react-slot";
import {
	type ComponentProps,
	type ComponentPropsWithoutRef,
	type ComponentRef,
	type ElementRef,
	createContext,
	forwardRef,
	useContext,
} from "react";
import type { WithAsChild } from "../../types/as-child.js";
import { cx } from "../../utils/cx/cx.js";
import { Separator } from "../separator/separator.js";

type ComboboxProps = Primitive.ComboboxProviderProps;

/**
 * Root component for a combobox. Provides a combobox store that controls the state of Combobox components.
 *
 * @example
 * <Combobox>
 *   <ComboboxInput />
 *   <ComboboxContent>
 *     <ComboboxItem value="Apple" />
 *     <ComboboxItem value="Banana" />
 *   </ComboboxContent>
 * </Combobox>
 */
const Combobox = ({ children, ...props }: ComboboxProps) => {
	return (
		<Primitive.ComboboxProvider {...props}>
			{children}
		</Primitive.ComboboxProvider>
	);
};

type ComboboxInputProps = Omit<
	Primitive.ComboboxProps,
	"render" // we don't support a render prop for the combobox input
>;

/**
 * Renders a combobox input element that can be used to filter a list of items.
 *
 * @example
 * <Combobox>
 *   <ComboboxInput />
 *   <ComboboxContent>
 *     <ComboboxItem value="Apple" />
 *     <ComboboxItem value="Banana" />
 *   </ComboboxContent>
 * </Combobox>
 */
const ComboboxInput = forwardRef<ComponentRef<"input">, ComboboxInputProps>(
	({ autoSelect = "always", className, ...props }, ref) => {
		return (
			<Primitive.Combobox
				autoSelect={autoSelect}
				className={cx(
					"pointer-coarse:text-base h-9 text-sm",
					"bg-form relative block w-full rounded-md border px-3 py-2 border-form text-strong",
					"focus:outline-none focus-visible:outline-none focus-visible:ring-4 aria-expanded:ring-4",
					"aria-disabled:opacity-50",
					"hover:border-neutral-400",
					"focus:border-accent-600 focus-visible:ring-focus-accent aria-expanded:border-accent-600 aria-expanded:ring-focus-accent",
					"has-[:focus-visible]:border-accent-600 has-[:focus-visible]:ring-focus-accent",
					"data-validation-success:border-success-600 has-[:focus-visible]:data-validation-success:border-success-600 has-[:focus-visible]:data-validation-success:ring-focus-success",
					"data-validation-warning:border-warning-600 has-[:focus-visible]:data-validation-warning:border-warning-600 has-[:focus-visible]:data-validation-warning:ring-focus-warning",
					"data-validation-error:border-danger-600 has-[:focus-visible]:data-validation-error:border-danger-600 has-[:focus-visible]:data-validation-error:ring-focus-danger",
					"autofill:shadow-[inset_0_0_0px_1000px_hsl(var(--blue-50))] has-[:autofill]:bg-blue-50 has-[:autofill]:[-webkit-text-fill-color:hsl(var(--text-strong))]", // Autofill styling on the input itself and any children with autofill styling
					"placeholder:text-placeholder bg-transparent text-left autofill:shadow-[inset_0_0_0px_1000px_hsl(var(--blue-50))]",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
ComboboxInput.displayName = "ComboboxInput";

type ComboboxContentProps = Omit<Primitive.ComboboxPopoverProps, "render"> &
	WithAsChild;

/**
 * Renders a popover that contains combobox content, e.g. ComboboxItems, ComboboxGroups, and ComboboxSeparators.
 *
 * @example
 * <Combobox>
 *   <ComboboxInput />
 *   <ComboboxContent>
 *     <ComboboxItem value="Apple" />
 *     <ComboboxItem value="Banana" />
 *   </ComboboxContent>
 * </Combobox>
 */
const ComboboxContent = forwardRef<
	ComponentRef<typeof Primitive.ComboboxPopover>,
	ComboboxContentProps
>(
	(
		{
			asChild = false,
			children,
			className,
			sameWidth = true,
			unmountOnHide = true,
			...props
		},
		ref,
	) => {
		return (
			<Primitive.ComboboxPopover
				className={cx(
					"border-popover bg-popover relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md p-1 my-1",
					className,
				)}
				ref={ref}
				render={
					asChild
						? ({ ref, ...childProps }) => <Slot ref={ref} {...childProps} />
						: undefined
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
ComboboxContent.displayName = "ComboboxContent";

type ComboboxItemProps = Omit<Primitive.ComboboxItemProps, "render"> &
	WithAsChild;

const ComboboxItemValueContext = createContext<string | undefined>(undefined);

/**
 * Renders a combobox item inside a ComboboxContent component.
 *
 * @example
 * <Combobox>
 *   <ComboboxInput />
 *   <ComboboxContent>
 *     <ComboboxItem value="Apple" />
 *     <ComboboxItem value="Banana" />
 *     <ComboboxItem value="Orange" />
 *   </ComboboxContent>
 * </Combobox>
 */
const ComboboxItem = forwardRef<
	ComponentRef<typeof Primitive.ComboboxItem>,
	ComboboxItemProps
>(
	(
		{
			asChild = false,
			children,
			className,
			focusOnHover = true,
			setValueOnClick = true,
			value,
			...props
		},
		ref,
	) => {
		return (
			<ComboboxItemValueContext.Provider value={value}>
				<Primitive.ComboboxItem
					className={cx(
						"cursor-pointer rounded px-2 py-1.5 text-sm flex min-w-0 gap-2 items-center",
						"data-active-item:bg-popover-hover",
						"aria-disabled:opacity-50",
						className,
					)}
					focusOnHover={focusOnHover}
					ref={ref}
					render={
						asChild
							? ({ ref, ...childProps }) => <Slot ref={ref} {...childProps} />
							: undefined
					}
					{...props}
				>
					{children}
				</Primitive.ComboboxItem>
			</ComboboxItemValueContext.Provider>
		);
	},
);
ComboboxItem.displayName = "ComboboxItem";

type ComboboxGroupProps = Omit<Primitive.ComboboxGroupProps, "render"> &
	WithAsChild;

/**
 * Renders a group for ComboboxItem elements.
 *
 * Optionally, a ComboboxGroupLabel can be rendered as a child to provide a label for the group.
 *
 * You should only reach for this component when it semantically makes sense to group items together, such as when a label is needed.
 *
 * @example
 * <Combobox>
 *   <ComboboxInput />
 *   <ComboboxContent>
 *     <ComboboxGroup>
 *       <ComboboxGroupLabel>Fruits</ComboboxGroupLabel>
 *       <ComboboxItem value="Apple" />
 *       <ComboboxItem value="Banana" />
 *     </ComboboxGroup>
 *   </ComboboxContent>
 * </Combobox>
 */
const ComboboxGroup = forwardRef<
	ComponentRef<typeof Primitive.ComboboxGroup>,
	ComboboxGroupProps
>(({ asChild = false, children, className, ...props }, ref) => {
	return (
		<Primitive.ComboboxGroup
			className={cx("", className)}
			ref={ref}
			render={
				asChild
					? ({ ref, ...childProps }) => <Slot ref={ref} {...childProps} />
					: undefined
			}
			{...props}
		>
			{children}
		</Primitive.ComboboxGroup>
	);
});
ComboboxGroup.displayName = "ComboboxGroup";

type ComboboxGroupLabelProps = Omit<
	Primitive.ComboboxGroupLabelProps,
	"render"
> &
	WithAsChild;

/**
 * Renders a label in a combobox group.
 *
 * This component should be wrapped with ComboboxGroup so the aria-labelledby is correctly set on the group element.
 *
 * You should only reach for this component when it semantically makes sense to group items together, such as when a label is needed.
 *
 * @example
 * <Combobox>
 *   <ComboboxInput />
 *   <ComboboxContent>
 *     <ComboboxGroup>
 *       <ComboboxGroupLabel>Fruits</ComboboxGroupLabel>
 *       <ComboboxItem value="Apple" />
 *       <ComboboxItem value="Banana" />
 *     </ComboboxGroup>
 *   </ComboboxContent>
 * </Combobox>
 */
const ComboboxGroupLabel = forwardRef<
	ComponentRef<typeof Primitive.ComboboxGroupLabel>,
	ComboboxGroupLabelProps
>(({ asChild = false, children, className, ...props }, ref) => {
	return (
		<Primitive.ComboboxGroupLabel
			className={cx("text-muted px-2 py-1 text-xs font-medium", className)}
			ref={ref}
			render={
				asChild
					? ({ ref, ...childProps }) => <Slot ref={ref} {...childProps} />
					: undefined
			}
			{...props}
		>
			{children}
		</Primitive.ComboboxGroupLabel>
	);
});
ComboboxGroupLabel.displayName = "ComboboxGroupLabel";

type Props = Omit<ComponentProps<"span">, "children">;

/**
 * Highlight the match between the current ComboboxInput value and parent ComboboxItem value.
 *
 * Should only be used as a child of ComboboxItem.
 *
 * @example
 * <Combobox>
 *   <ComboboxInput />
 *   <ComboboxContent>
 *     <ComboboxItem value="Apple">
 *       🍎
 *       <ComboboxHighlightMatch>
 *     </ComboboxItem>
 *     <ComboboxItem value="Banana">
 *       🍌
 *       <ComboboxHighlightMatch>
 *     </ComboboxItem>
 *   </ComboboxContent>
 * </Combobox>
 */
function ComboboxHighlightMatch({ className: _className, ...props }: Props) {
	const value = useContext(ComboboxItemValueContext) ?? "";
	const combobox = Primitive.useComboboxContext();
	const query = Primitive.useStoreState(combobox, "value");
	const className = cx("text-strong font-normal flex-1 shrink-0", _className);

	if (!query) {
		return (
			<span className={className} {...props}>
				{value}
			</span>
		);
	}

	const lowerText = value.toLowerCase();
	const lowerQuery = query.toLowerCase();

	if (!lowerText.startsWith(lowerQuery)) {
		// No highlight if query is not at the start of the value
		return (
			<span className={className} {...props}>
				{value}
			</span>
		);
	}

	const prefix = value.substring(0, query.length);
	const suffix = value.substring(query.length);

	return (
		<span className={className} {...props}>
			<span data-highlighted className="font-bold">
				{prefix}
			</span>
			{suffix}
		</span>
	);
}

/**
 * Renders a separator between ComboboxItems or ComboboxGroups.
 *
 * @example
 * <Combobox>
 *   <ComboboxInput />
 *   <ComboboxContent>
 *     <ComboboxGroup>
 *       <ComboboxItem value="Apple" />
 *       <ComboboxItem value="Banana" />
 *     </ComboboxGroup>
 *     <ComboboxSeparator />
 *     <ComboboxItem>
 *       Click me!
 *     </ComboboxItem>
 *   </ComboboxContent>
 * </Combobox>
 */
const ComboboxSeparator = forwardRef<
	ElementRef<typeof Separator>,
	ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
	<Separator
		ref={ref}
		className={cx("-mx-1.25 my-1 w-auto", className)}
		{...props}
	/>
));
ComboboxSeparator.displayName = "ComboboxSeparator";

export {
	//,
	Combobox,
	ComboboxContent,
	ComboboxGroup,
	ComboboxGroupLabel,
	ComboboxHighlightMatch,
	ComboboxInput,
	ComboboxItem,
	ComboboxSeparator,
};
