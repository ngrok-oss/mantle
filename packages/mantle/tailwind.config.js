/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						color: "var(--text-color-body)",
						maxWidth: "100%",
						strong: {
							color: "var(--text-color-strong)",
							fontWeight: "500",
						},

						h1: {
							color: "var(--text-color-strong)",
							fontSize: "var(--text-5xl)",
							a: {
								color: "var(--text-color-strong)",
								"&:hover": {
									color: "var(--color-accent-600)",
								},
							},
						},
						h2: {
							color: "var(--text-color-strong)",
							fontSize: "var(--text-3xl)",
							a: {
								color: "var(--text-color-strong)",
								"&:hover": {
									color: "var(--color-accent-600)",
								},
							},
						},
						h3: {
							color: "var(--text-color-strong)",
							fontSize: "var(--text-2xl)",
							a: {
								color: "var(--text-color-strong)",
								"&:hover": {
									color: "var(--color-accent-600)",
								},
							},
						},
						h4: {
							color: "var(--text-color-strong)",
							fontSize: "var(--text-xl)",
							a: {
								color: "var(--text-color-strong)",
								"&:hover": {
									color: "var(--color-accent-600)",
								},
							},
						},
						h6: {
							color: "var(--text-color-strong)",
							fontSize: "var(--text-lg)",
							a: {
								color: "var(--text-color-strong)",
								"&:hover": {
									color: "var(--color-accent-600)",
								},
							},
						},
						h5: {
							color: "var(--text-color-strong)",
							fontSize: "var(--text-lg)",
							a: {
								color: "var(--text-color-strong)",
								"&:hover": {
									color: "var(--color-accent-600)",
								},
							},
						},
						a: {
							color: "var(--color-accent-600)",
							fontWeight: "normal",
							textDecoration: "none",
							"&:hover": {
								color: "var(--color-accent-700)",
							},
						},
						"ol > li::marker": {
							fontWeight: "400",
							color: "var(--text-color-body)",
						},
						"ul > li::marker": {
							color: "var(--text-color-body)",
						},
						blockquote: {
							fontWeight: "400",
							fontStyle: "normal",
						},
						code: {
							color: "inherit",
							fontWeight: "400",
						},
						"code::before": {
							content: "none",
						},
						"code::after": {
							content: "none",
						},
					},
				},
			},
		},
	},
};
