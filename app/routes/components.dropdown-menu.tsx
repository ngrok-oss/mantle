import { Desktop, Gear, Moon, SignOut, Sun } from "@phosphor-icons/react";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";
import { Button } from "packages/button";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "packages/code-block";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "packages/dropdown-menu";

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
						<DropdownMenuItem className="flex items-center gap-2">
							<Gear className="size-5" />
							<span>User Settings</span>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="flex items-center gap-2">
							<SignOut className="size-5" />
							<span>Log out</span>
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
						import {
							Button,
							DropdownMenu,
							DropdownMenuContent,
							DropdownMenuItem,
							DropdownMenuLabel,
							DropdownMenuRadioItem,
							DropdownMenuSeparator,
							DropdownMenuTrigger,
						} from "@ngrok/mantle";

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
