import { createElement, type ReactNode } from "react";
import { describe, expect, test } from "vitest";
import {
	addId,
	hasRenderableErrorContent,
	hasRenderableErrorItemProps,
	hasRenderableErrorListChildren,
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

	describe("hasRenderableErrorContent", () => {
		test("returns false for empty React children", () => {
			expect(hasRenderableErrorContent([null, undefined, false, true, " "])).toBe(false);
		});

		test("returns true for text-like renderable children", () => {
			expect(hasRenderableErrorContent(0)).toBe(true);
			expect(hasRenderableErrorContent("Required")).toBe(true);
		});

		test("recurses through fragments and host elements", () => {
			expect(
				hasRenderableErrorContent(
					<span>
						<>
							<strong>Required</strong>
						</>
					</span>,
				),
			).toBe(true);
			expect(
				hasRenderableErrorContent(
					<span>
						<></>
					</span>,
				),
			).toBe(false);
		});

		test("treats dangerouslySetInnerHTML as renderable content", () => {
			expect(
				hasRenderableErrorContent(<span dangerouslySetInnerHTML={{ __html: "Required" }} />),
			).toBe(true);
		});
	});

	describe("hasRenderableErrorItemProps", () => {
		test("mirrors the Field.ErrorItem render guard", () => {
			expect(hasRenderableErrorItemProps({ children: " " })).toBe(false);
			expect(hasRenderableErrorItemProps({ children: "Required" })).toBe(true);
			expect(hasRenderableErrorItemProps({ dangerouslySetInnerHTML: { __html: "Required" } })).toBe(
				true,
			);
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

		test("treats Field.ErrorItem dangerouslySetInnerHTML as renderable", () => {
			expect(
				hasRenderableErrorListChildren({
					children: createElement(errorItemType, {
						dangerouslySetInnerHTML: { __html: "Required" },
					}),
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
