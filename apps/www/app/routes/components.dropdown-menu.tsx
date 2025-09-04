import { Anchor } from "@ngrok/mantle/anchor";
import { Button } from "@ngrok/mantle/button";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { DropdownMenu } from "@ngrok/mantle/dropdown-menu";
import { Icon } from "@ngrok/mantle/icon";
import type { Theme } from "@ngrok/mantle/theme-provider";
import { Tooltip } from "@ngrok/mantle/tooltip";
import { DesktopIcon } from "@phosphor-icons/react/Desktop";
import { GearIcon } from "@phosphor-icons/react/Gear";
import { MoonIcon } from "@phosphor-icons/react/Moon";
import { SignOutIcon } from "@phosphor-icons/react/SignOut";
import { SunIcon } from "@phosphor-icons/react/Sun";
import { useState } from "react";
import { Example } from "~/components/example";
import { HashLinkHeading } from "~/components/hash-link-heading";
import { PageHeader } from "~/components/page-header";
import {
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
	StringPropType,
} from "~/components/props-table";
import type { Route } from "./+types/components.dropdown-menu";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — DropdownMenu" },
		{
			name: "description",
			content: "mantle is ngrok's UI library and design system",
		},
	];
};

export const headers: Route.HeadersFunction = () => {
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
				<PageHeader id="dropdown-menu">Dropdown Menu</PageHeader>
				<p className="font-body text-body text-xl">
					Displays a menu to the user — such as a set of actions or functions —
					triggered by a button.
				</p>
				<div>
					<Example className="flex-col gap-6">
						<DropdownMenu.Root>
							<DropdownMenu.Trigger asChild>
								<Button type="button" appearance="filled">
									Open Menu
								</Button>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content>
								<DropdownMenu.Label>corby.pickles@ngork.com</DropdownMenu.Label>
								<DropdownMenu.Separator />
								<DropdownMenu.RadioGroup
									value={selectedTheme}
									onValueChange={(value) => {
										setSelectedTheme(value as Theme);
									}}
								>
									<DropdownMenu.RadioItem value="system">
										<Icon svg={<DesktopIcon />} />
										System Preference
									</DropdownMenu.RadioItem>
									<DropdownMenu.RadioItem value="light">
										<Icon svg={<SunIcon />} />
										Light Mode
									</DropdownMenu.RadioItem>
									<DropdownMenu.RadioItem value="dark">
										<Icon svg={<MoonIcon />} />
										Dark Mode
									</DropdownMenu.RadioItem>
									<DropdownMenu.RadioItem value="light-high-contrast">
										<Icon svg={<SunIcon weight="fill" />} />
										Light High Contrast
									</DropdownMenu.RadioItem>
									<DropdownMenu.RadioItem value="dark-high-contrast">
										<Icon svg={<MoonIcon weight="fill" />} />
										Dark High Contrast
									</DropdownMenu.RadioItem>
								</DropdownMenu.RadioGroup>
								<DropdownMenu.Separator />
								<Tooltip.Root>
									<Tooltip.Trigger asChild>
										<DropdownMenu.Item
											className="flex items-center gap-2"
											disabled
										>
											<Icon svg={<GearIcon />} />
											User Settings
										</DropdownMenu.Item>
									</Tooltip.Trigger>
									<Tooltip.Content side="left">
										Only winners get user settings.
									</Tooltip.Content>
								</Tooltip.Root>
								<DropdownMenu.Separator />
								<DropdownMenu.CheckboxItem
									checked={enableNotifications}
									onCheckedChange={(value) => {
										setEnableNotifications(value);
									}}
								>
									Enable Notifications
								</DropdownMenu.CheckboxItem>
								<DropdownMenu.Group>
									<DropdownMenu.Item>Team</DropdownMenu.Item>
									<DropdownMenu.Sub>
										<DropdownMenu.SubTrigger>
											Invite users
										</DropdownMenu.SubTrigger>
										<DropdownMenu.SubContent>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Message</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Separator />
											<DropdownMenu.Item>More...</DropdownMenu.Item>
										</DropdownMenu.SubContent>
									</DropdownMenu.Sub>
									<DropdownMenu.Item>
										New Team
										<DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
									</DropdownMenu.Item>
								</DropdownMenu.Group>
								<DropdownMenu.Separator />
								<DropdownMenu.Item className="flex items-center gap-2">
									<Icon svg={<SignOutIcon />} />
									Log out
								</DropdownMenu.Item>
							</DropdownMenu.Content>
						</DropdownMenu.Root>

						<DropdownMenu.Root>
							<DropdownMenu.Trigger asChild>
								<Button
									type="button"
									appearance="filled"
									className="whitespace-break-spaces"
								>
									Content Width Matches Trigger Width (Extra Wide)
								</Button>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content width="trigger">
								<DropdownMenu.Label>corby.pickles@ngork.com</DropdownMenu.Label>
								<DropdownMenu.Separator />
								<DropdownMenu.RadioGroup
									value={selectedTheme}
									onValueChange={(value) => {
										setSelectedTheme(value as Theme);
									}}
								>
									<DropdownMenu.RadioItem value="system">
										<Icon svg={<DesktopIcon />} />
										System Preference
									</DropdownMenu.RadioItem>
									<DropdownMenu.RadioItem value="light">
										<Icon svg={<SunIcon />} />
										Light Mode
									</DropdownMenu.RadioItem>
									<DropdownMenu.RadioItem value="dark">
										<Icon svg={<MoonIcon />} />
										Dark Mode
									</DropdownMenu.RadioItem>
									<DropdownMenu.RadioItem value="light-high-contrast">
										<Icon svg={<SunIcon weight="fill" />} />
										Light High Contrast
									</DropdownMenu.RadioItem>
									<DropdownMenu.RadioItem value="dark-high-contrast">
										<Icon svg={<MoonIcon weight="fill" />} />
										Dark High Contrast
									</DropdownMenu.RadioItem>
								</DropdownMenu.RadioGroup>
								<DropdownMenu.Separator />
								<DropdownMenu.Item className="flex items-center gap-2">
									<Icon svg={<GearIcon />} />
									User Settings
								</DropdownMenu.Item>
								<DropdownMenu.Separator />
								<DropdownMenu.CheckboxItem
									checked={enableNotifications}
									onCheckedChange={(value) => {
										setEnableNotifications(value);
									}}
								>
									Enable Notifications
								</DropdownMenu.CheckboxItem>
								<DropdownMenu.Group>
									<DropdownMenu.Item>Team</DropdownMenu.Item>
									<DropdownMenu.Sub>
										<DropdownMenu.SubTrigger>
											Invite users
										</DropdownMenu.SubTrigger>
										<DropdownMenu.SubContent>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Message</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Item>Email</DropdownMenu.Item>
											<DropdownMenu.Separator />
											<DropdownMenu.Item>More...</DropdownMenu.Item>
										</DropdownMenu.SubContent>
									</DropdownMenu.Sub>
									<DropdownMenu.Item>
										New Team
										<DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
									</DropdownMenu.Item>
								</DropdownMenu.Group>
								<DropdownMenu.Separator />
								<DropdownMenu.Item className="flex items-center gap-2">
									<Icon svg={<SignOutIcon />} />
									Log out
								</DropdownMenu.Item>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
						import { Button } from "@ngrok/mantle/button";
						import { DropdownMenu } from "@ngrok/mantle/dropdown-menu";
						import { Icon } from "@ngrok/mantle/icon";

						<DropdownMenu.Root>
							<DropdownMenu.Trigger asChild>
								<Button appearance="filled" type="button">Open Menu</Button>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content>
								<DropdownMenu.Label>corby.pickles@ngork.com</DropdownMenu.Label>
								<DropdownMenu.Separator />
								<DropdownMenu.RadioItem name="theme" value="system">
									<Icon svg={<DesktopIcon />} />
									System Preference
								</DropdownMenu.RadioItem>
								<DropdownMenu.RadioItem name="theme" value="light">
									<Icon svg={<SunIcon />} />
									Light Mode
								</DropdownMenu.RadioItem>
								<DropdownMenu.RadioItem name="theme" value="dark">
									<Icon svg={<MoonIcon />} />
									Dark Mode
								</DropdownMenu.RadioItem>
								<DropdownMenu.RadioItem name="theme" value="light-high-contrast">
									<Icon svg={<SunIcon weight="fill" />} />
									Light High Contrast
								</DropdownMenu.RadioItem>
								<DropdownMenu.RadioItem name="theme" value="dark-high-contrast">
									<Icon svg={<MoonIcon weight="fill" />} />
									Dark High Contrast
								</DropdownMenu.RadioItem>
								<DropdownMenu.Separator />
								<DropdownMenu.Item>
									<Icon svg={<GearIcon />} />
									User Settings
								</DropdownMenu.Item>
								<DropdownMenu.Separator />
								<DropdownMenu.Item>
									<Icon svg={<SignOutIcon />} />
									Log out
								</DropdownMenu.Item>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
					`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-8">
				<header className="space-y-4">
					<HashLinkHeading id="api" className="text-3xl font-medium">
						<h2>API Reference</h2>
					</HashLinkHeading>
					<p className="font-body text-body text-xl">
						The <Code>DropdownMenu</Code> components are built on top of{" "}
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
						<HashLinkHeading
							id="api-dropdown-menu-content"
							className="text-xl font-medium text-strong"
						>
							<h3>DropdownMenuContent</h3>
						</HashLinkHeading>

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
									<Code>trigger</Code> will ensure the dropdown content is the
									same width as the trigger button.
								</p>
								<p>
									<Code>content</Code> will make the dropdown content use the
									intrinsic content width.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>
			</section>
		</div>
	);
}
