import { createElement, type ReactNode } from "react";
import { describe, expect, test } from "vitest";
import {
	addId,
	hasRenderableErrorListChildren,
	isErrorItemRenderable,
	mergeIdRefs,
	normalizeErrorMessages,
	removeId,
} from "./field-helpers.js";

const errorItemType = "field-error-item";

/**
 * Opaque component used to verify that custom components are treated as
 * renderable because their eventual output is unknowable from props alone.
 */
const OpaqueError = ({ children }: { children?: ReactNode }) =>
	createElement("span", null, children);

describe("field helpers", () => {
	describe("addId", () => {
		test("keeps existing ID arrays stable when the ID is already present", () => {
			const ids = ["description"];

			expect(addId(ids, "description")).toBe(ids);
		});

		test("appends new IDs in order", () => {
			expect(addId(["description"], "errors")).toEqual(["description", "errors"]);
		});
	});

	describe("removeId", () => {
		test("removes all matching IDs", () => {
			expect(removeId(["a", "b", "a"], "a")).toEqual(["b"]);
		});
	});

	describe("normalizeErrorMessages", () => {
		test("trims strings and filters empty or non-string absence values", () => {
			expect(
				normalizeErrorMessages([" Required ", undefined, "", "  ", false, "Too short"]),
			).toEqual(["Required", "Too short"]);
		});
	});

	describe("isErrorItemRenderable", () => {
		test("returns false for nullish / boolean / blank-string children", () => {
			expect(isErrorItemRenderable(null)).toBe(false);
			expect(isErrorItemRenderable(undefined)).toBe(false);
			expect(isErrorItemRenderable(false)).toBe(false);
			expect(isErrorItemRenderable("")).toBe(false);
			expect(isErrorItemRenderable(" ")).toBe(false);
		});

		test("returns true for non-blank string and other renderable values", () => {
			expect(isErrorItemRenderable("Required")).toBe(true);
			expect(isErrorItemRenderable(0)).toBe(true);
			expect(isErrorItemRenderable(<span>Required</span>)).toBe(true);
		});
	});

	describe("hasRenderableErrorListChildren", () => {
		test("returns false for an empty fragment", () => {
			expect(
				hasRenderableErrorListChildren({
					children: <></>,
					errorItemType,
				}),
			).toBe(false);
		});

		test("uses Field.ErrorItem renderability for matching error item elements", () => {
			expect(
				hasRenderableErrorListChildren({
					children: createElement(errorItemType, null, " "),
					errorItemType,
				}),
			).toBe(false);
			expect(
				hasRenderableErrorListChildren({
					children: createElement(errorItemType, null, "Required"),
					errorItemType,
				}),
			).toBe(true);
		});

		test("recurses through host elements but treats custom components as opaque", () => {
			expect(
				hasRenderableErrorListChildren({
					children: (
						<div>
							<span />
						</div>
					),
					errorItemType,
				}),
			).toBe(false);
			expect(
				hasRenderableErrorListChildren({
					children: <OpaqueError />,
					errorItemType,
				}),
			).toBe(true);
		});
	});

	describe("mergeIdRefs", () => {
		test("returns undefined when there are no IDs", () => {
			expect(mergeIdRefs(undefined, [])).toBeUndefined();
		});

		test("deduplicates existing and generated multi-token IDREF values", () => {
			expect(mergeIdRefs("a b", ["b c", undefined, "d"])).toBe("a b c d");
		});
	});
});
