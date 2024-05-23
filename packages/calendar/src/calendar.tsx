import { CaretLeft } from "@phosphor-icons/react/dist/icons/CaretLeft";
import { CaretRight } from "@phosphor-icons/react/dist/icons/CaretRight";
import type { ComponentProps } from "react";
import { DayPicker } from "react-day-picker";
import { buttonVariants } from "../../button/src/button";
import { cx } from "../../cx";

type CalendarProps = ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={cx("", className)}
			classNames={{
				months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
				month: "space-y-4",
				caption: "flex justify-center pt-1 relative items-center",
				caption_label: "text-sm font-medium",
				nav: "flex items-center",
				nav_button: cx(
					buttonVariants({ appearance: "outlined", priority: "neutral" }),
					"sm:h-7 sm:w-7 h-7 w-7",
				),
				nav_button_previous: "absolute left-0",
				nav_button_next: "absolute right-0",
				table: "w-full border-collapse space-y-1",
				head_row: "flex",
				head_cell: "text-muted-foreground w-8 font-normal text-[0.8rem] text-center",
				row: "flex w-full mt-2",
				cell: cx(
					"relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
					props.mode === "range"
						? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
						: "[&:has([aria-selected])]:rounded-md",
				),
				day: cx(buttonVariants({ appearance: "ghost" }), "h-8 w-8 p-0 font-normal aria-selected:opacity-100"),
				day_range_start: "day-range-start",
				day_range_end: "day-range-end",
				day_selected: "bg-filled-accent text-on-filled hover:bg-filled-accent hover:text-on-filled",
				day_today: "bg-filled-accent/30 text-on-filled",
				day_outside:
					"day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
				day_disabled: "text-muted-foreground opacity-50",
				day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
				day_hidden: "invisible",
				...classNames,
			}}
			components={{
				IconLeft: () => <CaretLeft className="h-4 w-4 shrink-0" />,
				IconRight: () => <CaretRight className="h-4 w-4 shrink-0" />,
			}}
			{...props}
		/>
	);
}
Calendar.displayName = "Calendar";

export { Calendar };

export type { CalendarProps };