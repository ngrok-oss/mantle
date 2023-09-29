declare module "@uidotdev/usehooks" {
	export function useWindowScroll(): [
		{
			x: number | null;
			y: number | null;
		},
		(options: ScrollToOptions) => void,
	];
}
