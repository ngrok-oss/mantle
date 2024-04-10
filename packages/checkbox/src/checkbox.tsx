import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { cx } from "../../cx";
import { WithStyleProps } from "../../types";

type Props = ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

const Checkbox = forwardRef<ElementRef<typeof CheckboxPrimitive.Root>, Props>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cx(
			"size-4 shrink-0 appearance-none rounded border border-form bg-form focus:border-accent-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus-accent disabled:cursor-not-allowed disabled:opacity-50 data-state-checked:border-transparent data-state-checked:bg-filled-accent data-state-indeterminate:border-transparent data-state-indeterminate:bg-filled-accent",
			className,
		)}
		{...props}
	>
		<CheckboxPrimitive.Indicator className="hidden items-center justify-center leading-none text-on-filled data-state-checked:flex">
			<CheckedIcon className="size-3" />
		</CheckboxPrimitive.Indicator>
		<CheckboxPrimitive.Indicator className="hidden items-center justify-center text-on-filled data-state-indeterminate:flex">
			<IndeterminateIcon className="size-3" />
		</CheckboxPrimitive.Indicator>
		<CheckboxPrimitive.Indicator />
	</CheckboxPrimitive.Root>
));
Checkbox.displayName = "Checkbox";

export { Checkbox };

const CheckedIcon = ({ className, style }: WithStyleProps) => (
	<svg className={className} style={style} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L6.70711 11.7071C6.31658 12.0976 5.68342 12.0976 5.29289 11.7071L3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289C3.68342 7.90237 4.31658 7.90237 4.70711 8.29289L6 9.58579L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289Z"
			fill="currentColor"
		/>
	</svg>
);

const IndeterminateIcon = ({ className, style }: WithStyleProps) => (
	<svg className={className} style={style} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M4 8C4 7.44772 4.44772 7 5 7H11C11.5523 7 12 7.44772 12 8C12 8.55228 11.5523 9 11 9H5C4.44772 9 4 8.55228 4 8Z"
			fill="currentColor"
		/>
	</svg>
);
