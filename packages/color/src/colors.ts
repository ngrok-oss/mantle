/**
 * Color palette named colors
 */
const colorPaletteColors = [
	"amber",
	"blue",
	"cyan",
	"emerald",
	"fuchsia",
	"gray",
	"green",
	"indigo",
	"lime",
	"orange",
	"pink",
	"purple",
	"red",
	"rose",
	"sky",
	"teal",
	"violet",
	"yellow",
] as const;

/**
 * A color from the color palette
 */
type ColorPalette = (typeof colorPaletteColors)[number];

/**
 * Check if a value is a color from the color palette
 */
const isColorPaletteColor = (value: unknown): value is ColorPalette =>
	typeof value === "string" && colorPaletteColors.includes(value as ColorPalette);

/**
 * Functional named colors
 */
const functionalColors = ["accent", "danger", "neutral", "success", "warning"] as const;

/**
 * A functional color
 */
type FunctionalColor = (typeof functionalColors)[number];

/**
 * Check if a value is a color from the functional colors
 */
const isFunctionalColor = (value: unknown): value is FunctionalColor =>
	typeof value === "string" && functionalColors.includes(value as FunctionalColor);

/**
 * All named colors
 */
const colors = [...colorPaletteColors, ...functionalColors] as const;

/**
 * A named color
 */
type Color = (typeof colors)[number];

/**
 * Check if a value is a named color
 */
const isColor = (value: unknown): value is Color => typeof value === "string" && colors.includes(value as Color);

export { colors, colorPaletteColors, functionalColors, isColor, isColorPaletteColor, isFunctionalColor };
export type { Color, ColorPalette, FunctionalColor };
