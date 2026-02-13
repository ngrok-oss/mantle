import type { CSSProperties as ReactCSSProperties } from "react";

/**
 * A CSS custom property (CSS variable) name.
 *
 * CSS variables must start with `--`, e.g. `--brand-color` or `--spacing-2`.
 * This template-literal type lets TypeScript recognize those keys as valid
 * style keys when building objects for `style={...}`.
 */
type CssVariableName = `--${string}`;

/**
 * React-compatible CSS properties plus support for CSS custom properties.
 *
 * React's `CSSProperties` type does not allow arbitrary property names by
 * default, so keys like `--foo` would normally be rejected by TypeScript.
 *
 * This type extends React's `CSSProperties` and additionally permits any
 * CSS variable name (keys starting with `--`) with values that match what
 * CSS variables accept in React style objects: `string | number`.
 */
type CssProperties = ReactCSSProperties & Record<CssVariableName, string | number>;

/**
 * Helper to type-check a style object while preserving its exact inferred type.
 *
 * Why not just annotate with `CssProperties`?
 * - Annotating forces the value to be treated as the *wider* `CssProperties` type,
 *   which can lose useful inference (literal values, narrow unions, etc.).
 *
 * This function validates that `input` conforms to `CssProperties` (including
 * CSS variables like `--foo`) and returns it unchanged, keeping inference intact.
 *
 * @example
 * const styles = $cssProperties({ display: "block", "--gap": 8 });
 */
const $cssProperties = <T extends CssProperties = CssProperties>(input: T): ReactCSSProperties => input;

export { type CssProperties, $cssProperties };
