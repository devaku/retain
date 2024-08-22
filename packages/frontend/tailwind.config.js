/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-yellow': '#E0CA3C',
				'primary-border-color': '#646464',
			},
		},
	},
	plugins: [],
};
