"use client";

import clsx from "clsx";
import type { ComponentProps, PropsWithChildren } from "react";
import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
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
 * DEFAULT_STORAGE_KEY is the default key used to store the theme in cookies.
 */
const DEFAULT_STORAGE_KEY = "mantle-ui-theme";

/**
 * Notifies other open tabs (same origin) that the theme changed.
 *
 * Prefers a shared {@link BroadcastChannel} for immediate, reliable delivery.
 * Falls back to writing a unique “ping” value to `localStorage`, which triggers
 * the cross-tab `storage` event. Both mechanisms only work across the same origin.
 *
 * Uses a timestamp to ensure the storage value always changes so the event fires.
 *
 * @remarks
 * - Same-origin only: BroadcastChannel and the `storage` event do not cross subdomains
 *   or different schemes/ports. For cross-subdomain sync, use a postMessage hub or server push.
 * - This function is fire-and-forget and intentionally swallows errors.
 * - Receivers should re-read the cookie/source of truth and then apply the theme;
 *   don’t trust the payload blindly.
 *
 * @example
 * // Sender (inside your setter)
 * notifyOtherTabs(nextTheme, {
 *   broadcastChannel: broadcastChannelRef.current,
 *   pingKey: `${storageKey}__ping`,
 * });
 *
 * @example
 * // Receiver (setup once per tab)
 * const bc = new BroadcastChannel(storageKey);
 * bc.onmessage = () => syncThemeFromCookie();
 * window.addEventListener('storage', (e) => {
 *   if (e.key === `${storageKey}__ping`) syncThemeFromCookie();
 * });
 */
function notifyOtherTabs(
	theme: Theme,
	options: {
		broadcastChannel: BroadcastChannel | null;
		pingKey: `${string}__ping`;
	},
) {
	const { broadcastChannel, pingKey } = options;

	// first try BroadcastChannel
	try {
		if (broadcastChannel) {
			broadcastChannel.postMessage({
				theme,
				timestamp: Date.now(),
			});
			return;
		}
	} catch (_) {}

	// fallback to storage event: write a "ping" key (not the real storageKey)
	try {
		localStorage.setItem(
			pingKey,
			JSON.stringify({ theme, timestamp: Date.now() }),
		);
	} catch (_) {}
}

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
 * Sets a cookie with appropriate domain for the current hostname.
 * Uses .ngrok.com for ngrok domains, otherwise no domain (current domain only).
 */
function setCookie(name: string, value: string) {
	if (!isBrowser()) {
		return;
	}

	try {
		const expires = new Date();
		expires.setFullYear(expires.getFullYear() + 1); // 1 year expiration

		// Only set .ngrok.com domain for ngrok domains, otherwise let it default to current domain
		const { hostname, protocol } = window.location;
		const domainAttribute =
			hostname === "ngrok.com" || hostname.endsWith(".ngrok.com")
				? "; domain=.ngrok.com"
				: "";
		const secureAttribute = protocol === "https:" ? "; Secure" : "";

		document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/${domainAttribute}; SameSite=Lax${secureAttribute}`;
	} catch (_) {
		// silently swallow errors
	}
}

/**
 * Gets the stored theme from cookies or returns the default theme if no theme is stored.
 */
function getStoredTheme(storageKey: string, defaultTheme: Theme = "system") {
	const fallbackTheme = defaultTheme ?? "system";
	if (isBrowser()) {
		let storedTheme: string | null = null;
		try {
			const cookies = document.cookie.split(";");
			const themeCookie = cookies.find((cookie) =>
				cookie.trim().startsWith(`${storageKey}=`),
			);
			if (themeCookie) {
				const cookieValue = themeCookie.trim().substring(storageKey.length + 1);
				storedTheme = cookieValue ? decodeURIComponent(cookieValue) : null;
			}
		} catch (_) {}
		return isTheme(storedTheme) ? storedTheme : fallbackTheme;
	}
	return fallbackTheme;
}

/**
 * Props for the {@link ThemeProvider} component.
 */
type ThemeProviderProps = PropsWithChildren & {
	/**
	 * The initial theme to apply if no value is found in storage.
	 *
	 * Possible values {@link themes}:
	 * - `"system"` – follow the user’s system preferences (default).
	 * - `"light"` – force light mode.
	 * - `"dark"` – force dark mode.
	 * - `"light-high-contrast"` – light mode with increased contrast.
	 * - `"dark-high-contrast"` – dark mode with increased contrast.
	 */
	defaultTheme?: Theme;

	/**
	 * The key used to persist the selected theme in cookies or storage.
	 *
	 * Defaults to `"theme"` (or the {@link DEFAULT_STORAGE_KEY} constant).
	 * Useful if you need to isolate theme settings across multiple apps
	 * or contexts.
	 */
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
	// Init once from cookie and apply immediately to avoid flashes
	const [theme, setTheme] = useState<Theme>(() => {
		const storedTheme = getStoredTheme(storageKey, defaultTheme);
		applyTheme(storedTheme);
		return storedTheme;
	});

	const broadcastChannelRef = useRef<BroadcastChannel | null>(null);

	useEffect(() => {
		function syncThemeFromCookie(next?: Theme) {
			const newTheme = next ?? getStoredTheme(storageKey, defaultTheme);
			setTheme(newTheme);
			applyTheme(newTheme);
		}

		// initial sync in case defaultTheme or storageKey changed
		syncThemeFromCookie();

		// add cross-tab listeners (prefer broadcast channel, use localStorage as fallback)
		try {
			if ("BroadcastChannel" in window) {
				broadcastChannelRef.current = new BroadcastChannel(storageKey);
				broadcastChannelRef.current.onmessage = (event) => {
					const value: unknown = event?.data?.theme;
					if (isTheme(value)) {
						syncThemeFromCookie(value);
					}
				};
			}
		} catch (_) {}

		const onStorage = (event: StorageEvent) => {
			if (event.key === `${storageKey}__ping`) {
				syncThemeFromCookie();
			}
		};
		window.addEventListener("storage", onStorage);

		// add media query listeners for system theme changes
		const prefersDarkMql = window.matchMedia(prefersDarkModeMediaQuery);
		const prefersHighContrastMql = window.matchMedia(
			prefersHighContrastMediaQuery,
		);

		function onChange() {
			syncThemeFromCookie();
		}

		function onVisibilityChange() {
			if (document.visibilityState === "visible") {
				syncThemeFromCookie();
			}
		}

		prefersDarkMql.addEventListener("change", onChange);
		prefersHighContrastMql.addEventListener("change", onChange);

		// pageshow fires on bfcache restore (event.persisted === true) and some restore-from-freeze cases.
		window.addEventListener("pageshow", onChange);

		// visibilitychange to handle coming back to a tab
		document.addEventListener("visibilitychange", onVisibilityChange);

		// don't forget to clean up your slop!
		return () => {
			window.removeEventListener("storage", onStorage);
			prefersDarkMql.removeEventListener("change", onChange);
			prefersHighContrastMql.removeEventListener("change", onChange);
			window.removeEventListener("pageshow", onChange);
			document.removeEventListener("visibilitychange", onVisibilityChange);

			try {
				broadcastChannelRef.current?.close();
			} catch (_) {}
			broadcastChannelRef.current = null;
		};
	}, [defaultTheme, storageKey]);

	const value: ThemeProviderState = useMemo(
		() => [
			theme,
			(next: Theme) => {
				setCookie(storageKey, next);
				setTheme(next);
				applyTheme(next);
				notifyOtherTabs(next, {
					broadcastChannel: broadcastChannelRef.current,
					pingKey: `${storageKey}__ping`,
				});
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

	const html = window.document.documentElement;

	const prefersDarkMode = window.matchMedia(prefersDarkModeMediaQuery).matches;
	const prefersHighContrast = window.matchMedia(
		prefersHighContrastMediaQuery,
	).matches;

	const resolvedTheme = resolveTheme(theme, {
		prefersDarkMode,
		prefersHighContrast,
	});

	const htmlTheme = html.dataset.theme;
	const htmlAppliedTheme = html.dataset.appliedTheme;

	const currentTheme = isTheme(htmlTheme) ? htmlTheme : undefined;
	const currentResolvedTheme = isResolvedTheme(htmlAppliedTheme)
		? htmlAppliedTheme
		: undefined;

	if (currentTheme === theme && currentResolvedTheme === resolvedTheme) {
		// nothing to do: input theme and resolved class already match
		return;
	}

	// Clear any stale theme class, then apply the new one
	html.classList.remove(...resolvedThemes); // ✅ remove all potential theme classes
	html.classList.add(resolvedTheme);
	html.dataset.theme = theme;
	html.dataset.appliedTheme = resolvedTheme;
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
 *
 * @example
 * ```tsx
 * const theme = determineThemeFromMediaQuery({
 *   prefersDarkMode: true,
 *   prefersHighContrast: false
 * });
 * // Returns: "dark"
 *
 * const themeWithContrast = determineThemeFromMediaQuery({
 *   prefersDarkMode: false,
 *   prefersHighContrast: true
 * });
 * // Returns: "light-high-contrast"
 * ```
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
 * It checks cookies for a stored theme, and if none is found, it sets the default theme.
 * It also applies the correct theme to the `<html>` element based on the user's media query preferences.
 */
function preventWrongThemeFlashScriptContent(
	options?: PreventWrongThemeFlashScriptContentOptions,
) {
	const { defaultTheme = "system", storageKey = DEFAULT_STORAGE_KEY } =
		options ?? {};

	// Only resolved themes are ever applied as classes
	const resolved = resolvedThemes;

	return `
(function() {
	const RESOLVED = ${JSON.stringify(resolved)};
	const DEF = "${defaultTheme}";
	const KEY = "${storageKey}";
	const doc = document, root = doc.documentElement;

	function isTheme(v) {
		return typeof v === "string" && (v === "system" || RESOLVED.indexOf(v) > -1);
	}

	function readCookie(name){
		// Efficient single-pass cookie lookup: "; name=value"
		const all = "; " + doc.cookie, token = "; " + name + "=";
		const startIdx = all.indexOf(token);
		if (startIdx < 0) {
			return null;
		}
		const endIdx = all.indexOf(";", startIdx + token.length);
		const rawValue = all.slice(startIdx + token.length, endIdx < 0 ? void 0 : endIdx) || null;
		try { 
			return rawValue ? decodeURIComponent(rawValue) : null;
		} catch(_) { 
			return rawValue;
		}
	}

	function writeCookie(name, val) {
		try {
			const expires = new Date(); 
			expires.setFullYear(expires.getFullYear() + 1);
			const hostname = location.hostname;
			const protocol = location.protocol;
			const isDotNgrok = (hostname === "ngrok.com" || hostname.endsWith(".ngrok.com"));
			const domain = isDotNgrok ? "; domain=.ngrok.com" : "";
			const secure = protocol === "https:" ? "; Secure" : "";
			doc.cookie = name + "=" + encodeURIComponent(val) + "; expires=" + expires.toUTCString() + "; path=/" + domain + "; SameSite=Lax" + secure;
		} catch(_) {}
	}

	// 1) Read preference: cookie first, fallback to localStorage (migration support)
	let cookieTheme = null, lsTheme = null, storedTheme = null;
	try { 
		cookieTheme = readCookie(KEY);
	} catch(_) {}
	
	if (isTheme(cookieTheme)) { 
		storedTheme = cookieTheme;
	} else {
		try { 
			lsTheme = window.localStorage && window.localStorage.getItem(KEY);
		} catch(_) {}
		if (isTheme(lsTheme)) {
			storedTheme = lsTheme;
		}
	}

	const preference = isTheme(storedTheme) ? storedTheme : DEF;

	// 2) Resolve only when needed to avoid unnecessary media queries
	let resolvedTheme = preference;
	if (preference === "system") {
		const isDark = matchMedia("${prefersDarkModeMediaQuery}").matches;
		const isHighContrast = matchMedia("${prefersHighContrastMediaQuery}").matches;
		resolvedTheme = isHighContrast 
			? (isDark ? "dark-high-contrast" : "light-high-contrast")
			: (isDark ? "dark" : "light");
	}

	// 3) Only touch DOM if we actually need to change something (SSR optimization)
	if (root.dataset.appliedTheme !== resolvedTheme || root.dataset.theme !== preference) {
		// Remove all theme classes, add the correct one
		for (let i = 0; i < RESOLVED.length; i++) {
			root.classList.remove(RESOLVED[i]);
		}
		root.classList.add(resolvedTheme);
		root.dataset.appliedTheme = resolvedTheme;
		root.dataset.theme = preference;
	}

	// 4) Handle persistence/migration synchronously to prevent FOUC
	const hadValidCookie = isTheme(cookieTheme);
	try {
		// Migrate from localStorage to cookies if needed
		if (isTheme(lsTheme)) {
			writeCookie(KEY, lsTheme);
			try { 
				window.localStorage.removeItem(KEY);
			} catch(_) {}
		} else if (!hadValidCookie) {
			// Set default cookie if none existed
			writeCookie(KEY, preference);
		}
	} catch (_) {}
})();
`.trim();
}

type MantleThemeHeadContentProps = {
	/**
	 * The default theme to use if no theme is stored in cookies.
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
	 * The key used to store the theme in cookies.
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
	"data-applied-theme": ResolvedTheme;
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
				"data-applied-theme": "light", // assume light on server
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
		const resolvedTheme = resolveTheme(initialTheme, {
			prefersDarkMode,
			prefersHighContrast,
		});

		return {
			className: clsx(className, resolvedTheme),
			"data-applied-theme": resolvedTheme,
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
