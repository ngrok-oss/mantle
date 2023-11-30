import type { Meta, StoryObj } from "@storybook/react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from ".";

const meta: Meta<typeof Drawer> = {
	title: "Drawer",
	component: Drawer,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
	render: () => (
		<div className="max-w-sm mx-auto">
			<Drawer>
				<DrawerTrigger>Open Drawer</DrawerTrigger>
				<DrawerContent className="max-w-lg sm:max-w-lg">
					<DrawerHeader>
						<DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
						<DrawerDescription>
							This action cannot be undone. This will permanently delete your account and remove your data from our
							servers.
						</DrawerDescription>
					</DrawerHeader>
				</DrawerContent>
			</Drawer>
		</div>
	),
};
