/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			mono: 'IBM Plex Mono'
		},
		extend: {
			borderWidth: {
				'1': '1px'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
