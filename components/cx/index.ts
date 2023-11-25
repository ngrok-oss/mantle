import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Conditionally add Tailwind (and other) CSS classes.
 *
 * Allows for tailwind overrides in LTR-specificity-like order of applied classes.
 */
export function cx(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
