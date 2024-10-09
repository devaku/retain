import SvgArchiveBox from './svgs/SvgArchiveBox';
import SvgPaintbrush from './svgs/SvgPaintbrush';
import SvgTrashCan from './svgs/SvgTrashCan';
import SvgPin from './svgs/SvgPin';

function Card({ cardTitle, cardBody }) {
	function trimTitle(titleText) {
		if (titleText.length > 25) {
			let trimmedText = titleText.substring(0, 25);
			trimmedText += '...';
			return trimmedText;
		} else {
			return titleText;
		}
	}
	return (
		<>
			<div className="flex flex-col items-center justify-evenly border-2 rounded-lg border-primary-border-color min-h-32 w-[172px] p-3">
				{/* TITLE */}
				<div className="flex justify-between w-full">
					<div className="max-h-14 text-base max-w-28">
						{trimTitle(cardTitle)}
					</div>
					<div className="h-5 w-5">
						<SvgPin></SvgPin>
					</div>
				</div>
				{/* BODY */}
				<div className="w-full">
					<div className="text-xs mt-3 mb-2 text-left">
						{cardBody}
					</div>
				</div>

				{/* FOOTER */}
				<div className="flex justify-evenly w-full h-5">
					<SvgPaintbrush></SvgPaintbrush>
					<SvgArchiveBox></SvgArchiveBox>
					<SvgTrashCan></SvgTrashCan>
				</div>
			</div>
		</>
	);
}

export default Card;
