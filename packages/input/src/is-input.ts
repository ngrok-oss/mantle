/**
 * Type guard for an HTMLInputElement.
 */
export function isInput(value: unknown): value is HTMLInputElement {
	return value != null && value instanceof HTMLInputElement;
}
