/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'home-bg': "url('/home-bg.png')",
				'explain-bg': "url('/explain-bg.png')",
				'quiz-bg': "url('/quiz-bg.png')",
			},
		},
	},
	plugins: [],
};
