export type Booleanish = boolean | "true" | "false";

/**
 * Parse/coerce a booleanish value (boolean | "true" | "false") into a boolean.
 * @default false if the value is not a boolean or "true"
 */
export function parseBooleanish(value: Booleanish | (string & {}) | undefined | null): boolean {
	return typeof value === "boolean" ? value : value === "true";
}
