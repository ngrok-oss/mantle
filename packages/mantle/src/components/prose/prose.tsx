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
		<div ref={ref} className={cx("prose", className)} {...props} />
	),
);
Prose.displayName = "Prose";

export {
	//,
	Prose,
};
