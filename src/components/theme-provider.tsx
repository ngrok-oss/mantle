import type { PropsWithChildren } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import invariant from "tiny-invariant";

/**
 * prefersDarkModeMediaQuery is the media query used to detect if the user prefers dark mode.
 */
const prefersDarkModeMediaQuery = "(prefers-color-scheme: dark)" as const;

/**
 * themes is a tuple of valid themes.
 */
const themes = ["system", "light", "dark", "light-high-contrast", "dark-high-contrast"] as const;

/**
 * Theme is a string literal type that represents a valid theme.
 */
export type Theme = (typeof themes)[number];

/**
 * theme is a helper which translates the Theme type into a string literal type.
 */
export const theme = (value: Theme) => value;

/**
 * Type predicate that checks if a value is a valid theme.
 */
export function isTheme(value: unknown): value is Theme {
	if (typeof value !== "string") {
		return false;
	}

	return themes.includes(value as Theme);
}

/**
 * DEFAULT_STORAGE_KEY is the default key used to store the theme in localStorage.
 */
const DEFAULT_STORAGE_KEY = "mantle-ui-theme" as const;

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
const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

type Props = PropsWithChildren & {
	defaultTheme?: Theme;
	storageKey?: string;
};

/**
 * isBrowser returns true if the code is running in a browser environment.
 */
const isBrowser = () => typeof window !== "undefined";

/**
 * PreventWrongThemeFlash is a React component that prevents the wrong theme from flashing on initial page load.
 * Render as high as possible in the DOM, preferably in the <head> element.
 */
export const PreventWrongThemeFlash = ({
	defaultTheme = "system",
	storageKey = DEFAULT_STORAGE_KEY,
}: {
	defaultTheme?: Theme;
	storageKey?: string;
}) => (
	<script
		dangerouslySetInnerHTML={{
			__html: `
(function() {
	const themes = ${JSON.stringify(themes)};
	const isTheme = (value) => typeof value === "string" && themes.includes(value);
	const fallbackTheme = "${defaultTheme}" ?? "system";
	const maybeStoredTheme = window.localStorage.getItem("${storageKey}");
	const themePreference = isTheme(maybeStoredTheme) ? maybeStoredTheme : fallbackTheme;
	const prefersDarkMode = window.matchMedia("${prefersDarkModeMediaQuery}").matches;
	const theme = themePreference === "system" ? (prefersDarkMode ? "dark" : "light") : themePreference;
	const htmlElement = document.documentElement;
	htmlElement.classList.remove(...themes);
	htmlElement.classList.add(theme);
})();
`.trim(),
		}}
	/>
);

/**
 * ThemeProvider is a React Context Provider that provides the current theme and a function to set the theme.
 */
export function ThemeProvider({ children, defaultTheme = "system", storageKey = DEFAULT_STORAGE_KEY }: Props) {
	const [theme, setTheme] = useState<Theme>(() => {
		const fallback = defaultTheme ?? "system";
		if (isBrowser()) {
			return (window.localStorage.getItem(storageKey) as Theme | null) ?? fallback;
		}
		return fallback;
	});

	useEffect(() => {
		const storedTheme = window.localStorage.getItem(storageKey) as Theme | null;
		if (storedTheme && themes.includes(storedTheme)) {
			setTheme(storedTheme);
		}
	}, [storageKey]);

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(...themes);

		if (theme === "system") {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
			root.classList.add(systemTheme);
			return;
		}
		root.classList.add(theme);
	}, [theme]);

	const value: ThemeProviderState = useMemo(
		() => [
			theme,
			(theme: Theme) => {
				window.localStorage.setItem(storageKey, theme);
				setTheme(theme);
			},
		],
		[theme, storageKey],
	);

	return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
}

/**
 * useTheme returns the current theme and a function to set the theme.
 *
 * @note This function will throw an error if used outside of a ThemeProvider context tree.
 */
export function useTheme() {
	const context = useContext(ThemeProviderContext);

	invariant(context, "useTheme must be used within a ThemeProvider");

	return context;
}
