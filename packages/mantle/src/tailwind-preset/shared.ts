/**
 * Filters out the "DEFAULT" key from the given object.
 */
export function filterDefault(values: Record<string, string>) {
	return Object.fromEntries(Object.entries(values).filter(([key]) => key !== "DEFAULT"));
}

type AnyObject = Record<PropertyKey, unknown>;

type FlattenObjectOptions = {
	parentKey: string;
	separator?: string;
};

/**
 * Flattens an object to a single level deep object.
 */
export function flattenObject(obj: AnyObject, options?: FlattenObjectOptions) {
	const result: AnyObject = {};
	const { parentKey = "", separator = "-" } = options ?? {};

	for (const key in obj) {
		if (Object.hasOwn(obj, key)) {
			const newKey = parentKey ? `${parentKey}${separator}${key}` : key;

			const value = obj[key];
			if (typeof value === "object" && value != null && !Array.isArray(value)) {
				Object.assign(result, flattenObject(value as AnyObject, { parentKey: newKey }));
			} else {
				result[newKey] = value;
			}
		}
	}

	return result;
}
