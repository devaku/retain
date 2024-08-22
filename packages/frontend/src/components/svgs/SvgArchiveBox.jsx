function SvgArchiveBox({ twColor }) {
	twColor = twColor ? twColor : 'fill-black';
	return (
		<svg
			className={twColor}
			xmlns="http://www.w3.org/2000/svg"
			fill-rule="evenodd"
			clip-rule="evenodd"
			viewBox="0 0 24 24">
			<path d="M24 23h-24v-15.014l5.477-6.986h13.069l5.454 6.986v15.014zm-2-13h-20v11h20v-11zm-9 5h3l-4 4-4-4h3v-3h2v3zm4.568-12h-11.085l-3.951 5h18.942l-3.906-5z" />
		</svg>
	);
}

export default SvgArchiveBox;
