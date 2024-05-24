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
				nav_button: cx(buttonVariants({ appearance: "ghost", priority: "neutral" }), "sm:h-7 sm:w-7 h-7 w-7"),
				nav_button_previous: "absolute left-0",
				nav_button_next: "absolute right-0",
				table: "w-full border-collapse space-y-1",
				head_row: "flex",
				head_cell: "text-muted-foreground w-7 text-[0.8rem] text-center font-normal",
				row: "flex w-full mt-1",
				cell: cx(
					"overflow-hidden text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
					props.mode === "range"
						? "first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
						: "",
				),
				day: "day sm:h-7 sm:w-7 h-7 w-7 rounded-md hover:bg-filled-accent/15",
				day_range_start: "day-range-start [&:not(.day-range-end)]:rounded-r-none",
				day_range_end: "day-range-end [&:not(.day-range-start)]:rounded-l-none",
				day_selected: "bg-filled-accent text-on-filled hover:bg-filled-accent",
				day_today: "[&:not([aria-selected])]:text-accent-600 font-medium [&:not([aria-selected])]:bg-filled-accent/10",
				day_outside: "day-outside aria-selected:text-on-filled opacity-30",
				day_disabled: "text-muted-foreground opacity-50",
				day_range_middle:
					"day-range-middle aria-selected:bg-filled-accent/15 aria-selected:text-strong rounded-none aria-selected:hover:bg-filled-accent/25",
				day_hidden: "invisible",
				...classNames,
			}}
			components={{
				IconLeft: () => <CaretLeft className="h-4 w-4 shrink-0" weight="bold" />,
				IconRight: () => <CaretRight className="h-4 w-4 shrink-0" weight="bold" />,
			}}
			{...props}
		/>
	);
}
Calendar.displayName = "Calendar";

export { Calendar };

export type { CalendarProps };
