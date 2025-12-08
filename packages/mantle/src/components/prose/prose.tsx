import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { cx } from "../../utils/cx/cx.js";

/**
 * A container for typography content that applies Tailwind's prose classes
 * with mantle-specific overrides.
 *
 * @see https://mantle.ngrok.com/components/prose#api-prose
 *
 * @example
 * ```tsx
 * <Prose>
 *   <h1>Hello World</h1>
 *   <p>This content will have prose styling applied.</p>
 * </Prose>
 * ```
 */
const Prose = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cx(
				"prose prose-mantle prose-a:no-underline prose-a:font-normal prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h5:text-lg prose-h6:text-lg",
				className,
			)}
			{...props}
		/>
	),
);
Prose.displayName = "Prose";

export {
	//,
	Prose,
};
