const hc = {};
let compare = [];

hc.flipClicked = (arr, id) => {
	arr.forEach((el) => {
		if (el.id === id) {
			el.flipped = 'true';
		}
	});
};

hc.flippedNumber = (arr) => {
	let flippedCards = 0;
	arr.forEach((el) => {
		if (el.flipped === 'true') {
			flippedCards += 1;
		}
	});

	return flippedCards;
};

hc.solveMatched = (arr, compare) => {
	if (compare.length === 2 && compare[0] === compare[1]) {
		arr.forEach((el) => {
			if (el.genKey === compare[0]) {
				el.solved = 'true';
			}
		});
	}
};

hc.hideUnmatched = (arr) => {
	if (hc.flippedNumber(arr) === 2) {
		arr.forEach((el) => {
			el.flipped = 'false';
		});
	}

	return arr;
};

hc.shuffle = (cards) => {
	compare = [];
	for (let i = cards.length - 1; i > 0; i -= 1) {
		if (i !== 4 && i !== 9 && i !== 14) {
			const j = Math.floor(Math.random() * (i + 1));
			if (j !== 4 && j !== 9 && j !== 14) {
				[cards[i], cards[j]] = [cards[j], cards[i]];
			}
		}
	}

	return cards;
};

hc.update = (state, action) => {
	const newState = state.toJS();
	if (hc.flippedNumber(newState.cards) < 2) {
		if (compare.length < 2) {
			compare.push(action.genKey);
		}

		hc.flipClicked(newState.cards, action.id);
		hc.solveMatched(newState.cards, compare);

		return newState;
	}

	if (hc.flippedNumber(newState.cards) === 2) {
		compare = [];
		hc.hideUnmatched(newState.cards);
		hc.flipClicked(newState.cards, action.id);
		if (compare.length < 2) {
			compare.push(action.genKey);
		}

			return newState;
		}
}

export default hc;
