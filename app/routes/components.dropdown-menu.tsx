import { Anchor } from "@/anchor";
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
import { InlineCode } from "@/inline-code";
import type { Theme } from "@/theme-provider";
import { Desktop } from "@phosphor-icons/react/Desktop";
import { Gear } from "@phosphor-icons/react/Gear";
import { Moon } from "@phosphor-icons/react/Moon";
import { SignOut } from "@phosphor-icons/react/SignOut";
import { Sun } from "@phosphor-icons/react/Sun";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";
import {
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropsTable,
	PropTypeCell,
	StringPropType,
} from "~/components/props-table";
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
		<div className="space-y-16">
			<section className="space-y-4">
				<h1 className="text-5xl font-medium">Dropdown Menu</h1>
				<p className="font-body text-xl text-body">
					Displays a menu to the user — such as a set of actions or functions — triggered by a button.
				</p>
				<div>
					<Example className="flex-col gap-6">
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

						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button type="button" appearance="filled">
									Content Width Matches Trigger Width (Extra Wide)
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent width="trigger">
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
								<Button appearance="filled" type="button">Open Menu</Button>
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
			</section>

			<section className="space-y-8">
				<header className="space-y-4">
					<h2 id="api" className="text-3xl font-medium">
						API Reference
					</h2>
					<p className="font-body text-xl text-body">
						The <InlineCode>DropdownMenu</InlineCode> components are built on top of{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/dropdown-menu"
							target="_blank"
							rel="noopener noreferrer"
						>
							Radix Dropdown Menu
						</Anchor>
						.
					</p>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 className="text-xl font-medium">DropdownMenuContent</h3>

						<p className="text-body">
							All props from Radix{" "}
							<Anchor
								href="https://www.radix-ui.com/primitives/docs/components/dropdown-menu#content"
								target="_blank"
								rel="noopener noreferrer"
							>
								DropdownMenu.Content
							</Anchor>
							, plus:
						</p>
					</header>

					<PropsTable>
						<PropRow>
							<PropNameCell name="width" optional />
							<PropTypeCell>
								<ul>
									<li>
										<StringPropType value="trigger" />
									</li>
									<li>
										<StringPropType value="content" />
									</li>
								</ul>
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>
									<InlineCode>trigger</InlineCode> will ensure the dropdown content is the same width as the trigger
									button.
								</p>
								<p>
									<InlineCode>content</InlineCode> will make the dropdown content use the intrinsic content width.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>
			</section>
		</div>
	);
}
