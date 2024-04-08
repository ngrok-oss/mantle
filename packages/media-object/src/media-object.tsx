import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { cx } from "../../cx";

/**
 * The media object is an image/icon (media) to the left, with descriptive
 * content (title and subtitle/description) to the right.
 *
 * Change the spacing between the media and content by passing a `gap-*` class.
 * The default gap is `gap-4`.
 *
 * Use flexbox utilities to change the alignment of the media and content.
 *
 * Compose the media object with the `MediaObjectMedia` and `MediaObjectContent`
 * components as direct children.
 */
const MediaObject = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, children, style }, ref) => (
		<div ref={ref} className={cx("flex gap-4", className)} style={style}>
			{children}
		</div>
	),
);
MediaObject.displayName = "MediaObject";

/**
 * The container for an image or icon to display in the media slot of the media object.
 */
const MediaObjectMedia = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, children, style }, ref) => (
		<div ref={ref} className={cx("shrink-0 leading-none", className)} style={style}>
			{children}
		</div>
	),
);
MediaObjectMedia.displayName = "MediaObjectMedia";

/**
 * The container for the content slot of a media object.
 */
const MediaObjectContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, children, style }, ref) => (
		<div ref={ref} className={cx("min-w-0 flex-1", className)} style={style}>
			{children}
		</div>
	),
);
MediaObjectContent.displayName = "MediaObjectContent";

export { MediaObject, MediaObjectMedia, MediaObjectContent };
