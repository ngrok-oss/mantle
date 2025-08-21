import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps } from "react";
import type { WithAsChild } from "../../types/as-child.js";
import { cx } from "../../utils/cx/cx.js";

type Props = ComponentProps<"div"> & WithAsChild;

/**
 * The media object is an image/icon (media) to the left, with descriptive
 * content (title and subtitle/description) to the right. This is the root
 * component of the media object.
 */
function Root({ asChild = false, className, children, ...props }: Props) {
	const Component = asChild ? Slot : "div";

	return (
		<Component className={cx("flex gap-4", className)} {...props}>
			{children}
		</Component>
	);
}
Root.displayName = "MediaObjectRoot";

/**
 * The container for an image or icon to display in the media slot of the media object.
 */
function Media({ asChild = false, className, children, ...props }: Props) {
	const Component = asChild ? Slot : "div";

	return (
		<Component
			//
			className={cx("shrink-0 leading-none", className)}
			{...props}
		>
			{children}
		</Component>
	);
}
Media.displayName = "MediaObjectMedia";

/**
 * The container for the content slot of a media object.
 */
function Content({ asChild = false, className, children, ...props }: Props) {
	const Component = asChild ? Slot : "div";

	return (
		<Component
			//
			className={cx("min-w-0 flex-1", className)}
			{...props}
		>
			{children}
		</Component>
	);
}
Content.displayName = "MediaObject.Content";

/**
 * The media object is an image/icon (media) to the left, with descriptive
 * content (title and subtitle/description) to the right. This is the root
 * component of the media object.
 *
 * Change the spacing between the media and content by passing a `gap-*` class.
 * The default gap is `gap-4`.
 *
 * Use flexbox utilities to change the alignment of the media and content.
 *
 * Compose the media object with the `MediaObject.Media` and `MediaObject.Content`
 * components as direct children.
 *
 * @see https://mantle.ngrok.com/components/media-object
 *
 * @example
 * ```tsx
 * <MediaObject.Root>
 *   <MediaObject.Media>
 *     <ExampleMedia />
 *   </MediaObject.Media>
 *   <MediaObject.Content>
 *     <p>Ea culpa id id ea minim labore.</p>
 *   </MediaObject.Content>
 * </MediaObject.Root>
 * ```
 */
const MediaObject = {
	/**
	 * The media object is an image/icon (media) to the left, with descriptive
	 * content (title and subtitle/description) to the right. This is the root
	 * component of the media object.
	 *
	 * Change the spacing between the media and content by passing a `gap-*` class.
	 * The default gap is `gap-4`.
	 *
	 * Use flexbox utilities to change the alignment of the media and content.
	 *
	 * Compose the media object with the `MediaObject.Media` and `MediaObject.Content`
	 * components as direct children.
	 *
	 * @see https://mantle.ngrok.com/components/media-object#api-media-object-root
	 *
	 * @example
	 * ```tsx
	 * <MediaObject.Root>
	 *   <MediaObject.Media>
	 *     <ExampleMedia />
	 *   </MediaObject.Media>
	 *   <MediaObject.Content>
	 *     <p>Ea culpa id id ea minim labore.</p>
	 *   </MediaObject.Content>
	 * </MediaObject.Root>
	 * ```
	 */
	Root,
	/**
	 * The container for an image or icon to display in the media slot of the media object.
	 *
	 * @see https://mantle.ngrok.com/components/media-object#api-media-object-media
	 *
	 * @example
	 * ```tsx
	 * <MediaObject.Root>
	 *   <MediaObject.Media>
	 *     <ExampleMedia />
	 *   </MediaObject.Media>
	 *   <MediaObject.Content>
	 *     <p>Ea culpa id id ea minim labore.</p>
	 *   </MediaObject.Content>
	 * </MediaObject.Root>
	 * ```
	 */
	Media,
	/**
	 * The container for the content slot of a media object.
	 *
	 * @see https://mantle.ngrok.com/components/media-object#api-media-object-content
	 *
	 * @example
	 * ```tsx
	 * <MediaObject.Root>
	 *   <MediaObject.Media>
	 *     <ExampleMedia />
	 *   </MediaObject.Media>
	 *   <MediaObject.Content>
	 *     <p>Ea culpa id id ea minim labore.</p>
	 *   </MediaObject.Content>
	 * </MediaObject.Root>
	 * ```
	 */
	Content,
} as const;

export {
	//,
	MediaObject,
};
