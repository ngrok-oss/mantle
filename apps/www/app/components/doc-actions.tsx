import { useCopyToClipboard } from "@ngrok/mantle/hooks";
import { Icon } from "@ngrok/mantle/icon";
import { SplitButton } from "@ngrok/mantle/split-button";
import { Toast, makeToast } from "@ngrok/mantle/toast";
import { CopyIcon, FileTextIcon } from "@phosphor-icons/react";
import { useQueryClient } from "@tanstack/react-query";
import { useLocation } from "react-router";

type Props = {
	/**
	 * Override the markdown URL derived from the current pathname.
	 * Useful for routes like the index where `pathname + ".md"` doesn't produce a valid URL.
	 */
	markdownPath?: string;
};

export function DocActions({ markdownPath }: Props) {
	const location = useLocation();
	const markdownUrl = markdownPath ?? `${location.pathname}.md`;
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
		<SplitButton.Root className="relative z-50">
			<SplitButton.PrimaryAction icon={<CopyIcon />} iconPlacement="end" onClick={copyMarkdownPage}>
				Copy page
			</SplitButton.PrimaryAction>
			<SplitButton.MenuTrigger label="Open doc actions menu" />
			<SplitButton.MenuContent>
				<SplitButton.MenuItem onClick={copyMarkdownPage}>
					Copy page
					<Icon svg={<CopyIcon />} />
				</SplitButton.MenuItem>
				<SplitButton.MenuItem asChild>
					<a href={markdownUrl} target="_blank">
						View as Markdown
						<Icon svg={<FileTextIcon />} />
					</a>
				</SplitButton.MenuItem>
			</SplitButton.MenuContent>
		</SplitButton.Root>
	);
}
