import type { Meta, StoryObj } from "@storybook/react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from ".";

const meta: Meta<typeof Sheet> = {
	title: "Sheet",
	component: Sheet,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
	render: () => (
		<div className="mx-auto max-w-sm">
			<Sheet>
				<SheetTrigger>Open Sheet</SheetTrigger>
				<SheetContent className="max-w-lg sm:max-w-lg">
					<SheetHeader>
						<SheetTitle>Are you sure absolutely sure?</SheetTitle>
						<SheetDescription>
							This action cannot be undone. This will permanently delete your account and remove your data from our
							servers.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</div>
	),
};
