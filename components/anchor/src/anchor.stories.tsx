import type { Meta, StoryObj } from "@storybook/react";
import { Anchor } from "./anchor";

const meta: Meta<typeof Anchor> = {
	title: "Anchor",
	component: Anchor,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
	render: () => (
		<div className="mx-auto max-w-sm">
			<p>
				This link will go to <Anchor href="https://ngrok.com">ngrok.com</Anchor>.
			</p>
		</div>
	),
};
