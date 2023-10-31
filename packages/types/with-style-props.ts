import { CSSProperties } from "react";

/**
 * Helper type that includes an optional className and style prop for react
 * components.
 */
export type WithStyleProps = {
	/**
	 * A string. Specifies the element’s CSS class name.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/className
	 */
	className?: string;
	/**
	 * An object with CSS styles, for example `{ fontWeight: 'bold', margin: 20 }`.
	 * Similarly to the DOM style property, the CSS property names need to be
	 * written as camelCase, for example fontWeight instead of font-weight.
	 * You can pass strings or numbers as values. If you pass a number, like
	 * `width: 100`, React will automatically append px (“pixels”) to the value
	 * unless it’s a unitless property.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
	 */
	style?: CSSProperties;
};
