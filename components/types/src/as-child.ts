/**
 * Utility type for adding the `asChild` boolean prop to a component.
 */
export type WithAsChild = {
	/**
	 * Use the `asChild` prop to compose Radix's functionality onto alternative
	 * element types or your own React components.
	 *
	 * All Radix primitive parts that render a DOM element accept an `asChild`
	 * prop. When `asChild` is set to `true`, Radix will not render a default DOM
	 * element, instead cloning the part's child and passing it the props and
	 * behavior required to make it functional.
	 *
	 * asChild can be used as deeply as you need to. This means it is a great way
	 * to compose multiple primitive's behavior together.
	 *
	 * @see https://www.radix-ui.com/docs/primitives/guides/composition#composition
	 */
	asChild?: boolean;
};
