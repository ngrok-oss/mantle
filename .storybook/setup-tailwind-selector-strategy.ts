/**
 * our applications require the body to have an id set to "ngrok" for the
 * tailwind config compiled css to work correctly. We set the `important` field
 * to `"ngrok"` in the tailwind.config.js, for more info:
 *
 * @see https://tailwindcss.com/docs/configuration#selector-strategy
 */
export function setupTailwindSelectorStrategy() {
	document.body.id = "ngrok";
}
