import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
	extend: {
		classGroups: {
			"font-size": ["text-mono"],
		},
	},
});

/**
 * Conditionally add Tailwind (and other) CSS classes.
 *
 * Allows for tailwind overrides in LTR-specificity-like order of applied classes.
 */
export function cx(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
