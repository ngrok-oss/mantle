import { Desktop } from "@phosphor-icons/react/Desktop";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./dropdown-menu";

const meta: Meta<typeof DropdownMenu> = {
	title: "DropdownMenu",
	component: DropdownMenu,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
	render: () => (
		<div className="min-h-screen">
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
						Light Mode
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem name="theme" value="dark">
						Dark Mode
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem name="theme" value="light-high-contrast">
						Light High Contrast
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem name="theme" value="dark-high-contrast">
						Dark High Contrast
					</DropdownMenuRadioItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>User Settings</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Log out</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	),
};
