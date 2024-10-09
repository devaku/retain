import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

function Debug() {
	return (
		<>
			<Masonry columnsCount={3}>
				<div>
					<p>I am a column</p>
				</div>
				<div>
					<p>I am a column</p>
				</div>
				<div>
					<p>I am a column</p>
				</div>
				<div>
					<p>I am a column</p>
				</div>
				<div>
					<p>I am a column</p>
				</div>
			</Masonry>
		</>
	);
}

export default Debug;
