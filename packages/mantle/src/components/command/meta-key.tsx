import { useEffect, useState } from "react";

/**
 * Renders the platform-appropriate meta key label (⌘ or Ctrl).
 *
 * - Initializes to `"Ctrl"` to avoid SSR mismatch.
 * - Updates on mount using `detectMetaKey()`.
 */
function MetaKey() {
	const [label, setLabel] = useState<"⌘" | "Ctrl">("Ctrl");

	useEffect(() => {
		setLabel(detectMetaKey());
	}, []);

	return <span suppressHydrationWarning>{label}</span>;
}

export {
	//,
	MetaKey,
};

/**
 * Type guard for `navigator.userAgentData` existence.
 * Useful for newer UA hints where `platform` may be available.
 *
 * @param navigator The global `navigator`
 * @returns `true` if UA Data hints exist; narrows `navigator` accordingly.
 */
function hasUAData(
	navigator: Navigator,
): navigator is Navigator & { userAgentData: { platform?: string } } {
	return "userAgentData" in navigator;
}

/**
 * Detects the appropriate meta key label for the current platform.
 *
 * SSR-safe: returns `"Ctrl"` when `navigator` is not available.
 *
 * @returns `"⌘"` for Apple platforms; otherwise `"Ctrl"`.
 */
function detectMetaKey(): "⌘" | "Ctrl" {
	if (typeof navigator === "undefined") {
		return "Ctrl"; // SSR default
	}

	let platform = "";

	if (hasUAData(navigator)) {
		platform = navigator.userAgentData.platform ?? "";
	}

	if (!platform) {
		platform = navigator.platform || navigator.userAgent || "";
	}

	const isApple = /mac|iphone|ipad|ipod/i.test(platform);

	if (isApple) {
		return "⌘";
	}

	return "Ctrl";
}
