import { Anchor } from "@ngrok/mantle/anchor";
import { IconButton } from "@ngrok/mantle/button";
import { Calendar, type DateRange } from "@ngrok/mantle/calendar";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Popover } from "@ngrok/mantle/popover";
import { CalendarIcon } from "@phosphor-icons/react/Calendar";
import { useState } from "react";
import { Example } from "~/components/example";
import { HashLinkHeading } from "~/components/hash-link-heading";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/components.preview.calendar";

// import {
// 	BooleanPropType,
// 	PropDefaultValueCell,
// 	PropDescriptionCell,
// 	PropNameCell,
// 	PropRow,
// 	PropsTable,
// 	PropTypeCell,
// 	ReactNodePropType,
// 	StringPropType,
// } from "~/components/props-table";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Calendar" },
		{
			name: "description",
			content: "mantle is ngrok's UI library and design system",
		},
	];
};

export const headers: Route.HeadersFunction = () => {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
};

const PopoverCalendarExample = () => {
	const [date, setDate] = useState<Date | undefined>(undefined);

	return (
		<Popover.Root>
			<Popover.Trigger asChild>
				<IconButton
					type="button"
					icon={<CalendarIcon />}
					label="Open calendar popover"
				/>
			</Popover.Trigger>
			<Popover.Content>
				<Calendar
					autoFocus
					mode="single"
					onSelect={(value) => setDate(value)}
					selected={date}
				/>
			</Popover.Content>
		</Popover.Root>
	);
};

const SingleCalendarExample = () => {
	const [date, setDate] = useState<Date | undefined>(undefined);

	return (
		<Calendar
			mode="single"
			selected={date}
			onSelect={setDate}
			className="border-card rounded-md border p-2 shadow-md"
		/>
	);
};

const RangeCalendarExample = () => {
	const [date, setDate] = useState<DateRange | undefined>({
		from: undefined,
		to: undefined,
	});

	return (
		<Calendar
			mode="range"
			defaultMonth={date?.from}
			selected={date}
			onSelect={setDate}
			className="border-card rounded-md border p-2 shadow-md"
		/>
	);
};

const RangeMultipleCalendarExample = () => {
	const [date, setDate] = useState<DateRange | undefined>({
		from: undefined,
		to: undefined,
	});

	return (
		<Calendar
			mode="range"
			defaultMonth={date?.from}
			selected={date}
			onSelect={setDate}
			numberOfMonths={2}
			className="border-card rounded-md border p-2 shadow-md"
		/>
	);
};

const HiddenDaysCalendarExample = () => {
	const [date, setDate] = useState<DateRange | undefined>({
		from: undefined,
		to: undefined,
	});
	const hiddenDays = [
		new Date(2024, 4, 6),
		new Date(2024, 4, 20),
		new Date(2024, 4, 11),
	];

	return (
		<Calendar
			mode="range"
			defaultMonth={hiddenDays[0]}
			selected={date}
			onSelect={setDate}
			hidden={hiddenDays}
			className="border-card rounded-md border p-2 shadow-md"
		/>
	);
};

const DisabledDaysCalendarExample = () => {
	const [date, setDate] = useState<DateRange | undefined>({
		from: undefined,
		to: undefined,
	});
	const disabledDays = [
		new Date(2024, 4, 3),
		new Date(2024, 4, 13),
		new Date(2024, 4, 14),
	];

	return (
		<Calendar
			mode="range"
			defaultMonth={disabledDays[0]}
			selected={date}
			onSelect={setDate}
			disabled={disabledDays}
			className="border-card rounded-md border p-2 shadow-md"
		/>
	);
};

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="calendar" isPreview>
					Calendar
				</PageHeader>
				<p className="font-body text-body text-xl">
					A date field component that allows users to enter and edit date.
				</p>
				<div>
					<Example className="flex flex-col gap-6">
						<div className="space-y-2">
							<p>Single</p>
							<SingleCalendarExample />
						</div>
						<div className="flex flex-col gap-2 items-center">
							<p>Popover</p>
							<PopoverCalendarExample />
						</div>
						<div className="space-y-2">
							<p>Range</p>
							<RangeCalendarExample />
						</div>

						<div className="space-y-2">
							<p>Range Multiple Months</p>
							<RangeMultipleCalendarExample />
						</div>

						<div className="space-y-2">
							<p>Hidden Days</p>
							<HiddenDaysCalendarExample />
						</div>

						<div className="space-y-2">
							<p>Disabled Days</p>
							<DisabledDaysCalendarExample />
						</div>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Calendar } from "@ngrok/mantle/calendar";

									<Calendar
										mode="single"
										selected={date}
										onSelect={setDate}
									/>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="api" className="text-3xl font-medium">
					<h2>API Reference</h2>
				</HashLinkHeading>
				<p className="font-body text-body text-xl">
					The <Code>Calendar</Code> is built on top of{" "}
					<Anchor href="https://react-day-picker.js.org/">
						React DayPicker
					</Anchor>
					.
				</p>
				{/* <PropsTable>
					<PropRow>
						<PropNameCell name="appearance" optional />
						<PropTypeCell>
							<ul>
								<li>
									<StringPropType value="ghost" />
								</li>
								<li>
									<StringPropType value="filled" />
								</li>
								<li>
									<StringPropType value="outlined" />
								</li>
								<li>
									<StringPropType value="link" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell>
							<StringPropType value="outlined" />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								Defines the visual style of the <Code>Button</Code>.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="asChild" optional />
						<PropTypeCell>
							<BooleanPropType />
						</PropTypeCell>
						<PropDefaultValueCell>
							<BooleanPropType value={false} />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								Use the <Code>asChild</Code> prop to compose the <Code>Button</Code> styling and
								functionality onto alternative element types or your own React components.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="icon" optional />
						<PropTypeCell>
							<ReactNodePropType />
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							An icon to render inside the button. If the <Code>state</Code> is{" "}
							<Code>pending</Code>, then the icon will automatically be replaced with a spinner.
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="iconPlacement" optional />
						<PropTypeCell>
							<ul>
								<li>
									<StringPropType value="start" />
								</li>
								<li>
									<StringPropType value="end" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell>
							<StringPropType value="start" />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								The side that the icon will render on, if one is present. If <Code>state="pending"</Code>,
								then the loading icon will also render on this side.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="isLoading" optional />
						<PropTypeCell>
							<BooleanPropType />
						</PropTypeCell>
						<PropDefaultValueCell>
							<BooleanPropType value={false} />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								Determines whether or not the button is in a loading state, default <Code>false</Code>.
								Setting <Code>isLoading</Code> will replace any <Code>icon</Code> with a
								spinner, or add one if an icon wasn't given. It will also disable user interaction with the button and
								set <Code>aria-disabled</Code>.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="priority" optional />
						<PropTypeCell>
							<ul>
								<li>
									<StringPropType value="default" />
								</li>
								<li>
									<StringPropType value="danger" />
								</li>
								<li>
									<StringPropType value="neutral" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell>
							<StringPropType value="default" />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								Indicates the importance or impact level of the button, affecting its color and styling to communicate
								its purpose to the user.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="type" />
						<PropTypeCell>
							<ul>
								<li>
									<StringPropType value="button" />
								</li>
								<li>
									<StringPropType value="reset" />
								</li>
								<li>
									<StringPropType value="submit" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							<p>
								The default behavior of the <Code>Button</Code>. Unlike the native{" "}
								<Code>button</Code> element, unless you use the <Code>asChild</Code> prop,{" "}
								<span className="font-semibold">this prop is required and has no default value</span>. See{" "}
								<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type">
									the MDN docs
								</Anchor>{" "}
								for more information.
							</p>
							<ul className="list-disc pl-5">
								<li>
									<p>
										<Code>"button"</Code>: The button has no default behavior, and does nothing when pressed
										by default.
									</p>
								</li>
								<li>
									<p>
										<Code>"reset"</Code>: The button resets all the controls to their initial values.
									</p>
								</li>
								<li>
									<p>
										<Code>"submit"</Code>: The button submits the form data to the server.
									</p>
								</li>
							</ul>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable> */}
			</section>
		</div>
	);
}
