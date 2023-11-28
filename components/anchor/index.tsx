import { Slot } from "@radix-ui/react-slot";
import { AnchorHTMLAttributes, forwardRef } from "react";
import { cx } from "../cx";
import { WithAsChild } from "../types/as-child";

const anchorClassNames = (className: string | undefined) =>
	cx(
		"text-blue-500 hover:text-blue-400 focus:text-blue-400 focus-visible:ring-blue-400/40 cursor-pointer rounded bg-transparent focus:outline-none focus-visible:ring focus:underline hover:underline visited:text-purple-600",
		className,
	);

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & WithAsChild;

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(({ asChild, className, ...props }, ref) => {
	const Component = asChild ? Slot : "a";

	return <Component className={anchorClassNames(className)} ref={ref} {...props} />;
});
Anchor.displayName = "Anchor";

export { Anchor, anchorClassNames };
