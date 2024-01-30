import { X } from "@phosphor-icons/react/X";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes } from "react";
import { cx } from "../cx";

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
			"fixed inset-0 z-50 bg-background/80 blur data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
			className,
		)}
		{...props}
		ref={ref}
	/>
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const SheetVariants = cva(
	"fixed z-50 flex flex-col bg-background shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
	{
		variants: {
			side: {
				top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
				bottom:
					"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
				left: "inset-y-0 left-0 h-full w-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
				right:
					"inset-y-0 right-0 h-full w-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
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
				<SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
					<X className="h-6 w-6" />
					<span className="sr-only">Close</span>
				</SheetPrimitive.Close>
			</SheetPrimitive.Content>
		</SheetPortal>
	),
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetBody = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div className={cx("flex-1 overflow-y-auto p-6", className)} {...props} />
);

const SheetHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div className={cx("shrink-0 border-b border-gray-300 px-6 py-4", className)} {...props} />
);

const SheetFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div className={cx("shrink-0 border-t border-gray-300 px-6 py-2.5", className)} {...props} />
);

const SheetTitle = forwardRef<
	ElementRef<typeof SheetPrimitive.Title>,
	ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Title ref={ref} className={cx("text-lg font-semibold text-gray-900", className)} {...props} />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = forwardRef<
	ElementRef<typeof SheetPrimitive.Description>,
	ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Description ref={ref} className={cx("text-sm text-gray-600", className)} {...props} />
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
