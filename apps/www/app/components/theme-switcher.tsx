import { BrowserOnly } from "@ngrok/mantle/browser-only";
import { IconButton } from "@ngrok/mantle/button";
import { cx } from "@ngrok/mantle/cx";
import { DropdownMenu } from "@ngrok/mantle/dropdown-menu";
import { Icon } from "@ngrok/mantle/icon";
import { AutoThemeIcon, ThemeIcon } from "@ngrok/mantle/icons";
import { Skeleton } from "@ngrok/mantle/skeleton";
import { $theme, isTheme, useTheme } from "@ngrok/mantle/theme";

function ThemeSwitcher() {
	const [currentTheme, setTheme] = useTheme();

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<IconButton
					type="button"
					appearance="outlined"
					label="Change Theme"
					icon={
						<BrowserOnly fallback={<Skeleton className="rounded-full size-5" />}>
							{() => <AutoThemeIcon className="size-5" />}
						</BrowserOnly>
					}
				/>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content className="shadow-2xl" collisionPadding={{ right: 16 }}>
				<DropdownMenu.RadioGroup
					value={currentTheme}
					onValueChange={(value) => {
						if (isTheme(value)) {
							setTheme(value);
						}
					}}
				>
					<DropdownMenu.RadioItem name="theme" value={$theme("system")}>
						<Icon
							svg={<ThemeIcon theme="system" />}
							className={cx("text-muted", currentTheme === "system" && "text-on-filled")}
						/>
						System Preference
					</DropdownMenu.RadioItem>
					<DropdownMenu.RadioItem name="theme" value={$theme("light")}>
						<Icon
							svg={<ThemeIcon theme="light" />}
							className={cx("text-muted", currentTheme === "light" && "text-on-filled")}
						/>
						Light Mode
					</DropdownMenu.RadioItem>
					<DropdownMenu.RadioItem name="theme" value={$theme("dark")}>
						<Icon
							svg={<ThemeIcon theme="dark" />}
							className={cx("text-muted", currentTheme === "dark" && "text-on-filled")}
						/>
						Dark Mode
					</DropdownMenu.RadioItem>
					<DropdownMenu.RadioItem name="theme" value={$theme("light-high-contrast")}>
						<Icon
							svg={<ThemeIcon theme="light-high-contrast" />}
							className={cx(
								"text-muted",
								currentTheme === "light-high-contrast" && "text-on-filled",
							)}
						/>
						Light High Contrast
					</DropdownMenu.RadioItem>
					<DropdownMenu.RadioItem name="theme" value={$theme("dark-high-contrast")}>
						<Icon
							svg={<ThemeIcon theme="dark-high-contrast" />}
							className={cx(
								"text-muted",
								currentTheme === "dark-high-contrast" && "text-on-filled",
							)}
						/>
						Dark High Contrast
					</DropdownMenu.RadioItem>
				</DropdownMenu.RadioGroup>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
}

export {
	//,
	ThemeSwitcher,
};
