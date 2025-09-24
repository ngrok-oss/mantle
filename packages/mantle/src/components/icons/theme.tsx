import { DesktopIcon } from "@phosphor-icons/react/Desktop";
import { MoonIcon } from "@phosphor-icons/react/Moon";
import { SunIcon } from "@phosphor-icons/react/Sun";
import type { SvgAttributes } from "../icon/types.js";
import { type Theme, useAppliedTheme } from "../theme/theme-provider.js";

/**
 * An icon that automatically adapts to the current applied theme.
 * - `light`: SunIcon
 * - `dark`: MoonIcon
 * - `light-high-contrast`: SunIcon (fill)
 * - `dark-high-contrast`: MoonIcon (fill)
 */
function AutoThemeIcon(props: SvgAttributes) {
	const appliedTheme = useAppliedTheme();

	return <ThemeIcon theme={appliedTheme} {...props} />;
}
AutoThemeIcon.displayName = "AutoThemeIcon";

type ThemeIconProps = SvgAttributes & { theme: Theme };

/**
 * An icon that adapts to a specific theme.
 * It will render a different icon based on the provided theme:
 * - `system`: DesktopIcon
 * - `light`: SunIcon
 * - `dark`: MoonIcon
 * - `light-high-contrast`: SunIcon (fill)
 * - `dark-high-contrast`: MoonIcon (fill)
 */
function ThemeIcon({ theme, ...props }: ThemeIconProps) {
	switch (theme) {
		case "system":
			return <DesktopIcon {...props} />;
		case "light":
			return <SunIcon {...props} />;
		case "dark":
			return <MoonIcon {...props} />;
		case "light-high-contrast":
			return <SunIcon {...props} weight="fill" />;
		case "dark-high-contrast":
			return <MoonIcon {...props} weight="fill" />;
	}
}
ThemeIcon.displayName = "ThemeIcon";

export {
	//,
	AutoThemeIcon,
	ThemeIcon,
};
