/**
 * Filters out the "DEFAULT" key from the given object.
 */
export function filterDefault(values: Record<string, string>) {
	return Object.fromEntries(
		Object.entries(values).filter(([key]) => key !== "DEFAULT"),
	);
}

// biome-ignore lint/suspicious/noExplicitAny: from tailwind type defs
type KeyValuePair<K extends keyof any = string, V = string> = Record<K, V>;

type FlattenObjectOptions = {
	parentKey: string;
	separator?: string;
};

/**
 * Flattens an object to a single level deep object.
 */
export function flattenObject(
	obj: KeyValuePair,
	options?: FlattenObjectOptions,
) {
	const result: KeyValuePair = {};
	const { parentKey = "", separator = "-" } = options ?? {};

	for (const key in obj) {
		if (Object.hasOwn(obj, key)) {
			const newKey = parentKey ? `${parentKey}${separator}${key}` : key;

			const value = obj[key];
			if (value == null) {
				continue;
			}

			if (typeof value === "object" && !Array.isArray(value)) {
				Object.assign(result, flattenObject(value, { parentKey: newKey }));
			} else {
				result[newKey] = value;
			}
		}
	}

	return result;
}
