import { Button } from "@ngrok/mantle/button";
import { Command } from "@ngrok/mantle/command";
import {
	CalculatorIcon,
	CalendarIcon,
	CreditCardIcon,
	GearIcon,
	SmileyIcon,
	UserIcon,
} from "@phosphor-icons/react";
import { useEffect } from "react";
import { useState } from "react";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";

function useHotkey(key: string, callback: () => void) {
	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === key && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				callback();
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	});
}

function CommandDialogExample() {
	const [open, setOpen] = useState(false);
	useHotkey("k", () => setOpen(!open));

	return (
		<>
			<p className="text-muted-foreground text-sm gap-2 flex items-center">
				Press{" "}
				<kbd className="bg-muted text-muted pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
					<span className="text-xs">⌘</span>K
				</kbd>
				or
				<Button type="button" onClick={() => setOpen(!open)}>
					Open Command Palette
				</Button>
			</p>
			<Command.Dialog open={open} onOpenChange={setOpen}>
				<Command.Input placeholder="Type a command or search..." />
				<Command.List>
					<Command.Empty>No results found.</Command.Empty>
					<Command.Group heading="Suggestions">
						<Command.Item>
							<CalendarIcon />
							<span>Calendar</span>
						</Command.Item>
						<Command.Item>
							<SmileyIcon />
							<span>Search Emoji</span>
						</Command.Item>
						<Command.Item>
							<CalculatorIcon />
							<span>Calculator</span>
						</Command.Item>
					</Command.Group>
					<Command.Separator />
					<Command.Group heading="Settings">
						<Command.Item>
							<UserIcon />
							<span>Profile</span>
							<Command.Shortcut>⌘P</Command.Shortcut>
						</Command.Item>
						<Command.Item>
							<CreditCardIcon />
							<span>Billing</span>
							<Command.Shortcut>⌘B</Command.Shortcut>
						</Command.Item>
						<Command.Item>
							<GearIcon />
							<span>Settings</span>
							<Command.Shortcut>⌘S</Command.Shortcut>
						</Command.Item>
					</Command.Group>
				</Command.List>
			</Command.Dialog>
		</>
	);
}

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="command" isPreview>
					Command
				</PageHeader>
				<p className="font-body text-body text-xl">
					A command palette that allows users to search and execute commands.
				</p>
				<div>
					<Example className="flex flex-col gap-6">
						<CommandDialogExample />
					</Example>
				</div>
			</section>
		</div>
	);
}
