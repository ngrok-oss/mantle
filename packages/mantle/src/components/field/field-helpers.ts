import { Children, Fragment, isValidElement, type ReactElement, type ReactNode } from "react";

/**
 * A validation message accepted by `Field.Errors`. Non-string absence values
 * are allowed so consumers can pass mapped validator output directly while
 * still rendering only real strings.
 */
type FieldErrorMessage = string | null | undefined | false;

/**
 * Props shared by renderability checks for elements that may render HTML
 * directly instead of React children.
 */
type RenderableContentProps = {
	/**
	 * React children to inspect for visible error content.
	 */
	children?: ReactNode;
	/**
	 * Raw HTML content that React will render even when `children` is absent.
	 */
	dangerouslySetInnerHTML?: unknown;
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
	 * The local `Field.ErrorItem` component type from `field.tsx`.
	 */
	errorItemType: unknown;
};

/**
 * Adds an ID to an ordered ID collection without introducing duplicates.
 */
const addId = (ids: string[], id: string) => (ids.includes(id) ? ids : [...ids, id]);

/**
 * Removes all matching IDs from an ordered ID collection.
 */
const removeId = (ids: string[], id: string) => ids.filter((item) => item !== id);

/**
 * Normalizes validator output into display-ready message strings without
 * coupling `Field.Errors` to a specific form library's error object shape.
 */
const normalizeErrorMessages = (messages: readonly FieldErrorMessage[] | undefined) =>
	messages
		?.map((message) => {
			if (typeof message !== "string") {
				return "";
			}

			return message.trim();
		})
		.filter((message) => message.length > 0) ?? [];

/**
 * Treats blank string children the same as React's empty child values so
 * message-less validation errors do not create empty list items.
 */
const hasRenderableErrorContent = (children: ReactNode): boolean => {
	let hasRenderableContent = false;

	Children.forEach(children, (child) => {
		if (hasRenderableContent || child == null) {
			return;
		}

		if (typeof child === "string") {
			hasRenderableContent = child.trim().length > 0;
			return;
		}

		if (isValidElement<RenderableContentProps>(child)) {
			if (child.props.dangerouslySetInnerHTML != null) {
				hasRenderableContent = true;
				return;
			}

			if (child.type === Fragment || typeof child.type === "string") {
				hasRenderableContent = hasRenderableErrorContent(child.props.children);
				return;
			}
		}

		hasRenderableContent = true;
	});

	return hasRenderableContent;
};

/**
 * Checks whether an element is the caller's local `Field.ErrorItem` component.
 */
const isFieldErrorItemElement = ({
	element,
	errorItemType,
}: {
	/**
	 * The element being inspected inside a manual error list.
	 */
	element: ReactElement;
	/**
	 * The local `Field.ErrorItem` component type from `field.tsx`.
	 */
	errorItemType: unknown;
}) => element.type === errorItemType;

/**
 * Mirrors `Field.ErrorItem`'s render guard so `Field.ErrorList` only wires
 * ARIA IDs for error items that will actually produce an `<li>`.
 */
const hasRenderableErrorItemProps = ({
	children,
	dangerouslySetInnerHTML,
}: RenderableContentProps) =>
	dangerouslySetInnerHTML != null || hasRenderableErrorContent(children);

/**
 * Detects whether a manual error list will render at least one message,
 * including `Field.ErrorItem` children that collapse when empty.
 */
const hasRenderableErrorListChildren = ({
	children,
	errorItemType,
}: HasRenderableErrorListChildrenOptions): boolean => {
	let hasRenderableChildren = false;

	Children.forEach(children, (child) => {
		if (hasRenderableChildren || child == null) {
			return;
		}

		if (typeof child === "string") {
			hasRenderableChildren = child.trim().length > 0;
			return;
		}

		if (isValidElement<RenderableContentProps>(child)) {
			if (isFieldErrorItemElement({ element: child, errorItemType })) {
				hasRenderableChildren = hasRenderableErrorItemProps(child.props);
				return;
			}

			if (child.props.dangerouslySetInnerHTML != null) {
				hasRenderableChildren = true;
				return;
			}

			if (child.type === Fragment || typeof child.type === "string") {
				hasRenderableChildren = hasRenderableErrorListChildren({
					children: child.props.children,
					errorItemType,
				});
				return;
			}
		}

		hasRenderableChildren = true;
	});

	return hasRenderableChildren;
};

/**
 * Tokenizes an ARIA IDREF attribute value into individual IDs.
 */
const splitIdRefs = (value: string | undefined) => (value ?? "").split(/\s+/).filter(Boolean);

/**
 * Combines existing consumer-supplied IDREFs with generated field message IDs
 * while keeping the resulting attribute stable and duplicate-free.
 */
const mergeIdRefs = (existing: string | undefined, generated: readonly (string | undefined)[]) => {
	const ids = new Set([...splitIdRefs(existing), ...generated.flatMap(splitIdRefs)]);

	return ids.size > 0 ? [...ids].join(" ") : undefined;
};

export {
	//,
	addId,
	hasRenderableErrorContent,
	hasRenderableErrorItemProps,
	hasRenderableErrorListChildren,
	mergeIdRefs,
	normalizeErrorMessages,
	removeId,
};
export type {
	//,
	FieldErrorMessage,
};
