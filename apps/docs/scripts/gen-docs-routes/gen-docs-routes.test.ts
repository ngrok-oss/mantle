import { describe, expect, test } from "vitest";
import { formatRoutePathFromSegments, formatRoutePatternFromSegments, parseSegmentsFromFilename } from "./script";

describe("parseSegmentsFromFilename", () => {
	test("given an empty string, returns []", () => {
		expect(parseSegmentsFromFilename("")).toEqual([]);
	});

	test('given the path "foo", returns ["foo"]', () => {
		expect(parseSegmentsFromFilename("foo")).toEqual(["foo"]);
	});

	test('(normalizes whitespace) given the path "\t\t\t foo    ", returns ["foo"]', () => {
		expect(parseSegmentsFromFilename("\t\t\t foo    ")).toEqual(["foo"]);
	});

	test('(splits on ".") given the path "foo.bar", returns ["foo", "bar"]', () => {
		expect(parseSegmentsFromFilename("foo.bar")).toEqual(["foo", "bar"]);
	});

	test('(accepts dynamic segments) given the path "foo.$bar", returns ["foo", "$bar"]', () => {
		expect(parseSegmentsFromFilename("foo.$bar")).toEqual(["foo", "$bar"]);
	});

	test('(filters out index routes) given the path "_index.foo", returns ["foo"]', () => {
		expect(parseSegmentsFromFilename("_index.foo")).toEqual(["foo"]);
	});

	test('(filters out pathless route segments) given the path "_foo", returns []', () => {
		expect(parseSegmentsFromFilename("_foo")).toEqual([]);
	});

	test('(real world example) given the dashboard path "cloud-edge.edges.$edgeId.backends.$backendId.start-a-tunnel", returns ["cloud-edge", "edges", "$edgeId", "backends", "$backendId", "start-a-tunnel"]', () => {
		expect(parseSegmentsFromFilename("cloud-edge.edges.$edgeId.backends.$backendId.start-a-tunnel")).toEqual([
			"cloud-edge",
			"edges",
			"$edgeId",
			"backends",
			"$backendId",
			"start-a-tunnel",
		]);
	});

	test('(real world example) given the dashboard path "_auth.unsubscribe.$token", returns ["unsubscribe", "$token"]', () => {
		expect(parseSegmentsFromFilename("_auth.unsubscribe.$token")).toEqual(["unsubscribe", "$token"]);
	});
});

describe("formatRoutePatternFromSegments", () => {
	test('given [], returns "/"', () => {
		expect(formatRoutePatternFromSegments([])).toEqual("/");
	});

	test('given ["", " ", "\t\r\n"], returns "/"', () => {
		expect(formatRoutePatternFromSegments(["", " ", "\t\r\n"])).toEqual("/");
	});

	test('given ["foo"], returns "/foo"', () => {
		expect(formatRoutePatternFromSegments(["foo"])).toEqual("/foo");
	});

	test('given ["foo", "bar"], returns "/foo/bar"', () => {
		expect(formatRoutePatternFromSegments(["foo", "bar"])).toEqual("/foo/bar");
	});

	test('given ["foo", "$bar"], returns "/foo/:bar"', () => {
		expect(formatRoutePatternFromSegments(["foo", "$bar"])).toEqual("/foo/:bar");
	});

	test('(real world example) given ["cloud-edge", "edges", "$edgeId", "backends", "$backendId", "start-a-tunnel"], returns "/cloud-edge/edges/:edgeId/backends/:backendId/start-a-tunnel"', () => {
		expect(
			formatRoutePatternFromSegments(["cloud-edge", "edges", "$edgeId", "backends", "$backendId", "start-a-tunnel"]),
		).toEqual("/cloud-edge/edges/:edgeId/backends/:backendId/start-a-tunnel");
	});

	test('(real world example) given ["unsubscribe", "$token"], returns "/unsubscribe/:token"', () => {
		expect(formatRoutePatternFromSegments(["unsubscribe", "$token"])).toEqual("/unsubscribe/:token");
	});
});

describe("formatRoutePathFromSegments", () => {
	test('given [], returns "/"', () => {
		expect(formatRoutePathFromSegments([])).toEqual("/");
	});

	test('given ["", " ", "\t\r\n"], returns "/"', () => {
		expect(formatRoutePathFromSegments(["", " ", "\t\r\n"])).toEqual("/");
	});

	test('given ["foo"], returns "/foo"', () => {
		expect(formatRoutePathFromSegments(["foo"])).toEqual("/foo");
	});

	test('given ["foo", "bar"], returns "/foo/bar"', () => {
		expect(formatRoutePathFromSegments(["foo", "bar"])).toEqual("/foo/bar");
	});

	test('given ["foo", "$bar"], returns "/foo/{bar}"', () => {
		expect(formatRoutePathFromSegments(["foo", "$bar"])).toEqual("/foo/{bar}");
	});

	test('(real world example) given ["cloud-edge", "edges", "$edgeId", "backends", "$backendId", "start-a-tunnel"], returns "/cloud-edge/edges/{edgeId}/backends/{backendId}/start-a-tunnel"', () => {
		expect(
			formatRoutePathFromSegments(["cloud-edge", "edges", "$edgeId", "backends", "$backendId", "start-a-tunnel"]),
		).toEqual("/cloud-edge/edges/{edgeId}/backends/{backendId}/start-a-tunnel");
	});

	test('(real world example) given ["unsubscribe", "$token"], returns "/unsubscribe/{token}"', () => {
		expect(formatRoutePathFromSegments(["unsubscribe", "$token"])).toEqual("/unsubscribe/{token}");
	});
});
