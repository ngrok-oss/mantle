import { cx } from "@ngrok/mantle/cx";
import { ListNumbersIcon } from "@phosphor-icons/react/ListNumbers";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router";

type TocEntry = {
	/** The heading's `id` attribute (from rehype-slug). */
	id: string;
	/** The visible text content of the heading. */
	text: string;
	/** The heading level (2 or 3). */
	level: number;
};

/**
 * Extracts h2 and h3 headings from a container element.
 * Only includes headings that have an `id` attribute (added by rehype-slug).
 */
function getHeadings(container: HTMLElement): Array<TocEntry> {
	const headings = container.querySelectorAll<HTMLHeadingElement>("h2[id], h3[id]");
	const entries: Array<TocEntry> = [];
	for (const heading of headings) {
		const id = heading.id;
		const text = heading.textContent?.trim();
		if (id && text) {
			entries.push({
				id,
				text,
				level: Number(heading.tagName[1]),
			});
		}
	}
	return entries;
}

/**
 * Tracks which heading is currently "active" (visible near the top of the viewport)
 * using an IntersectionObserver.
 */
function useActiveHeading(entries: Array<TocEntry>): string | undefined {
	const [activeId, setActiveId] = useState<string | undefined>(undefined);
	const visibleSections = useRef(new Set<string>());
	const location = useLocation();

	// Reset active heading when the route changes
	useEffect(() => {
		visibleSections.current.clear();
		setActiveId(undefined);
	}, [location.pathname]);

	// Set initial active from URL hash
	useEffect(() => {
		if (entries.length === 0) {
			return;
		}

		const hash = window.location.hash.slice(1);
		if (hash && entries.some((entry) => entry.id === hash)) {
			setActiveId(hash);
		} else {
			setActiveId(entries[0]?.id);
		}
	}, [entries]);

	useEffect(() => {
		if (entries.length === 0) {
			return;
		}

		const ids = entries.map((entry) => entry.id);
		const visible = visibleSections.current;
		const observer = new IntersectionObserver(
			(observerEntries) => {
				for (const entry of observerEntries) {
					if (entry.isIntersecting) {
						visible.add(entry.target.id);
					} else {
						visible.delete(entry.target.id);
					}
				}

				// Pick the first visible heading in document order
				const firstVisible = ids.find((id) => visible.has(id));
				if (firstVisible) {
					setActiveId(firstVisible);
				}
			},
			{
				rootMargin: "-80px 0px -66% 0px",
				threshold: [0, 1],
			},
		);

		for (const id of ids) {
			const el = document.getElementById(id);
			if (el) {
				observer.observe(el);
			}
		}

		return () => {
			observer.disconnect();
			visible.clear();
		};
	}, [entries]);

	return activeId;
}

/** The id of the DOM element where the ToC portals into (placed in layout.tsx). */
const TOC_PORTAL_ID = "toc-portal";

/**
 * A table of contents sidebar that portals outside of `<main>` into a layout-level
 * container. Lists h2/h3 headings from the current MDX page and highlights the
 * active section based on scroll position.
 *
 * The portal target (`#toc-portal`) is rendered in `layout.tsx` alongside `<main>`.
 *
 * The `contentRef` should point to the container element that holds the MDX content
 * so headings can be extracted from it.
 */
function TableOfContents({ contentRef }: { contentRef: React.RefObject<HTMLDivElement | null> }) {
	const [entries, setEntries] = useState<Array<TocEntry>>([]);
	const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
	const location = useLocation();

	// Find the portal target after mount
	useEffect(() => {
		setPortalTarget(document.getElementById(TOC_PORTAL_ID));
	}, []);

	const updateEntries = useCallback(() => {
		if (contentRef.current) {
			setEntries(getHeadings(contentRef.current));
		}
	}, [contentRef]);

	// Extract headings when MDX content mounts or changes.
	// Uses a MutationObserver to reliably detect when headings appear in the DOM,
	// whether content renders synchronously (prod) or via Suspense (dev).
	useEffect(() => {
		updateEntries();

		const container = contentRef.current;
		if (!container) {
			return;
		}

		const observer = new MutationObserver(updateEntries);
		observer.observe(container, { childList: true, subtree: true });
		return () => {
			observer.disconnect();
		};
		// contentRef is a stable ref object — we only need to re-run when the route changes
	}, [location.pathname, updateEntries, contentRef]);

	const activeId = useActiveHeading(entries);

	if (entries.length === 0 || !portalTarget) {
		return null;
	}

	return createPortal(
		<nav aria-label="Table of contents" className="sticky top-0 max-h-screen w-40">
			<div className="scrollbar h-full overflow-y-auto py-4">
				<p className="text-strong mb-3 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide">
					<ListNumbersIcon className="size-4" />
					On this page
				</p>
				<ol className="space-y-1 border-l border-gray-300">
					{entries.map((entry) => (
						<li key={entry.id}>
							<Link
								to={{ hash: entry.id }}
								preventScrollReset
								aria-current={activeId === entry.id ? "location" : undefined}
								className={cx(
									"-ml-px block border-l py-1 text-xs leading-snug transition-colors",
									entry.level === 3 ? "pl-6" : "pl-3",
									activeId === entry.id
										? "text-strong border-accent-500 font-medium"
										: "text-muted border-transparent hover:text-strong hover:border-gray-400",
								)}
							>
								{entry.text}
							</Link>
						</li>
					))}
				</ol>
			</div>
		</nav>,
		portalTarget,
	);
}

export {
	//,
	TableOfContents,
	TOC_PORTAL_ID,
};
