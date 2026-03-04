import { Button } from "@ngrok/mantle/button";
import { Label } from "@ngrok/mantle/label";
import { MultiSelect } from "@ngrok/mantle/multi-select";
import { useForm } from "@tanstack/react-form";
import { matchSorter } from "match-sorter";
import { useMemo, useState, useTransition } from "react";
import { z } from "zod";

const formSchema = z.object({
	favorites: z.string().array().min(1, "Select at least one item."),
});

type FormValues = z.infer<typeof formSchema>;

export function TanStackFormDemo() {
	const [isPending, startTransition] = useTransition();
	const [searchValue, setSearchValue] = useState("");
	const filteredFruits = useMemo(
		() => matchSorter(["Apple", "Banana", "Cherry", "Grapes", "Orange", "Strawberry"], searchValue),
		[searchValue],
	);

	const filteredVeggies = useMemo(
		() => matchSorter(["Carrot", "Cucumber", "Lettuce", "Tomato", "Zucchini"], searchValue),
		[searchValue],
	);

	const form = useForm({
		defaultValues: {
			favorites: [],
		} satisfies FormValues as FormValues,
		validators: {
			onChange: formSchema,
			onSubmit: formSchema,
		},
		onSubmit: ({ value }) => {
			window.alert(`Submitted: ${JSON.stringify(value, null, 2)}`);
		},
	});

	return (
		<form
			className="w-full space-y-4"
			onSubmit={(event) => {
				event.preventDefault();
				event.stopPropagation();
				void form.handleSubmit();
			}}
		>
			<form.Field name="favorites">
				{(field) => (
					<div className="space-y-1">
						<Label htmlFor={field.name}>Favorites</Label>
						<MultiSelect.Root
							selectedValue={field.state.value}
							setSelectedValue={(values) => {
								field.handleChange(values);
							}}
						>
							<MultiSelect.Trigger
								onBlur={field.handleBlur}
								validation={field.state.meta.errors.length > 0 ? "error" : false}
							>
								<MultiSelect.TagValues />
								<MultiSelect.Input
									id={field.name}
									onValueChange={(value) => startTransition(() => setSearchValue(value))}
									placeholder="Select fruits and vegetables..."
								/>
							</MultiSelect.Trigger>
							<MultiSelect.Content aria-busy={isPending}>
								{filteredFruits.length > 0 && (
									<MultiSelect.Group>
										<MultiSelect.GroupLabel>Fruits</MultiSelect.GroupLabel>
										{filteredFruits.map((value) => (
											<MultiSelect.Item key={value} value={value}>
												{value}
											</MultiSelect.Item>
										))}
									</MultiSelect.Group>
								)}
								{filteredFruits.length > 0 && filteredVeggies.length > 0 && (
									<MultiSelect.Separator />
								)}
								{filteredVeggies.length > 0 && (
									<MultiSelect.Group>
										<MultiSelect.GroupLabel>Vegetables</MultiSelect.GroupLabel>
										{filteredVeggies.map((value) => (
											<MultiSelect.Item key={value} value={value}>
												{value}
											</MultiSelect.Item>
										))}
									</MultiSelect.Group>
								)}
								{filteredFruits.length === 0 && filteredVeggies.length === 0 && (
									<MultiSelect.Empty>No results found</MultiSelect.Empty>
								)}
							</MultiSelect.Content>
						</MultiSelect.Root>
						{field.state.meta.errors.map((error) => (
							<p key={error?.message} className="text-sm leading-4 text-danger-600">
								{error?.message}
							</p>
						))}
					</div>
				)}
			</form.Field>
			<form.Subscribe selector={(state) => state.isDirty}>
				{(isDirty) => (
					<Button type="submit" appearance="filled" disabled={!isDirty}>
						Submit
					</Button>
				)}
			</form.Subscribe>
		</form>
	);
}
