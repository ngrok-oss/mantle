import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps } from "react";
import { forwardRef } from "react";
import type { WithAsChild } from "../../types/as-child.js";
import { createNamespacedComponent } from "../../utils/create-namespaced-component.js";
import { cx } from "../../utils/cx/cx.js";

type Props = ComponentProps<"div"> & WithAsChild;

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
 * @see https://mantle.ngrok.com/components/media-object#api-media-object
 *
 * @example
 * ```tsx
 * <MediaObject>
 *   <MediaObject.Media>
 *     <ExampleMedia />
 *   </MediaObject.Media>
 *   <MediaObject.Content>
 *     <p>Ea culpa id id ea minim labore.</p>
 *   </MediaObject.Content>
 * </MediaObject>
 * ```
 */
const Root = forwardRef<HTMLDivElement, Props>(
	({ asChild = false, className, children, style }, ref) => {
		const Component = asChild ? Slot : "div";

		return (
			<Component
				ref={ref}
				className={cx("flex gap-4", className)}
				style={style}
			>
				{children}
			</Component>
		);
	},
);
Root.displayName = "MediaObject";

/**
 * The container for an image or icon to display in the media slot of the media object.
 *
 * @see https://mantle.ngrok.com/components/media-object#api-media-object-media
 *
 * @example
 * ```tsx
 * <MediaObject>
 *   <MediaObject.Media>
 *     <ExampleMedia />
 *   </MediaObject.Media>
 *   <MediaObject.Content>
 *     <p>Ea culpa id id ea minim labore.</p>
 *   </MediaObject.Content>
 * </MediaObject>
 * ```
 */
const Media = forwardRef<HTMLDivElement, Props>(
	({ asChild = false, className, children, style }, ref) => {
		const Component = asChild ? Slot : "div";

		return (
			<Component
				ref={ref}
				className={cx("shrink-0 leading-none", className)}
				style={style}
			>
				{children}
			</Component>
		);
	},
);
Media.displayName = "MediaObjectMedia";

/**
 * The container for the content slot of a media object.
 *
 * @see https://mantle.ngrok.com/components/media-object#api-media-object-content
 *
 * @example
 * ```tsx
 * <MediaObject>
 *   <MediaObject.Media>
 *     <ExampleMedia />
 *   </MediaObject.Media>
 *   <MediaObject.Content>
 *     <p>Ea culpa id id ea minim labore.</p>
 *   </MediaObject.Content>
 * </MediaObject>
 * ```
 */
const Content = forwardRef<HTMLDivElement, Props>(
	({ asChild = false, className, children, style }, ref) => {
		const Component = asChild ? Slot : "div";

		return (
			<Component
				ref={ref}
				className={cx("min-w-0 flex-1", className)}
				style={style}
			>
				{children}
			</Component>
		);
	},
);
Content.displayName = "MediaObjectContent";

const MediaObject = createNamespacedComponent(
	Root,
	{
		Content,
		Media,
	},
	"MediaObject",
);

export {
	//,
	MediaObject,
};
