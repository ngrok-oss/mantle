import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "./textarea";

const meta: Meta<typeof Textarea> = {
	title: "Textarea",
	component: Textarea,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
	render: (args) => <Textarea {...args} />,
	args: {
		placeholder: "Add a short bio about yourself",
	},
};
