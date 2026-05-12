import { Children, Fragment, isValidElement, type ReactNode } from "react";

/**
 * A validation message accepted by `Field.Errors`. Non-string absence values
 * are allowed so consumers can pass mapped validator output directly while
 * still rendering only real strings.
 */
type FieldErrorMessage = string | null | undefined | false;

/**
 * The shape of the child props that renderability checks need to inspect.
 * Limited to `children` because `Field.ErrorItem` accepts only the standard
 * `Field.Errors` / `Field.ErrorList` + `Field.ErrorItem` content shapes
 * (string messages or React children) — no arbitrary HTML injection.
 */
type RenderableContentProps = {
	/**
	 * React children to inspect for visible error content.
	 */
	children?: ReactNode;
};

/**
 * Options for checking a manual `Field.ErrorList` subtree.
 */
type HasRenderableErrorListChildrenOptions = {
	/**
	 * The list children to inspect before rendering or wiring ARIA IDs.
	 */
	children: ReactNode;
	/**
	 * The local `Field.ErrorItem` component type from `field.tsx`. Passed in
	 * (rather than imported) to avoid a circular dependency between
	 * `field.tsx` and this helpers module.
	 */
	errorItemType: unknown;
};

/**
 * Normalizes validator output into display-ready message strings without
 * coupling `Field.Errors` to a specific form library's error object shape.
 */
const normalizeErrorMessages = (messages: readonly FieldErrorMessage[] | undefined) =>
	messages
		?.map((message) => (typeof message === "string" ? message.trim() : ""))
		.filter((message) => message.length > 0) ?? [];

/**
 * Returns `true` when the supplied children would produce visible content in
 * a `Field.ErrorItem` — i.e. they are not `null`, `undefined`, `false`, or a
 * whitespace-only string. Used by both `Field.ErrorItem`'s render guard and
 * the `Field.ErrorList` walker so an empty item is identified consistently.
 */
const isErrorItemRenderable = (children: ReactNode): boolean => {
	if (children == null || children === false) {
		return false;
	}
	if (typeof children === "string" && children.trim().length === 0) {
		return false;
	}
	return true;
};

/**
 * Recursive walker for `Field.ErrorList`'s empty-detection. Iterates the
 * list's children, recursing through Fragments and host elements so error
 * items wrapped in conditional fragments still register. Treats children
 * matching `errorItemType` as `Field.ErrorItem`s and applies the item's
 * own render guard so empty items do not register as content.
 */
const hasRenderableErrorListChildren = ({
	children,
	errorItemType,
}: HasRenderableErrorListChildrenOptions): boolean => {
	let found = false;

	Children.forEach(children, (child) => {
		if (found || child == null) {
			return;
		}

		if (typeof child === "string") {
			if (child.trim().length > 0) {
				found = true;
			}
			return;
		}

		if (!isValidElement<RenderableContentProps>(child)) {
			found = true;
			return;
		}

		if (child.type === errorItemType) {
			found = isErrorItemRenderable(child.props.children);
			return;
		}

		if (child.type === Fragment || typeof child.type === "string") {
			found = hasRenderableErrorListChildren({
				children: child.props.children,
				errorItemType,
			});
			return;
		}

		found = true;
	});

	return found;
};

/**
 * Tokenizes an ARIA IDREF attribute value (whitespace-separated IDs) into a
 * filtered list of non-empty tokens. Returns an empty array for nullish or
 * empty input so callers can spread the result without nullish guards.
 */
const splitIdRefs = (value: string | undefined) =>
	value == null || value.length === 0 ? [] : value.split(/\s+/).filter(Boolean);

/**
 * Combines existing consumer-supplied IDREFs with generated field message IDs
 * while keeping the resulting attribute stable and duplicate-free.
 *
 * Fast-paths the common Field.Control shape (no consumer IDREFs, at most one
 * generated whitespace-free ID) so the hot path avoids the Set allocation
 * entirely. The slow path falls back to a Set so multi-token sources still
 * dedupe correctly.
 */
const mergeIdRefs = (existing: string | undefined, generated: readonly (string | undefined)[]) => {
	if (existing == null || existing.length === 0) {
		if (generated.length === 0) {
			return undefined;
		}
		if (generated.length === 1) {
			const only = generated[0];
			if (only == null || only.length === 0) {
				return undefined;
			}
			if (only.indexOf(" ") < 0) {
				return only;
			}
		}
	}

	const ids = new Set([...splitIdRefs(existing), ...generated.flatMap(splitIdRefs)]);

	return ids.size > 0 ? [...ids].join(" ") : undefined;
};

export {
	//,
	hasRenderableErrorListChildren,
	isErrorItemRenderable,
	mergeIdRefs,
	normalizeErrorMessages,
};
export type {
	//,
	FieldErrorMessage,
};
