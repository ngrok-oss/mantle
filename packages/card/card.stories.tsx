import type { Meta, StoryObj } from "@storybook/react";

import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "./";

const meta = {
	title: "Card",
	component: Card,
	tags: ["autodocs"],
	/**
	 * autodocs doesn't play nicely with props defined like the card's
	 * (type Props = HTMLAttributes<HTMLDivElement>)
	 *
	 * So, we've annotated the most popular props here and left the rest to be
	 * discovered at the mdn docs for the div element's attributes.
	 */
	argTypes: {
		children: {
			description: "The content of the card",
			defaultValue: undefined,
		},
		className: {
			description: "A space-separated list of the case-sensitive classes of the card",
			defaultValue: "",
		},
		style: {
			description: "The inline style of the card",
			defaultValue: undefined,
		},
		id: {
			description: "An identifier (ID) which must be unique in the whole document.",
			defaultValue: undefined,
		},
	},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FullyLoaded: Story = {
	render: () => (
		<div className="max-w-96 mx-auto">
			<Card>
				<CardHeader>
					<CardTitle>Card Title Here</CardTitle>
				</CardHeader>
				<CardBody>
					<p className="mb-0">Laborum in aute officia adipisicing elit velit.</p>
				</CardBody>
				<CardFooter>
					<p className="mb-0">Card footer</p>
				</CardFooter>
			</Card>
		</div>
	),
};

export const Simple: Story = {
	render: () => (
		<div className="max-w-96 mx-auto">
			<Card>
				<p className="mb-0">Duis irure nisi sint eiusmod irure sunt pariatur veniam Lorem nostrud cillum.</p>
			</Card>
		</div>
	),
};

export const SimpleStyled: Story = {
	render: () => (
		<div className="max-w-96 mx-auto">
			<Card className="bg-brand-secondary-400 border-4 border-red-700 p-4 text-white">
				<p className="mb-0">Ex fugiat commodo ullamco eiusmod qui reprehenderit ex amet.</p>
			</Card>
		</div>
	),
};

export const WithBody: Story = {
	render: () => (
		<div className="max-w-96 mx-auto">
			<Card>
				<CardBody>
					<p className="mb-0">
						Reprehenderit id pariatur aliquip officia veniam mollit fugiat labore nostrud irure aliqua.
					</p>
				</CardBody>
			</Card>
		</div>
	),
};

export const WithHeaderAndBody: Story = {
	render: () => (
		<div className="max-w-96 mx-auto">
			<Card>
				<CardHeader>
					<CardTitle>Card Title Here</CardTitle>
				</CardHeader>
				<CardBody>
					<p className="mb-0">Dolor proident proident officia in ad veniam officia do culpa commodo velit.</p>
				</CardBody>
			</Card>
		</div>
	),
};

export const WithFooterAndBody: Story = {
	render: () => (
		<div className="max-w-96 mx-auto">
			<Card>
				<CardBody>
					<p className="mb-0">
						Veniam ad qui mollit quis est cillum incididunt fugiat laboris veniam eiusmod cillum laboris laboris.
					</p>
				</CardBody>
				<CardFooter>
					<p className="mb-0">Card footer</p>
				</CardFooter>
			</Card>
		</div>
	),
};
