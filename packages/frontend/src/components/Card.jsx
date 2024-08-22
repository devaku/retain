import SvgArchiveBox from './svgs/SvgArchiveBox';
import SvgPaintbrush from './svgs/SvgPaintbrush';
import SvgTrashCan from './svgs/SvgTrashCan';
import SvgPin from './svgs/SvgPin';

function Card() {
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
			<div className="flex flex-col items-center border-2 rounded-lg border-primary-border-color min-h-32 w-[172px] p-3">
				{/* TITLE */}
				<div className="flex justify-between w-full">
					<div className="max-h-14 text-base max-w-28">
						{trimTitle(`Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Praesentium laboriosam explicabo voluptatem
						deserunt molestias numquam labore ipsum adipisci, enim
						suscipit consequatur similique veritatis dolore
						perspiciatis modi porro, facere nulla architecto?`)}
					</div>
					<div className="h-5 w-5">
						<SvgPin></SvgPin>
					</div>
				</div>
				{/* BODY */}
				<div className="text-xs mt-3 mb-2">
					Lorem ipsum odor amet, consectetuer adipiscing elit.
					Elementum elit hendrerit cubilia viverra vulputate turpis.
					Quis nascetur rhoncus turpis euismod ridiculus. Et laoreet
					lacus potenti aliquam dapibus fermentum volutpat. Tristique
					faucibus donec vitae tristique facilisi euismod elementum
					vehicula taciti. Dignissim taciti finibus; efficitur
					facilisis magnis porta diam. Eu eget viverra tempor
					praesent; duis sed quam. Sapien vehicula laoreet mauris
					imperdiet laoreet.
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
