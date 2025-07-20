"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
	type ComponentPropsWithoutRef,
	type ComponentRef,
	createContext,
	forwardRef,
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

function Root(props: ComponentPropsWithoutRef<typeof DialogPrimitive.Root>) {
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
const Content = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>((props, ref) => {
	const ctx = useContext(InternalDialogContext);

	return (
		<DialogPrimitive.Content
			ref={ref}
			// If there's no description, we remove the default applied aria-describedby attribute from radix dialog
			{...(!ctx.hasDescription ? { "aria-describedby": undefined } : {})}
			{...props}
		/>
	);
});
Content.displayName = "DialogPrimitiveContent";

const Title = DialogPrimitive.Title;

/**
 * An accessible description for the dialog primitive.
 * This is a low-level primitive used by higher-level dialog components.
 */
const Description = forwardRef<
	ComponentRef<"p">,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>((props, ref) => {
	const ctx = useContext(InternalDialogContext);

	useEffect(() => {
		ctx.setHasDescription(true);
		return () => ctx.setHasDescription(false);
	}, [ctx]);

	return <DialogPrimitive.Description ref={ref} {...props} />;
});
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
