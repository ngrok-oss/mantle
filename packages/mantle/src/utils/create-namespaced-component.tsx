import type { ComponentType } from "react";

/**
 * Creates a namespaced component by combining a root component with an object containing sub-components.
 * Keep in mind that this will mutate the Root component directly by adding the sub-components to it.
 *
 * @private This should not be used outside of Mantle.
 *
 * @param Root The root component to be namespaced.
 * @param subComponents An object containing sub-components to be added to the root component.
 * @param displayName Optional display name for the component, useful for debugging. If not provided, it will default to the root component's display name.
 * @returns A new component that combines the root and sub-components, with an optional display name.
 *
 * @example
 * ```tsx
 * const Dialog = createNamespacedComponent(
 * 	Root,
 * 	{
 * 		Body,
 * 		Close,
 * 		CloseIconButton,
 * 		Content,
 * 		Description,
 * 		Footer,
 * 		Header,
 * 		Overlay,
 * 		Portal,
 * 		Title,
 * 		Trigger,
 * 	},
 * 	"Dialog",
 * );
 * ```
 */
function createNamespacedComponent<
	TRoot extends ComponentType<any>,
	TSubComponents extends Record<PropertyKey, ComponentType<any>>,
>(
	Root: TRoot,
	subComponents: TSubComponents,
	displayName?: string,
): TRoot & TSubComponents & { displayName?: string } {
	// Direct assignment preserves the original component identity
	const Component = Object.assign(Root, subComponents);
	Component.displayName = displayName ?? Root.displayName;
	return Component;
}

export {
	//,
	createNamespacedComponent,
};
