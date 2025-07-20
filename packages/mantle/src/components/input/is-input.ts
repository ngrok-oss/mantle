/**
 * Type guard for an HTMLInputElement.
 *
 * @example
 * ```tsx
 * function handleElement(element: HTMLElement) {
 *   if (isInput(element)) {
 *     // TypeScript now knows element is HTMLInputElement
 *     element.value = "new value";
 *     element.focus();
 *   }
 * }
 * ```
 */
export function isInput(value: unknown): value is HTMLInputElement {
	return value != null && value instanceof HTMLInputElement;
}
