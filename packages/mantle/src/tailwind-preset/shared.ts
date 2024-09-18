/**
 * Filters out the "DEFAULT" key from the given object.
 */
export function filterDefault(values: Record<string, string>) {
	return Object.fromEntries(Object.entries(values).filter(([key]) => key !== "DEFAULT"));
}

type AnyObject = Record<string, any>;

type FlattenObjectOptions = {
	parentKey: string;
	separator?: string;
};

/**
 * Flattens an object to a single level deep object.
 */
export function flattenObject(obj: AnyObject, options?: FlattenObjectOptions) {
	let result: AnyObject = {};
	const { parentKey = "", separator = "-" } = options ?? {};

	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			let newKey = parentKey ? `${parentKey}${separator}${key}` : key;

			if (typeof obj[key] === "object" && obj[key] != null && !Array.isArray(obj[key])) {
				Object.assign(result, flattenObject(obj[key], { parentKey: newKey }));
			} else {
				result[newKey] = obj[key];
			}
		}
	}

	return result;
}
