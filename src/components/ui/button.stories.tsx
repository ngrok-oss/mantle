import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";

const meta: Meta<typeof Button> = {
	title: "Button",
	component: Button,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		variant: "primary",
		size: "default",
	},
};

export const Secondary: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		...Primary.args,
		variant: "secondary",
	},
};

export const Danger: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		...Primary.args,
		variant: "danger",
	},
};
