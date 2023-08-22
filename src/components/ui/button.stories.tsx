import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";

const meta: Meta<typeof Button> = {
	title: "Button",
	component: Button,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		variant: "default",
		size: "default",
	},
};

export const Secondary: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		...Default.args,
		variant: "secondary",
	},
};

export const Primary: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		...Default.args,
		variant: "primary",
	},
};
