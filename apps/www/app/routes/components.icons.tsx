import { Button } from "@ngrok/mantle/button";
import { useCopyToClipboard } from "@ngrok/mantle/hooks";
import { Icon } from "@ngrok/mantle/icon";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { Input } from "@ngrok/mantle/input";
import { Label } from "@ngrok/mantle/label";
import { CheckIcon } from "@phosphor-icons/react/Check";
import { useForm } from "@tanstack/react-form";
import Fuse, { type IFuseOptions } from "fuse.js";
import { type ComponentRef, useRef, useState } from "react";
import { Form, useSubmit } from "react-router";
import { PageHeader } from "~/components/page-header";
import { type IconData, iconData } from "~/features/icons/icon-data";
import type { Route } from "./+types/components.icons";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Icons" },
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

const fuseOptions = {
	keys: [
		{ name: "name", weight: 0.7 },
		{ name: "tags", weight: 0.3 },
	],
	threshold: 0.25,
} as const satisfies IFuseOptions<IconData>;

const fuzzy = new Fuse(iconData, fuseOptions);

export const clientLoader = async ({ request }: Route.ClientLoaderArgs) => {
	const url = new URL(request.url);
	const q = url.searchParams.get("q") ?? "";

	const data = q ? fuzzy.search(q).map((result) => result.item) : iconData;

	return { data, q };
};

export default function Page({ loaderData }: Route.ComponentProps) {
	const submit = useSubmit();

	const formRef = useRef<ComponentRef<"form">>(null);
	const form = useForm({
		defaultValues: {
			q: loaderData.q,
		},
		onSubmit: ({ value }) => {
			submit(value, { method: "get" });
		},
	});
	const searchInputRef = useRef<ComponentRef<"input">>(null);

	const { data } = loaderData;

	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="icon">Icon</PageHeader>
				<p className="font-body text-body text-xl">
					A list of custom icons that are used throughout ngrok UI.
				</p>
				<form
					ref={formRef}
					onSubmit={(event) => {
						event.preventDefault();
						event.stopPropagation();
						void form.handleSubmit();
					}}
				>
					<form.Field
						name="q"
						listeners={{
							onChangeDebounceMs: 300,
							onChange: () => {
								formRef.current?.requestSubmit();
							},
						}}
					>
						{(field) => (
							<div className="space-y-1">
								<Label className="block" htmlFor={field.name}>
									Search Icons
								</Label>
								<Input
									autoComplete="off"
									autoFocus
									id={field.name}
									name={field.name}
									onBlur={field.handleBlur}
									onChange={(event) => field.handleChange(event.target.value)}
									ref={searchInputRef}
									value={field.state.value}
								/>
							</div>
						)}
					</form.Field>
				</form>
				{data.length === 0 ? (
					<form.Field name="q">
						{(field) => (
							<div className="space-y-4 text-center">
								<p className="text-strong">
									No results found for{" "}
									<InlineCode>{field.state.value}</InlineCode>
								</p>
								<Form
									method="GET"
									onSubmit={() => {
										form.reset();
										searchInputRef.current?.focus();
									}}
								>
									<Button
										name={field.name}
										value=""
										appearance="outlined"
										priority="neutral"
										type="submit"
									>
										Clear Search
									</Button>
								</Form>
							</div>
						)}
					</form.Field>
				) : (
					<ul className="grid grid-cols-4 gap-2">
						{data.map((item) => (
							<ListItem key={item.id} item={item} />
						))}
					</ul>
				)}
			</section>
		</div>
	);
}

function ListItem({ item }: { item: IconData }) {
	const [, copyToClipboard] = useCopyToClipboard();
	const [wasCopied, setWasCopied] = useState(false);
	const timeoutHandle = useRef<number>(0);
	const copyText = `import { ${item.name} } from "@ngrok/mantle/icons";`;

	return (
		<li>
			<button
				type="button"
				onClick={() => {
					copyToClipboard(copyText);
					setWasCopied(true);

					// Clear any existing timeout
					window.clearTimeout(timeoutHandle.current);

					// Reset the copied state after a short delay
					timeoutHandle.current = window.setTimeout(() => {
						setWasCopied(false);
					}, 2000);
				}}
				className="h-full border border-card-muted hover:border-card flex flex-col items-center gap-1 justify-center relative bg-card ring-accent-600 hover:bg-card-hover focus-visible:bg-card-hover group w-full cursor-pointer rounded-md px-4 py-3 focus:outline-hidden focus-visible:ring-2"
			>
				{wasCopied && (
					<div className="flex absolute right-2.5 top-2.5 z-10 rounded bg-filled-success text-on-filled hover:bg-filled-success focus:bg-filled-success focus-visible:border-success-600 focus-visible:ring-focus-success w-auto gap-1 border-transparent items-center pl-2 pr-1.5 hover:border-transparent">
						<p className="text-sm text-strong">Copied</p>
						<Icon svg={<CheckIcon weight="bold" />} className="size-4" />
					</div>
				)}
				<Icon className="size-10" svg={item.Icon} />
				<p className="text-sm text-strong font-medium">{item.name}</p>
				<div className="text-sm">{item.description}</div>
			</button>
		</li>
	);
}
