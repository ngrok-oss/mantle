import { describe, expect, test } from "vitest";
import { createLruCache } from "./lru-cache.js";

describe("createLruCache", () => {
	test("returns cached values and refreshes recency on get", () => {
		const cache = createLruCache<string, number>(2);

		cache.set("a", 1);
		cache.set("b", 2);
		expect(cache.get("a")).toBe(1);

		cache.set("c", 3);

		expect(cache.get("a")).toBe(1);
		expect(cache.get("b")).toBeUndefined();
		expect(cache.get("c")).toBe(3);
	});

	test("evicts the least recently used item when over capacity", () => {
		const cache = createLruCache<string, number>(2);

		cache.set("a", 1);
		cache.set("b", 2);
		cache.set("c", 3);

		expect(cache.size()).toBe(2);
		expect(cache.get("a")).toBeUndefined();
		expect(cache.get("b")).toBe(2);
		expect(cache.get("c")).toBe(3);
	});
});
