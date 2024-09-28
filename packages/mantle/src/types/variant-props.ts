import type { VariantProps as CVAVariantProps } from "class-variance-authority";
import type { DeepNonNullable } from "./deep-non-nullable.js";

/**
 * Variant props that are optional and cannot be `null`.
 *
 * Using VariantProps directly from CVA produces that can be `null`, which is not what we want.
 */
export type VariantProps<Variants extends (props?: Record<PropertyKey, unknown> | undefined) => string> = Partial<
	DeepNonNullable<CVAVariantProps<Variants>>
>;
