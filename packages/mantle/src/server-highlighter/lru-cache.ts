type LruCache<K, V> = {
	delete: (key: K) => boolean;
	get: (key: K) => V | undefined;
	set: (key: K, value: V) => void;
	size: () => number;
};

function createLruCache<K, V>(maxEntries: number): LruCache<K, V> {
	if (!Number.isInteger(maxEntries) || maxEntries <= 0) {
		throw new Error("LRU cache maxEntries must be a positive integer.");
	}

	const map = new Map<K, V>();

	return {
		delete(key) {
			return map.delete(key);
		},
		get(key) {
			const value = map.get(key);
			if (value == null) {
				return undefined;
			}

			map.delete(key);
			map.set(key, value);
			return value;
		},
		set(key, value) {
			if (map.has(key)) {
				map.delete(key);
			}

			map.set(key, value);
			if (map.size <= maxEntries) {
				return;
			}

			const oldestKey = map.keys().next().value as K | undefined;
			if (oldestKey != null) {
				map.delete(oldestKey);
			}
		},
		size() {
			return map.size;
		},
	};
}

export { createLruCache };
export type { LruCache };
