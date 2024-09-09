/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			boxShadow: {
				button: "0px 0px 10px 0px rgba(0, 0, 0, 0.25);",
			},
			backgroundImage: {
				"custom-gradient":
					"linear-gradient(180deg, rgba(251, 251, 251, 0.15) 0%, rgba(153, 206, 66, 0.0855) 55.27%, rgba(251, 251, 251, 0.15) 100%)",
			},
		},
	},
	plugins: [],
};
