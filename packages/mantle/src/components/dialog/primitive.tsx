"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Slot } from "@radix-ui/react-slot";
import {
	type ComponentProps,
	type ComponentPropsWithoutRef,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

type InternalDialogContextValue = {
	hasDescription: boolean;
	setHasDescription: (value: boolean) => void;
};

const InternalDialogContext = createContext<InternalDialogContextValue>({
	hasDescription: false,
	setHasDescription: () => {},
});

function Root(props: ComponentProps<typeof DialogPrimitive.Root>) {
	const [hasDescription, setHasDescription] = useState(false);

	return (
		<InternalDialogContext.Provider
			value={{ hasDescription, setHasDescription }}
		>
			<DialogPrimitive.Root {...props} />
		</InternalDialogContext.Provider>
	);
}
Root.displayName = "DialogPrimitiveRoot";

const Trigger = DialogPrimitive.Trigger;
Trigger.displayName = "DialogPrimitiveTrigger";

const Portal = DialogPrimitive.Portal;
Portal.displayName = "DialogPrimitivePortal";

const Close = DialogPrimitive.Close;
Close.displayName = "DialogPrimitiveClose";

const Overlay = DialogPrimitive.Overlay;
Overlay.displayName = "DialogPrimitiveOverlay";

/**
 * The main content container of the dialog primitive.
 * This is a low-level primitive used by higher-level dialog components.
 */
function Content(props: ComponentProps<typeof DialogPrimitive.Content>) {
	const ctx = useContext(InternalDialogContext);

	return (
		<DialogPrimitive.Content
			// If there's no description, we remove the default applied aria-describedby attribute from radix dialog
			{...(!ctx.hasDescription ? { "aria-describedby": undefined } : {})}
			{...props}
		/>
	);
}
Content.displayName = "DialogPrimitiveContent";

/**
 * An accessible title for the dialog primitive.
 * This is a low-level primitive used by higher-level dialog components.
 *
 * Normally renders as an `h2` element, but can be overridden with `asChild`
 * to render as a different heading element.
 */
const Title = DialogPrimitive.Title;

type DescriptionProps = ComponentPropsWithoutRef<
	typeof DialogPrimitive.Description
> &
	Pick<ComponentProps<"div">, "ref">;

/**
 * An accessible description for the dialog primitive.
 * This is a low-level primitive used by higher-level dialog components.
 * Renders as a `div` by default, but can be changed to any other element using the `asChild` prop.
 */
function Description(props: DescriptionProps) {
	const ctx = useContext(InternalDialogContext);

	useEffect(() => {
		ctx.setHasDescription(true);
		return () => ctx.setHasDescription(false);
	}, [ctx]);

	return <DialogPrimitive.Description {...props} />;
}
Description.displayName = "DialogPrimitiveDescription";

export {
	//,
	Root,
	Trigger,
	Portal,
	Close,
	Overlay,
	Content,
	Description,
	Title,
};
