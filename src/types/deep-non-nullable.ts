/**
 * Makes all properties in an object non-nullable, recursively.
 */
export type DeepNonNullable<Type> = {
	[Property in keyof Type]-?: Type[Property] & {};
};
