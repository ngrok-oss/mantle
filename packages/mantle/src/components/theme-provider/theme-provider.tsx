"use client";

import clsx from "clsx";
import type { ComponentProps, PropsWithChildren } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import invariant from "tiny-invariant";
import { useMatchesMediaQuery } from "../../hooks/use-matches-media-query.js";
import { PreloadFonts } from "./preload-fonts.js";

/**
 * prefersDarkModeMediaQuery is the media query used to detect if the user prefers dark mode.
 */
const prefersDarkModeMediaQuery = "(prefers-color-scheme: dark)";

/**
 * prefersHighContrastMediaQuery is the media query used to detect if the user prefers high contrast mode.
 */
const prefersHighContrastMediaQuery = "(prefers-contrast: more)";

/**
 * resolvedThemes is a tuple of valid themes that have been resolved from "system" to a specific theme.
 */
const resolvedThemes = [
	"light",
	"dark",
	"light-high-contrast",
	"dark-high-contrast",
] as const;

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
const $resolvedTheme = <T extends ResolvedTheme = ResolvedTheme>(value: T) =>
	value;

/**
 * Type predicate that checks if a value is a valid resolved theme.
 */
function isResolvedTheme(value: unknown): value is ResolvedTheme {
	if (typeof value !== "string") {
		return false;
	}

	return resolvedThemes.includes(value as ResolvedTheme);
}

/**
 * DEFAULT_STORAGE_KEY is the default key used to store the theme in localStorage.
 */
const DEFAULT_STORAGE_KEY = "mantle-ui-theme";

/**
 * ThemeProviderState is the shape of the state returned by the ThemeProviderContext.
 */
type ThemeProviderState = [theme: Theme, setTheme: (theme: Theme) => void];

/**
 * Initial state for the ThemeProviderContext.
 */
const initialState: ThemeProviderState = ["system", () => null];

/**
 * ThemeProviderContext is a React Context that provides the current theme and a function to set the theme.
 */
const ThemeProviderContext = createContext<ThemeProviderState | null>(
	initialState,
);

/**
 * isBrowser returns true if the code is running in a browser environment.
 */
const isBrowser = () => typeof window !== "undefined";

/**
 * Gets the stored theme from localStorage or returns the default theme if no theme is stored.
 */
function getStoredTheme(storageKey: string, defaultTheme: Theme = "system") {
	const fallbackTheme = defaultTheme ?? "system";
	if (isBrowser()) {
		let storedTheme: string | null = null;
		try {
			storedTheme =
				"localStorage" in window
					? window.localStorage.getItem(storageKey)
					: null;
		} catch (_) {}
		return isTheme(storedTheme) ? storedTheme : fallbackTheme;
	}
	return fallbackTheme;
}

type ThemeProviderProps = PropsWithChildren & {
	defaultTheme?: Theme;
	storageKey?: string;
};

/**
 * ThemeProvider is a React Context Provider that provides the current theme and a function to set the theme.
 *
 * @see https://mantle.ngrok.com/components/theme-provider#api-theme-provider
 *
 * @example
 * ```tsx
 * <ThemeProvider defaultTheme="system" storageKey="app-theme">
 *   <App />
 * </ThemeProvider>
 * ```
 */
function ThemeProvider({
	children,
	defaultTheme = "system",
	storageKey = DEFAULT_STORAGE_KEY,
}: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(() => {
		const initialTheme = getStoredTheme(storageKey, defaultTheme);
		applyTheme(initialTheme);
		return initialTheme;
	});

	useEffect(() => {
		const storedTheme = getStoredTheme(storageKey, defaultTheme);
		setTheme(storedTheme);
		applyTheme(storedTheme);
	}, [defaultTheme, storageKey]);

	useEffect(() => {
		const prefersDarkMql = window.matchMedia(prefersDarkModeMediaQuery);
		const prefersHighContrastMql = window.matchMedia(
			prefersHighContrastMediaQuery,
		);

		const onChange = () => {
			const storedTheme = getStoredTheme(storageKey, defaultTheme);

			// If the stored theme is not "system", then the user has explicitly set a theme and we should not
			// automatically change the theme when the user's system preferences change.
			if (storedTheme !== "system") {
				return;
			}

			applyTheme("system");
		};

		prefersDarkMql.addEventListener("change", onChange);
		prefersHighContrastMql.addEventListener("change", onChange);

		return () => {
			prefersDarkMql.removeEventListener("change", onChange);
			prefersHighContrastMql.removeEventListener("change", onChange);
		};
	}, [defaultTheme, storageKey]);

	const value: ThemeProviderState = useMemo(
		() => [
			theme,
			(theme: Theme) => {
				try {
					if ("localStorage" in window) {
						window.localStorage.setItem(storageKey, theme);
					}
				} catch (_) {}
				setTheme(theme);
				applyTheme(theme);
			},
		],
		[storageKey, theme],
	);

	return (
		<ThemeProviderContext.Provider value={value}>
			{children}
		</ThemeProviderContext.Provider>
	);
}
ThemeProvider.displayName = "ThemeProvider";

/**
 * useTheme returns the current theme and a function to set the theme.
 *
 * @note This function will throw an error if used outside of a ThemeProvider context tree.
 */
function useTheme() {
	const context = useContext(ThemeProviderContext);

	invariant(context, "useTheme must be used within a ThemeProvider");

	return context;
}

/**
 * Applies the given theme to the `<html>` element.
 */
function applyTheme(theme: Theme) {
	if (!isBrowser()) {
		return;
	}

	const htmlElement = window.document.documentElement;
	htmlElement.classList.remove(...themes);
	const prefersDarkMode = window.matchMedia(prefersDarkModeMediaQuery).matches;
	const prefersHighContrast = window.matchMedia(
		prefersHighContrastMediaQuery,
	).matches;
	const newTheme = resolveTheme(theme, {
		prefersDarkMode,
		prefersHighContrast,
	});
	htmlElement.classList.add(newTheme);
	htmlElement.dataset.appliedTheme = newTheme;
	htmlElement.dataset.theme = theme;
}

/**
 * Read the theme and applied theme from the `<html>` element.
 */
function readThemeFromHtmlElement() {
	if (!isBrowser()) {
		return {
			appliedTheme: undefined,
			theme: undefined,
		};
	}

	const htmlElement = window.document.documentElement;
	const theme = isTheme(htmlElement.dataset.theme)
		? htmlElement.dataset.theme
		: undefined;
	const appliedTheme = isResolvedTheme(htmlElement.dataset.appliedTheme)
		? htmlElement.dataset.appliedTheme
		: undefined;

	return {
		appliedTheme,
		theme,
	};
}

/**
 * If the theme is "system", it will resolve the theme based on the user's media query preferences, otherwise it will return the theme as is.
 * This will mirror the result that gets applied to the <html> element.
 */
function resolveTheme(
	theme: Theme,
	{
		prefersDarkMode,
		prefersHighContrast,
	}: { prefersDarkMode: boolean; prefersHighContrast: boolean },
) {
	if (theme === "system") {
		return determineThemeFromMediaQuery({
			prefersDarkMode,
			prefersHighContrast,
		});
	}

	return theme;
}

/**
 * If the theme is "system", it will resolve the theme based on the user's media query preferences, otherwise it will return the theme as is.
 * This will mirror the result that gets applied to the <html> element.
 */
function useAppliedTheme() {
	const themeContext = useContext(ThemeProviderContext);
	const theme = themeContext != null ? themeContext[0] : "system";

	const prefersDarkMode = useMatchesMediaQuery(prefersDarkModeMediaQuery);
	const prefersHighContrast = useMatchesMediaQuery(
		prefersHighContrastMediaQuery,
	);

	return resolveTheme(theme, { prefersDarkMode, prefersHighContrast });
}

/**
 * determineThemeFromMediaQuery returns the theme that should be used based on the user's media query preferences.
 * @private
 */
export function determineThemeFromMediaQuery({
	prefersDarkMode,
	prefersHighContrast,
}: {
	prefersDarkMode: boolean;
	prefersHighContrast: boolean;
}): ResolvedTheme {
	if (prefersHighContrast) {
		return prefersDarkMode ? "dark-high-contrast" : "light-high-contrast";
	}

	return prefersDarkMode ? "dark" : "light";
}

type PreventWrongThemeFlashScriptContentOptions = {
	defaultTheme?: Theme;
	storageKey?: string;
};

/**
 * preventWrongThemeFlashScriptContent generates a script that prevents the wrong theme from flashing on initial page load.
 * It checks localStorage for a stored theme, and if none is found, it sets the default theme.
 * It also applies the correct theme to the `<html>` element based on the user's media query preferences.
 */
function preventWrongThemeFlashScriptContent(
	options?: PreventWrongThemeFlashScriptContentOptions,
) {
	const { defaultTheme = "system", storageKey = DEFAULT_STORAGE_KEY } =
		options ?? {};

	return `
(function() {
	const themes = ${JSON.stringify(themes)};
	const isTheme = (value) => typeof value === "string" && themes.includes(value);
	const fallbackTheme = "${defaultTheme}" ?? "system";
	let maybeStoredTheme = null;
	try {
		maybeStoredTheme = "localStorage" in window ? window.localStorage.getItem("${storageKey}") : null;
	} catch (_) {}
	const hasStoredTheme = isTheme(maybeStoredTheme);
	if (!hasStoredTheme && "localStorage" in window) {
		try {
			window.localStorage.setItem("${storageKey}", fallbackTheme);
		} catch (_) {}
	}
	const themePreference = hasStoredTheme ? maybeStoredTheme : fallbackTheme;
	const prefersDarkMode = window.matchMedia("${prefersDarkModeMediaQuery}").matches;
	const prefersHighContrast = window.matchMedia("${prefersHighContrastMediaQuery}").matches;
	let initialTheme = themePreference;
	if (initialTheme === "system") {
		if (prefersHighContrast) {
			initialTheme = prefersDarkMode ? "dark-high-contrast" : "light-high-contrast";
		} else {
			initialTheme = prefersDarkMode ? "dark" : "light";
		}
	}
	const htmlElement = document.documentElement;
	htmlElement.classList.remove(...themes);
	htmlElement.classList.add(initialTheme);
	htmlElement.dataset.appliedTheme = initialTheme;
	htmlElement.dataset.theme = themePreference;
})();
`.trim();
}

type MantleThemeHeadContentProps = {
	/**
	 * The default theme to use if no theme is stored in localStorage.
	 * @default "system"
	 */
	defaultTheme?: Theme;
	/**
	 * An optional CSP nonce to allowlist this inline script. Using this can help
	 * you to avoid using the CSP `unsafe-inline` directive, which disables
	 * XSS protection and would allowlist all inline scripts or styles.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/nonce
	 */
	nonce?: string;
	/**
	 * The key used to store the theme in localStorage.
	 * @default "mantle-ui-theme"
	 */
	storageKey?: string;
} & ComponentProps<typeof PreloadFonts>;

/**
 * MantleThemeHeadContent is a React component that renders a script to prevent
 * Flash of Unstyled Content (FOUC), or the wrong theme from flashing on initial
 * page load.
 *
 * Render as high as possible in the <head> element.
 */
const MantleThemeHeadContent = ({
	defaultTheme = "system",
	includeNunitoSans = false,
	nonce,
	storageKey = DEFAULT_STORAGE_KEY,
}: MantleThemeHeadContentProps) => (
	<>
		<script
			dangerouslySetInnerHTML={{
				__html: preventWrongThemeFlashScriptContent({
					defaultTheme,
					storageKey,
				}),
			}}
			nonce={nonce}
		/>
		<PreloadFonts includeNunitoSans={includeNunitoSans} />
	</>
);
MantleThemeHeadContent.displayName = "MantleThemeHeadContent";

type InitialThemeProps = {
	className: string;
	"data-applied-theme": Omit<Theme, "system">;
	"data-theme": Theme;
};

/**
 * useInitialHtmlThemeProps returns the initial props that should be applied to the <html> element to prevent react hydration errors.
 */
function useInitialHtmlThemeProps(props?: {
	className?: string;
	defaultTheme?: Theme;
	storageKey?: string;
}): InitialThemeProps {
	const {
		className = "",
		defaultTheme = "system",
		storageKey = DEFAULT_STORAGE_KEY,
	} = props ?? {};

	return useMemo(() => {
		if (!isBrowser()) {
			return {
				className: clsx(className),
				"data-applied-theme": "system",
				"data-theme": "system",
			};
		}

		const prefersDarkMode = window.matchMedia(
			prefersDarkModeMediaQuery,
		).matches;
		const prefersHighContrast = window.matchMedia(
			prefersHighContrastMediaQuery,
		).matches;
		const initialTheme = getStoredTheme(storageKey, defaultTheme);
		const reolvedTheme = resolveTheme(initialTheme, {
			prefersDarkMode,
			prefersHighContrast,
		});

		return {
			className: clsx(className, reolvedTheme),
			"data-applied-theme": reolvedTheme,
			"data-theme": initialTheme,
		};
	}, [className, defaultTheme, storageKey]);
}

export {
	//,
	$resolvedTheme,
	$theme,
	applyTheme,
	isResolvedTheme,
	isTheme,
	MantleThemeHeadContent,
	preventWrongThemeFlashScriptContent,
	readThemeFromHtmlElement,
	resolvedThemes,
	ThemeProvider,
	themes,
	useAppliedTheme,
	useInitialHtmlThemeProps,
	useTheme,
};

export type {
	//,
	ResolvedTheme,
	Theme,
	ThemeProviderProps,
};
