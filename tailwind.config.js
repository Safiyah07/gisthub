/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				orange: "#ff914d",
				grey: "#828282",
			},
			backgroundImage: {
				power1: "url('/power1.webp')",
				water1: "url('/water1.webp')",
			},
			boxShadow: {
				"3xl": "0px 0px 10px 3px rgba(0, 0, 0, 0.2)",
			},
		},
		screens: {
			sm: { max: "479px" },
			md: { min: "480px", max: "880px" },
			lg: { min: "881px" },
		},
	},
	plugins: [],
};
