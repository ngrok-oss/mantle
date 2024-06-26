import { X } from "@phosphor-icons/react/X";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementRef, HTMLAttributes } from "react";
import { IconButton } from "../../button";
import { cx } from "../../cx";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = forwardRef<
	ElementRef<typeof SheetPrimitive.Overlay>,
	ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Overlay
		className={cx(
			"fixed inset-0 z-40 bg-overlay backdrop-blur-sm data-state-closed:animate-out data-state-closed:fade-out-0 data-state-open:animate-in data-state-open:fade-in-0",
			className,
		)}
		{...props}
		ref={ref}
	/>
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const SheetVariants = cva(
	"fixed z-40 flex flex-col bg-dialog shadow-lg transition ease-in-out data-state-closed:duration-100 data-state-closed:animate-out data-state-open:duration-100 data-state-open:animate-in",
	{
		variants: {
			side: {
				top: "inset-x-0 top-0 border-b border-dialog data-state-closed:slide-out-to-top data-state-open:slide-in-from-top",
				bottom:
					"inset-x-0 bottom-0 border-t border-dialog data-state-closed:slide-out-to-bottom data-state-open:slide-in-from-bottom",
				left: "inset-y-0 left-0 h-full w-full border-r border-dialog data-state-closed:slide-out-to-left data-state-open:slide-in-from-left sm:max-w-sm",
				right:
					"inset-y-0 right-0 h-full w-full border-l border-dialog data-state-closed:slide-out-to-right data-state-open:slide-in-from-right sm:max-w-sm",
			},
		},
		defaultVariants: {
			side: "right",
		},
	},
);

type SheetContentProps = {} & ComponentPropsWithoutRef<typeof SheetPrimitive.Content> &
	VariantProps<typeof SheetVariants>;

const SheetContent = forwardRef<ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
	({ side = "right", className, children, ...props }, ref) => (
		<SheetPortal>
			<SheetOverlay />
			<SheetPrimitive.Content ref={ref} className={cx(SheetVariants({ side }), className)} {...props}>
				{children}
				<SheetPrimitive.Close asChild>
					<IconButton
						label="Close"
						icon={<X />}
						type="button"
						appearance="outlined"
						className="absolute right-4 top-4 size-11 sm:size-9"
					/>
				</SheetPrimitive.Close>
			</SheetPrimitive.Content>
		</SheetPortal>
	),
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetBody = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div className={cx("scrollbar flex-1 overflow-y-auto p-6 text-body", className)} {...props} />
);

const SheetHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div className={cx("shrink-0 border-b border-dialog-muted px-6 py-4", className)} {...props} />
);

const SheetFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cx("flex shrink-0 flex-row-reverse gap-2 border-t border-dialog-muted px-6 py-2.5", className)}
		{...props}
	/>
);

const SheetTitle = forwardRef<
	ElementRef<typeof SheetPrimitive.Title>,
	ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Title ref={ref} className={cx("text-lg font-medium text-strong", className)} {...props} />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = forwardRef<
	ElementRef<typeof SheetPrimitive.Description>,
	ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Description ref={ref} className={cx("text-body", className)} {...props} />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
	Sheet,
	SheetBody,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetOverlay,
	SheetPortal,
	SheetTitle,
	SheetTrigger,
};
