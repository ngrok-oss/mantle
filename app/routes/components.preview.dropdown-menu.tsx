import { Button } from "@/button";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@/code-block";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/dropdown-menu";
import type { Theme } from "@/theme-provider";
import { Desktop } from "@phosphor-icons/react/Desktop";
import { Gear } from "@phosphor-icons/react/Gear";
import { Moon } from "@phosphor-icons/react/Moon";
import { SignOut } from "@phosphor-icons/react/SignOut";
import { Sun } from "@phosphor-icons/react/Sun";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";
import { PreviewBadge } from "~/components/preview-badge";
import { useState } from "react";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — DropdownMenu" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
};

export default function Page() {
	const [selectedTheme, setSelectedTheme] = useState<Theme>("system");
	const [enableNotifications, setEnableNotifications] = useState(false);

	return (
		<div className="space-y-4">
			<div className="flex items-center gap-3">
				<h1 className="text-5xl font-medium">Dropdown Menu</h1>
				<PreviewBadge />
			</div>
			<p className="text-xl text-body">
				Displays a menu to the user — such as a set of actions or functions — triggered by a button.
			</p>

			<div>
				<Example>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button type="button" appearance="filled">
								Open Menu
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>micah@ngrok.com</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuRadioGroup
								value={selectedTheme}
								onValueChange={(value) => {
									setSelectedTheme(value as Theme);
								}}
							>
								<DropdownMenuRadioItem value="system">
									<Desktop />
									System Preference
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="light">
									<Sun />
									Light Mode
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="dark">
									<Moon />
									Dark Mode
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="light-high-contrast">
									<Sun weight="fill" />
									Light High Contrast
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="dark-high-contrast">
									<Moon weight="fill" />
									Dark High Contrast
								</DropdownMenuRadioItem>
							</DropdownMenuRadioGroup>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="flex items-center gap-2">
								<Gear />
								User Settings
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuCheckboxItem
								checked={enableNotifications}
								onCheckedChange={(value) => {
									setEnableNotifications(value);
								}}
							>
								Enable Notifications
							</DropdownMenuCheckboxItem>
							<DropdownMenuGroup>
								<DropdownMenuItem>Team</DropdownMenuItem>
								<DropdownMenuSub>
									<DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
									<DropdownMenuSubContent>
										<DropdownMenuItem>Email</DropdownMenuItem>
										<DropdownMenuItem>Message</DropdownMenuItem>
										<DropdownMenuItem>Email</DropdownMenuItem>
										<DropdownMenuItem>Email</DropdownMenuItem>
										<DropdownMenuItem>Email</DropdownMenuItem>
										<DropdownMenuItem>Email</DropdownMenuItem>
										<DropdownMenuItem>Email</DropdownMenuItem>
										<DropdownMenuItem>Email</DropdownMenuItem>
										<DropdownMenuItem>Email</DropdownMenuItem>
										<DropdownMenuItem>Email</DropdownMenuItem>
										<DropdownMenuItem>Email</DropdownMenuItem>
										<DropdownMenuItem>Email</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem>More...</DropdownMenuItem>
									</DropdownMenuSubContent>
								</DropdownMenuSub>
								<DropdownMenuItem>
									New Team
									<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="flex items-center gap-2">
								<SignOut />
								Log out
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</Example>
				<CodeBlock className="rounded-b-lg rounded-t-none">
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode
							language="tsx"
							value={fmtCode`
						import { Button } from "@ngrok/mantle/button";
						import {
							DropdownMenu,
							DropdownMenuContent,
							DropdownMenuItem,
							DropdownMenuLabel,
							DropdownMenuRadioItem,
							DropdownMenuSeparator,
							DropdownMenuTrigger,
						} from "@ngrok/mantle/dropdown-menu";

						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button appearance="filled">Open Menu</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuLabel>micah@ngrok.com</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuRadioItem name="theme" value="system">
									<Desktop />
									System Preference
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem name="theme" value="light">
									<Sun />
									Light Mode
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem name="theme" value="dark">
									<Moon />
									Dark Mode
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem name="theme" value="light-high-contrast">
									<Sun weight="fill" />
									Light High Contrast
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem name="theme" value="dark-high-contrast">
									<Moon weight="fill" />
									Dark High Contrast
								</DropdownMenuRadioItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<Gear />
									User Settings
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<SignOut />
									Log out
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					`}
						/>
					</CodeBlockBody>
				</CodeBlock>
			</div>
		</div>
	);
}
