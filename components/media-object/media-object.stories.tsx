import type { Meta, StoryObj } from "@storybook/react";

import { MediaObject, MediaObjectMedia, MediaObjectContent } from ".";

const meta = {
	title: "MediaObject",
	component: MediaObject,
	tags: ["autodocs"],
} satisfies Meta<typeof MediaObject>;

export default meta;

type Story = StoryObj<typeof meta>;

const ExampleMedia = () => (
	<svg
		className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
		preserveAspectRatio="none"
		stroke="currentColor"
		fill="none"
		viewBox="0 0 200 200"
		aria-hidden="true"
	>
		<path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
	</svg>
);

export const Basic: Story = {
	render: () => (
		<div className="max-w-96 mx-auto">
			<MediaObject>
				<MediaObjectMedia>
					<ExampleMedia />
				</MediaObjectMedia>
				<MediaObjectContent>
					<h4 className="text-lg font-bold">Lorem ipsum</h4>
					<p className="mb-4 mt-1">
						Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
						quidem ipsam quia iusto.
					</p>
					<p>Ea eiusmod eiusmod aute reprehenderit exercitation eu ea id adipisicing occaecat.</p>
				</MediaObjectContent>
			</MediaObject>
		</div>
	),
};

export const StyledWithGap: Story = {
	render: () => (
		<div className="max-w-96 mx-auto">
			<MediaObject className="gap-10 bg-slate-300 p-6">
				<MediaObjectMedia>
					<ExampleMedia />
				</MediaObjectMedia>
				<MediaObjectContent>
					<h4 className="text-lg font-bold">Lorem ipsum</h4>
					<p className="mb-4 mt-1">
						Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
						quidem ipsam quia iusto.
					</p>
					<p>Ea eiusmod eiusmod aute reprehenderit exercitation eu ea id adipisicing occaecat.</p>
				</MediaObjectContent>
			</MediaObject>
		</div>
	),
};

export const MediaCenterAligned: Story = {
	render: () => (
		<div className="max-w-96 mx-auto">
			<MediaObject>
				<MediaObjectMedia className="self-center">
					<ExampleMedia />
				</MediaObjectMedia>
				<MediaObjectContent>
					<h4 className="text-lg font-bold">Lorem ipsum</h4>
					<p className="mb-4 mt-1">
						Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
						quidem ipsam quia iusto.
					</p>
					<p>Ea eiusmod eiusmod aute reprehenderit exercitation eu ea id adipisicing occaecat.</p>
				</MediaObjectContent>
			</MediaObject>
		</div>
	),
};

export const MediaBottomAligned: Story = {
	render: () => (
		<div className="max-w-96 mx-auto">
			<MediaObject>
				<MediaObjectMedia className="self-end">
					<ExampleMedia />
				</MediaObjectMedia>
				<MediaObjectContent>
					<h4 className="text-lg font-bold">Lorem ipsum</h4>
					<p className="mb-4 mt-1">
						Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
						quidem ipsam quia iusto.
					</p>
					<p>Ea eiusmod eiusmod aute reprehenderit exercitation eu ea id adipisicing occaecat.</p>
				</MediaObjectContent>
			</MediaObject>
		</div>
	),
};

export const MediaOnRightByFlexRowReverse: Story = {
	render: () => (
		<div className="max-w-96 mx-auto">
			<MediaObject className="flex-row-reverse">
				<MediaObjectMedia>
					<ExampleMedia />
				</MediaObjectMedia>
				<MediaObjectContent>
					<h4 className="text-lg font-bold">Lorem ipsum</h4>
					<p className="mb-4 mt-1">
						Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
						quidem ipsam quia iusto.
					</p>
					<p>Culpa elit sit tempor Lorem aliquip officia do enim et ipsum non occaecat culpa.</p>
				</MediaObjectContent>
			</MediaObject>
		</div>
	),
};

export const MediaOnRightByOrder: Story = {
	render: () => (
		<div className="max-w-96 mx-auto">
			<MediaObject>
				<MediaObjectContent>
					<h4 className="text-lg font-bold">Lorem ipsum</h4>
					<p className="mb-4 mt-1">
						Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
						quidem ipsam quia iusto.
					</p>
					<p>Ea eiusmod eiusmod aute reprehenderit exercitation eu ea id adipisicing occaecat.</p>
				</MediaObjectContent>
				<MediaObjectMedia>
					<ExampleMedia />
				</MediaObjectMedia>
			</MediaObject>
		</div>
	),
};
