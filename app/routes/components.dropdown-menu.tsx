import { Button } from "@/button";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@/code-block";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/dropdown-menu";
import { Desktop } from "@phosphor-icons/react/Desktop";
import { Gear } from "@phosphor-icons/react/Gear";
import { Moon } from "@phosphor-icons/react/Moon";
import { SignOut } from "@phosphor-icons/react/SignOut";
import { Sun } from "@phosphor-icons/react/Sun";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";

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
	return (
		<div>
			<h1 className="text-5xl font-medium">Dropdown Menu</h1>
			<p className="mt-4 text-xl text-body">
				Displays a menu to the user — such as a set of actions or functions — triggered by a button.
			</p>

			<Example className="mt-4">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button appearance="filled">Open Menu</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>micah@ngrok.com</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuRadioItem name="theme" value="system">
							<Desktop className="size-5" />
							System Preference
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem name="theme" value="light">
							<Sun className="size-5" />
							Light Mode
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem name="theme" value="dark">
							<Moon className="size-5" />
							Dark Mode
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem name="theme" value="light-high-contrast">
							<Sun className="size-5" weight="fill" />
							Light High Contrast
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem name="theme" value="dark-high-contrast">
							<Moon className="size-5" weight="fill" />
							Dark High Contrast
						</DropdownMenuRadioItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="flex items-center gap-2">
							<Gear className="size-5" />
							User Settings
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuCheckboxItem name="notifications">
							Enable Notifications
						</DropdownMenuCheckboxItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="flex items-center gap-2">
							<SignOut className="size-5" />
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
									<Desktop className="size-5" />
									<span>System Preference</span>
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem name="theme" value="light">
									<Sun className="size-5" />
									<span>Light Mode</span>
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem name="theme" value="dark">
									<Moon className="size-5" />
									<span>Dark Mode</span>
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem name="theme" value="light-high-contrast">
									<Sun className="size-5" weight="fill" />
									<span>Light High Contrast</span>
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem name="theme" value="dark-high-contrast">
									<Moon className="size-5" weight="fill" />
									<span>Dark High Contrast</span>
								</DropdownMenuRadioItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<Gear className="size-5" />
									<span>User Settings</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<SignOut className="size-5" />
									<span>Log out</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					`}
					/>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	);
}
