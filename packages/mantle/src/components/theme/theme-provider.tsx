"use client";

import type { PropsWithChildren } from "react";
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import invariant from "tiny-invariant";
import { useMatchesMediaQuery } from "../../hooks/use-matches-media-query.js";
import { cx } from "../../utils/cx/cx.js";
import { canUseDOM } from "../browser-only/browser-only.js";
import { PreloadCoreFonts } from "./fonts.js";
import {
	type ResolvedTheme,
	type Theme,
	isResolvedTheme,
	isTheme,
	resolvedThemes,
	themes,
} from "./themes.js";

/**
 * prefersDarkModeMediaQuery is the media query used to detect if the user prefers dark mode.
 */
const prefersDarkModeMediaQuery = "(prefers-color-scheme: dark)";

/**
 * prefersHighContrastMediaQuery is the media query used to detect if the user prefers high contrast mode.
 */
const prefersHighContrastMediaQuery = "(prefers-contrast: more)";

/**
 * THEME_STORAGE_KEY is the key used to store the theme in cookies.
 */
const THEME_STORAGE_KEY = "mantle-ui-theme";

/**
 * DEFAULT_THEME is the initial theme to apply if no value is found in storage.
 * {@link themes}
 */
const DEFAULT_THEME = "system" satisfies Theme;

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
const ThemeProviderContext = createContext<ThemeProviderState | null>(initialState);

type ThemeProviderProps = PropsWithChildren;

/**
 * ThemeProvider is a React Context Provider that provides the current theme and a function to set the theme.
 *
 * @see https://mantle.ngrok.com/components/theme-provider#themeprovider
 *
 * @example
 * ```tsx
 * <ThemeProvider defaultTheme="system" storageKey="app-theme">
 *   <App />
 * </ThemeProvider>
 * ```
 */
function ThemeProvider({ children }: ThemeProviderProps) {
	// Init once from cookie and apply immediately to avoid flashes
	const [theme, setTheme] = useState<Theme>(() => {
		const storedTheme = getStoredTheme({
			cookie: canUseDOM() ? document.cookie : null,
		});
		applyThemeToHtml(storedTheme);
		return storedTheme;
	});

	const broadcastChannelRef = useRef<BroadcastChannel | null>(null);

	useEffect(() => {
		function syncThemeFromCookie(next?: Theme) {
			const newTheme = next ?? getStoredTheme({ cookie: document.cookie });
			setTheme(newTheme);
			applyThemeToHtml(newTheme);
		}

		// initial sync in case defaultTheme or storageKey changed
		syncThemeFromCookie();

		// add cross-tab listeners (prefer broadcast channel, use localStorage as fallback)
		try {
			if ("BroadcastChannel" in window) {
				broadcastChannelRef.current = new BroadcastChannel(THEME_STORAGE_KEY);
				broadcastChannelRef.current.onmessage = (event) => {
					const value: unknown = event?.data?.theme;
					if (isTheme(value)) {
						syncThemeFromCookie(value);
					}
				};
			}
			// oxlint-disable-next-line no-unused-vars
		} catch (_) {
			// silently swallow errors
		}

		function onStorage(event: StorageEvent) {
			if (event.key === `${THEME_STORAGE_KEY}__ping`) {
				syncThemeFromCookie();
			}
		}
		window.addEventListener("storage", onStorage);

		// add media query listeners for system theme changes
		const prefersDarkMql = window.matchMedia(prefersDarkModeMediaQuery);
		const prefersHighContrastMql = window.matchMedia(prefersHighContrastMediaQuery);

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
				// oxlint-disable-next-line no-unused-vars
			} catch (_) {
				// silently swallow errors
			}
			broadcastChannelRef.current = null;
		};
	}, []);

	const value: ThemeProviderState = useMemo(
		() => [
			theme,
			(next: Theme) => {
				setCookie(next);
				setTheme(next);
				applyThemeToHtml(next);
				notifyOtherTabs(next, {
					broadcastChannel: broadcastChannelRef.current,
					pingKey: `${THEME_STORAGE_KEY}__ping`,
				});
			},
		],
		[theme],
	);

	return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
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
function applyThemeToHtml(theme: Theme) {
	if (!canUseDOM()) {
		return;
	}

	const html = window.document.documentElement;

	const prefersDarkMode = window.matchMedia(prefersDarkModeMediaQuery).matches;
	const prefersHighContrast = window.matchMedia(prefersHighContrastMediaQuery).matches;

	const resolvedTheme = resolveTheme(theme, {
		prefersDarkMode,
		prefersHighContrast,
	});

	const htmlTheme = html.dataset.theme;
	const htmlAppliedTheme = html.dataset.appliedTheme;

	const currentTheme = isTheme(htmlTheme) ? htmlTheme : undefined;
	const currentResolvedTheme = isResolvedTheme(htmlAppliedTheme) ? htmlAppliedTheme : undefined;

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
	if (!canUseDOM()) {
		return {
			appliedTheme: undefined,
			theme: undefined,
		};
	}

	const htmlElement = window.document.documentElement;
	const theme = isTheme(htmlElement.dataset.theme) ? htmlElement.dataset.theme : undefined;
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
	const prefersHighContrast = useMatchesMediaQuery(prefersHighContrastMediaQuery);

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

/**
 * Script that runs synchronously to prevent FOUC by applying the correct theme
 * before the page renders. This is the actual function that gets stringified and inlined.
 */
function preventThemeFlash(args: {
	storageKey: string;
	defaultTheme: Theme;
	themes: readonly Theme[];
	resolvedThemes: readonly ResolvedTheme[];
	prefersDarkModeMediaQuery: string;
	prefersHighContrastMediaQuery: string;
}) {
	const {
		storageKey,
		defaultTheme,
		themes,
		resolvedThemes,
		prefersDarkModeMediaQuery,
		prefersHighContrastMediaQuery,
	} = args;

	function isTheme(value: unknown): value is Theme {
		return typeof value === "string" && themes.includes(value as Theme);
	}

	function getThemeFromCookie(name: string): string | null {
		const cookie = document.cookie;
		if (!cookie) {
			return null;
		}

		try {
			const cookies = cookie.split(";");
			const themeCookie = cookies.find((c) => c.trim().startsWith(`${name}=`));
			const cookieValue = themeCookie?.split("=")[1];
			const storedTheme = cookieValue ? decodeURIComponent(cookieValue) : null;
			return storedTheme;
			// oxlint-disable-next-line no-unused-vars
		} catch (_) {
			return null;
		}
	}

	function buildCookie(name: string, val: string): string {
		const expires = new Date();
		expires.setFullYear(expires.getFullYear() + 1);
		const hostname = window.location.hostname;
		const protocol = window.location.protocol;
		const domainAttribute =
			hostname === "ngrok.com" || hostname.endsWith(".ngrok.com") ? "; domain=.ngrok.com" : "";
		const secureAttribute = protocol === "https:" ? "; Secure" : "";
		return `${name}=${encodeURIComponent(val)}; expires=${expires.toUTCString()}; path=/${domainAttribute}; SameSite=Lax${secureAttribute}`;
	}

	function writeCookie(name: string, val: string): void {
		try {
			document.cookie = buildCookie(name, val);
			// oxlint-disable-next-line no-unused-vars
		} catch (_) {
			// silently swallow errors
		}
	}

	function resolveThemeValue(
		theme: Theme,
		isDark: boolean,
		isHighContrast: boolean,
	): ResolvedTheme {
		if (theme === "system") {
			if (isHighContrast) {
				return isDark ? "dark-high-contrast" : "light-high-contrast";
			}
			return isDark ? "dark" : "light";
		}
		return theme;
	}

	// 1) Read preference: cookie first, fallback to localStorage (migration support)
	let cookieTheme: string | null = null;
	let lsTheme: string | null = null;
	let storedTheme: Theme | null = null;

	try {
		cookieTheme = getThemeFromCookie(storageKey);
		// oxlint-disable-next-line no-unused-vars
	} catch (_) {
		// silently swallow errors
	}

	if (isTheme(cookieTheme)) {
		storedTheme = cookieTheme;
	} else {
		try {
			lsTheme = window.localStorage?.getItem(storageKey) ?? null;
			// oxlint-disable-next-line no-unused-vars
		} catch (_) {
			// silently swallow errors
		}
		if (isTheme(lsTheme)) {
			storedTheme = lsTheme;
		}
	}

	const preference = isTheme(storedTheme) ? storedTheme : defaultTheme;

	// 2) Resolve theme based on media queries
	const isDark = matchMedia(prefersDarkModeMediaQuery).matches;
	const isHighContrast = matchMedia(prefersHighContrastMediaQuery).matches;
	const resolvedTheme = resolveThemeValue(preference, isDark, isHighContrast);

	const html = document.documentElement;
	// 3) Apply theme to DOM (same order as applyThemeToHtml)
	if (html.dataset.appliedTheme !== resolvedTheme || html.dataset.theme !== preference) {
		// Remove all theme classes
		for (const themeClass of resolvedThemes as readonly string[]) {
			html.classList.remove(themeClass);
		}
		// Add resolved theme class
		html.classList.add(resolvedTheme);
		// Set data attributes
		html.dataset.theme = preference;
		html.dataset.appliedTheme = resolvedTheme;
	}

	// 4) Handle persistence/migration synchronously to prevent FOUC
	const hadValidCookie = isTheme(cookieTheme);
	try {
		if (isTheme(lsTheme) && !hadValidCookie) {
			// Migrate from localStorage to cookie
			writeCookie(storageKey, lsTheme);
			try {
				window.localStorage.removeItem(storageKey);
				// oxlint-disable-next-line no-unused-vars
			} catch (_) {
				// silently swallow errors
			}
		} else if (!hadValidCookie) {
			// Set default cookie if none existed
			writeCookie(storageKey, preference);
		}
		// oxlint-disable-next-line no-unused-vars
	} catch (_) {
		// silently swallow errors
	}
}

/**
 * preventWrongThemeFlashScriptContent generates a script that prevents the wrong theme from flashing on initial page load.
 * It checks cookies for a stored theme, and if none is found, it sets the default theme.
 * It also applies the correct theme to the `<html>` element based on the user's media query preferences.
 */
function preventWrongThemeFlashScriptContent() {
	const args = {
		storageKey: THEME_STORAGE_KEY,
		defaultTheme: DEFAULT_THEME,
		themes,
		resolvedThemes,
		prefersDarkModeMediaQuery,
		prefersHighContrastMediaQuery,
	} as const satisfies Parameters<typeof preventThemeFlash>[0];

	return `(${preventThemeFlash.toString()})(${JSON.stringify(args)})`;
}

type MantleThemeHeadContentProps = {
	/**
	 * An optional CSP nonce to allowlist this inline script. Using this can help
	 * you to avoid using the CSP `unsafe-inline` directive, which disables
	 * XSS protection and would allowlist all inline scripts or styles.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/nonce
	 */
	nonce?: string;
};

export type PreventWrongThemeFlashScriptProps = MantleThemeHeadContentProps;

/**
 * Renders an inline script that prevents Flash of Unstyled Content (FOUC) or the
 * wrong theme flashing on first paint.
 *
 * Use this when you want full control of the `<head>` contents. For a packaged,
 * one-stop solution that also handles font preloads, use {@link MantleThemeHeadContent}.
 * To add font preloads alongside this script, pair it with {@link PreloadCoreFonts}.
 *
 * Place this as early as possible in the `<head>`.
 *
 * @example
 * ```tsx
 * <head>
 *   <PreventWrongThemeFlashScript nonce={nonce} />
 *   <PreloadCoreFonts />
 * </head>
 * ```
 *
 * @param nonce - Optional CSP nonce to allowlist the inline script under a strict CSP.
 * @returns {JSX.Element} A script tag injected before first paint.
 * @see PreloadCoreFonts
 * @see MantleThemeHeadContent
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce
 */
const PreventWrongThemeFlashScript = ({ nonce }: PreventWrongThemeFlashScriptProps) => (
	<script
		dangerouslySetInnerHTML={{
			__html: preventWrongThemeFlashScriptContent(),
		}}
		nonce={nonce}
		suppressHydrationWarning
	/>
);
PreventWrongThemeFlashScript.displayName = "PreventWrongThemeFlashScript";

/**
 * Renders the Mantle theme `<head>` content:
 * - an inline script to prevent FOUC / wrong-theme flash, and
 * - preload links for the core fonts.
 *
 * Use this when you want the one-liner that “just works.”
 * If you prefer fine-grained control, use {@link PreventWrongThemeFlashScript}
 * and {@link PreloadCoreFonts} directly.
 *
 * Place this as early as possible in the `<head>` so it runs before first paint
 * and fonts start fetching ASAP.
 *
 * @example
 * ```tsx
 * <head>
 *   // Performance hints for the CDN (recommended)
 *   <link rel="preconnect" href={assetsCdnOrigin} crossOrigin="anonymous" />
 *   <link rel="dns-prefetch" href={assetsCdnOrigin} />
 *
 *   <MantleThemeHeadContent nonce={nonce} />
 * </head>
 * ```
 *
 * @param nonce - Optional CSP nonce to allowlist the inline script under a strict CSP.
 * @returns JSX.Element fragment containing the script and font preloads.
 * @see PreventWrongThemeFlashScript
 * @see PreloadCoreFonts
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce
 */
const MantleThemeHeadContent = ({ nonce }: MantleThemeHeadContentProps) => (
	<>
		<PreventWrongThemeFlashScript nonce={nonce} />
		<PreloadCoreFonts />
	</>
);
MantleThemeHeadContent.displayName = "MantleThemeHeadContent";

type InitialThemeProps = {
	className: string;
	"data-applied-theme": ResolvedTheme;
	"data-theme": Theme;
};

type UseInitialHtmlThemePropsOptions = {
	className?: string;
	/**
	 * Raw `Cookie` header string from the incoming request. Pass this during SSR
	 * so the server can read the persisted theme and render the correct class,
	 * avoiding a flash when React hydrates.
	 */
	ssrCookie?: string;
};

/**
 * useInitialHtmlThemeProps returns the initial props that should be applied to the <html> element to prevent react hydration errors.
 */
function useInitialHtmlThemeProps(props: UseInitialHtmlThemePropsOptions = {}): InitialThemeProps {
	const { className = "", ssrCookie } = props ?? {};

	return useMemo(() => {
		let initialTheme: Theme;
		let resolvedTheme: ResolvedTheme;

		if (!canUseDOM()) {
			initialTheme = getStoredTheme({ cookie: ssrCookie });
			resolvedTheme = resolveTheme(initialTheme, {
				// During SSR we can't detect media queries, so assume light/no high contrast.
				// The inline script will correct this before paint for "system" theme users.
				prefersDarkMode: false,
				prefersHighContrast: false,
			});
		} else {
			const prefersDarkMode = window.matchMedia(prefersDarkModeMediaQuery).matches;
			const prefersHighContrast = window.matchMedia(prefersHighContrastMediaQuery).matches;
			initialTheme = getStoredTheme({ cookie: document.cookie });
			resolvedTheme = resolveTheme(initialTheme, {
				prefersDarkMode,
				prefersHighContrast,
			});
		}

		return {
			className: cx(className, resolvedTheme),
			"data-applied-theme": resolvedTheme,
			"data-theme": initialTheme,
		};
	}, [className, ssrCookie]);
}

type GetStoredThemeOptions = {
	/**
	 * raw Cookie header (SSR) or document.cookie (client)
	 */
	cookie: string | null | undefined;
};

/**
 * Returns the persisted UI theme from a Cookie header string.
 *
 * Looks for a cookie named by {@link THEME_STORAGE_KEY} and returns its value **iff**
 * it’s a valid `Theme` per `isTheme`. Otherwise, falls back to
 * {@link DEFAULT_THEME}. This function never throws; malformed encodings or
 * missing cookies quietly return the default.
 *
 * @example
 * getStoredTheme({ cookie: `${THEME_STORAGE_KEY}=dark; session=abc` }) // "dark"
 * @example
 * getStoredTheme({ cookie: "" }) // DEFAULT_THEME
 */
function getStoredTheme({ cookie }: GetStoredThemeOptions): Theme {
	if (!cookie) {
		return DEFAULT_THEME;
	}

	try {
		const cookies = cookie.split(";");
		const themeCookie = cookies.find((cookie) => cookie.trim().startsWith(`${THEME_STORAGE_KEY}=`));
		const cookieValue = themeCookie?.split("=")[1];
		const storedTheme = cookieValue ? globalThis.decodeURIComponent(cookieValue) : null;

		return isTheme(storedTheme) ? storedTheme : DEFAULT_THEME;
		// oxlint-disable-next-line no-unused-vars
	} catch (_) {
		return DEFAULT_THEME;
	}
}

/**
 * Extract just the mantle theme cookie from a raw `Cookie` header string.
 *
 * Use this in SSR loaders to safely pass the theme cookie to
 * {@link useInitialHtmlThemeProps} without exposing the full `Cookie` header
 * (which may contain HttpOnly/session cookies) in serialized loader data.
 *
 * @example
 * ```ts
 * // app/root.tsx loader
 * export const loader = async ({ request }: Route.LoaderArgs) => {
 *   const themeCookie = extractThemeCookie(request.headers.get("Cookie"));
 *   return { themeCookie };
 * };
 * ```
 *
 * @param cookieHeader - The raw `Cookie` header string from the request, or null/undefined.
 * @returns The `mantle-ui-theme=<value>` cookie string, or undefined if not found.
 */
function extractThemeCookie(cookieHeader: string | null | undefined): string | undefined {
	if (!cookieHeader) {
		return undefined;
	}

	return cookieHeader
		.split(";")
		.map((part) => part.trim())
		.find((part) => part.startsWith(`${THEME_STORAGE_KEY}=`));
}

export {
	MantleThemeHeadContent,
	PreventWrongThemeFlashScript,
	ThemeProvider,
	//,
	extractThemeCookie,
	getStoredTheme,
	preventWrongThemeFlashScriptContent,
	readThemeFromHtmlElement,
	useAppliedTheme,
	useInitialHtmlThemeProps,
	useTheme,
};

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
		// oxlint-disable-next-line no-unused-vars
	} catch (_) {
		// silently swallow errors
	}

	// fallback to storage event: write a "ping" key (not the real storageKey)
	try {
		localStorage.setItem(pingKey, JSON.stringify({ theme, timestamp: Date.now() }));
		// oxlint-disable-next-line no-unused-vars
	} catch (_) {
		// silently swallow errors
	}
}

function buildThemeCookie(value: string) {
	const expires = new Date();
	expires.setFullYear(expires.getFullYear() + 1); // 1 year expiration

	// Only set .ngrok.com domain for ngrok domains, otherwise let it default to current domain
	const { hostname, protocol } = window.location;
	const domainAttribute =
		hostname === "ngrok.com" || hostname.endsWith(".ngrok.com") ? "; domain=.ngrok.com" : "";
	const secureAttribute = protocol === "https:" ? "; Secure" : "";

	return `${THEME_STORAGE_KEY}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/${domainAttribute}; SameSite=Lax${secureAttribute}` as const;
}

/**
 * Sets a cookie with appropriate domain for the current hostname.
 * Uses .ngrok.com for ngrok domains, otherwise no domain (current domain only).
 */
function setCookie(value: string) {
	if (!canUseDOM()) {
		return;
	}

	try {
		document.cookie = buildThemeCookie(value);
		// oxlint-disable-next-line no-unused-vars
	} catch (_) {
		// silently swallow errors
	}
}
