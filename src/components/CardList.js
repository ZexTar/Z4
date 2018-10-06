import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = ({ flipCard, cards }) => {
	const cardArr = cards.map((user, i) => {
		if (i === 4 || i === 9 || i === 14) {
			return <div key={cards[i].id} />;
		}

		return (
			<Card
				flipCard={flipCard}
				key={cards[i].id}
				id={cards[i].id}
				genKey={cards[i].genKey}
				flipped={cards[i].flipped}
				solved={cards[i].solved}
			/>
		);
	});

	return (
		<div>
			{cardArr}
		</div>
	);
};

CardList.propTypes = {
	flipCard: PropTypes.func.isRequired,
	cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
