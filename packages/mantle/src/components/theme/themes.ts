/**
 * resolvedThemes is a tuple of valid themes that have been resolved from "system" to a specific theme.
 */
const resolvedThemes = ["light", "dark", "light-high-contrast", "dark-high-contrast"] as const;

/**
 * ResolvedTheme is a type that represents a theme that has been resolved from "system" to a specific theme.
 */
type ResolvedTheme = (typeof resolvedThemes)[number];

/**
 * themes is a tuple of valid themes.
 */
const themes = ["system", ...resolvedThemes] as const;

/**
 * Theme is a string literal type that represents a valid theme.
 */
type Theme = (typeof themes)[number];

/**
 * $theme is a helper which translates the Theme type into a string literal type.
 */
const $theme = <T extends Theme = Theme>(value: T) => value;

/**
 * Type predicate that checks if a value is a valid theme.
 */
function isTheme(value: unknown): value is Theme {
	if (typeof value !== "string") {
		return false;
	}

	return themes.includes(value as Theme);
}

/**
 * $resolvedTheme is a helper which translates the ResolvedTheme type into a string literal type.
 */
const $resolvedTheme = <T extends ResolvedTheme = ResolvedTheme>(value: T) => value;

/**
 * Type predicate that checks if a value is a valid resolved theme.
 */
function isResolvedTheme(value: unknown): value is ResolvedTheme {
	if (typeof value !== "string") {
		return false;
	}

	return resolvedThemes.includes(value as ResolvedTheme);
}

export {
	//,
	themes,
	resolvedThemes,
	$resolvedTheme,
	$theme,
	isResolvedTheme,
	isTheme,
};

export type {
	//,
	Theme,
	ResolvedTheme,
};
