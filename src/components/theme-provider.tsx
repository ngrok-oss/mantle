"use client";

import type { PropsWithChildren } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import invariant from "tiny-invariant";

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
 * ThemeProvider is a React Context Provider that provides the current theme and a function to set the theme.
 */
export function ThemeProvider({ children, defaultTheme = "system", storageKey = DEFAULT_STORAGE_KEY }: Props) {
	const [theme, setTheme] = useState<Theme>(() =>
		typeof window === "undefined" ? defaultTheme : (window.localStorage.getItem(storageKey) as Theme) || defaultTheme,
	);

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
