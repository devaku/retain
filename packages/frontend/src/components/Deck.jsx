import { useState } from 'react';
import Card from './Card';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

function Deck() {
	let cards = useState([
		{
			cardTitle: 'LONG',
			cardBody:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. A numquam tempora doloribus modi laudantium iste repellendus, est eveniet excepturi, dignissimos cum enim ex aspernatur cupiditate ut magnam recusandae deserunt. Natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. A numquam tempora doloribus modi laudantium iste repellendus, est eveniet excepturi, dignissimos cum enim ex aspernatur cupiditate ut magnam recusandae deserunt. Natus?',
			color: 1,
			isCheckbox: false,
			isArchived: false,
			isPinned: false,
		},
	]);

	return (
		<>
			<div className="mx-3 mt-3 mb-3">
				<Masonry columnsCount={2} gutter="10px">
					<Card
						cardTitle={'LONG'}
						cardBody={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. A numquam tempora doloribus modi laudantium iste repellendus, est eveniet excepturi, dignissimos cum enim ex aspernatur cupiditate ut magnam recusandae deserunt. Natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. A numquam tempora doloribus modi laudantium iste repellendus, est eveniet excepturi, dignissimos cum enim ex aspernatur cupiditate ut magnam recusandae deserunt. Natus?'
						}></Card>
					<Card
						cardTitle={'SHORT'}
						cardBody={'This is a small card'}></Card>
					<Card
						cardTitle={'SHORT'}
						cardBody={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. A numquam tempora doloribus modi laudantium iste repellendus, est eveniet excepturi, dignissimos cum enim ex aspernatur cupiditate ut magnam recusandae deserunt. Natus?'
						}></Card>
					<Card
						cardTitle={'LONG'}
						cardBody={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. A numquam tempora doloribus modi laudantium iste repellendus, est eveniet excepturi, dignissimos cum enim ex aspernatur cupiditate ut magnam recusandae deserunt. Natus?Lorem ipsum dolor sit amet consectetur adipisicing elit. A numquam tempora doloribus modi laudantium iste repellendus, est eveniet excepturi, dignissimos cum enim ex aspernatur cupiditate ut magnam recusandae deserunt. Natus?'
						}></Card>
				</Masonry>
			</div>
		</>
	);
}

export default Deck;
