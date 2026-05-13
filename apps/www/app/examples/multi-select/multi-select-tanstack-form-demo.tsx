import { Button } from "@ngrok/mantle/button";
import { Field } from "@ngrok/mantle/field";
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
					<Field.Item name={field.name}>
						<Field.Label>Favorites</Field.Label>
						<Field.Control>
							<MultiSelect.Root
								selectedValue={field.state.value}
								setOpen={() => {
									setSearchValue("");
								}}
								setSelectedValue={(values) => {
									field.handleChange(values);
								}}
							>
								<MultiSelect.Trigger onBlur={field.handleBlur}>
									<MultiSelect.TagValues />
									<MultiSelect.Input
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
						</Field.Control>
						<Field.Errors messages={field.state.meta.errors.map((error) => error?.message)} />
					</Field.Item>
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
