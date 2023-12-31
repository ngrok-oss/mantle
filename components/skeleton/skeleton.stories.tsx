import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from ".";
import { MediaObject, MediaObjectContent, MediaObjectMedia } from "../media-object";

const meta: Meta<typeof Skeleton> = {
	title: "Skeleton",
	component: Skeleton,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
	render: () => (
		<div className="max-w-sm mx-auto">
			<Skeleton className="h-4 w-full" />
		</div>
	),
};

export const SkeletonMediaObject: Story = {
	render: () => (
		<div className="max-w-sm mx-auto">
			<MediaObject>
				<MediaObjectMedia>
					<Skeleton className="h-12 w-12 rounded-full" />
				</MediaObjectMedia>
				<MediaObjectContent className="space-y-3">
					<Skeleton className="h-4 w-[250px]" />
					<Skeleton className="h-4 w-[200px]" />
				</MediaObjectContent>
			</MediaObject>
		</div>
	),
};
