import { Button, ButtonGroup, IconButton } from "@ngrok/mantle/button";
import { DropdownMenu } from "@ngrok/mantle/dropdown-menu";
import { useCopyToClipboard } from "@ngrok/mantle/hooks";
import { Icon } from "@ngrok/mantle/icon";
import { Toast, makeToast } from "@ngrok/mantle/toast";
import { CaretDownIcon, CopyIcon, FileTextIcon } from "@phosphor-icons/react";
import { useQueryClient } from "@tanstack/react-query";
import { useLocation } from "react-router";

export function DocActions() {
	const location = useLocation();
	const markdownUrl = `${location.pathname}.md`;
	const [, copyToClipboard] = useCopyToClipboard();
	const queryClient = useQueryClient();

	async function copyMarkdownPage() {
		try {
			// fetchQuery respects cache and stale time - only refetches if stale
			const markdown = await queryClient.fetchQuery({
				queryKey: ["markdown", markdownUrl],
				queryFn: async () => {
					const response = await fetch(markdownUrl);
					if (!response.ok) {
						throw new Error("Failed to fetch markdown");
					}
					return response.text();
				},
				staleTime: 5 * 60 * 1000, // 5 minutes
			});

			copyToClipboard(markdown);
			makeToast(
				<Toast.Root priority="success">
					<Toast.Icon />
					<Toast.Message>Copied page as Markdown</Toast.Message>
				</Toast.Root>,
			);
		} catch {
			makeToast(
				<Toast.Root priority="danger">
					<Toast.Icon />
					<Toast.Message>Failed to copy markdown</Toast.Message>
				</Toast.Root>,
			);
		}
	}

	return (
		<DropdownMenu.Root>
			<ButtonGroup className="[&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:not(:first-child)]:-ml-px [&>*:focus]:relative [&>*:focus]:z-10 [&>*:hover]:relative [&>*:hover]:z-10">
				<Button
					type="button"
					appearance="outlined"
					priority="neutral"
					icon={<CopyIcon />}
					iconPlacement="end"
					onClick={copyMarkdownPage}
				>
					Copy page
				</Button>
				<DropdownMenu.Trigger asChild>
					<IconButton
						type="button"
						icon={<CaretDownIcon />}
						appearance="outlined"
						label="Open doc actions dropdown menu"
					/>
				</DropdownMenu.Trigger>
			</ButtonGroup>
			<DropdownMenu.Content align="end">
				<DropdownMenu.Item onClick={copyMarkdownPage} className="justify-between gap-4">
					Copy page
					<Icon svg={<CopyIcon />} />
				</DropdownMenu.Item>
				<DropdownMenu.Item asChild className="justify-between gap-4">
					<a href={markdownUrl} target="_blank">
						View as Markdown
						<Icon svg={<FileTextIcon />} />
					</a>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
}
