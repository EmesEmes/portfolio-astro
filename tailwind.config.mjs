/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: "375px",
			md: "768px",
			lg: "1200px",			
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '2rem',
			},
		},
		extend: {},
	},
	plugins: [],
}
