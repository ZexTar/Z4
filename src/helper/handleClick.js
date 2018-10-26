const hc = {};
let compare = [];

hc.flipClicked = (state, id) => {
	const modState = Object.assign({}, state);
	modState.cards.forEach((el) => {
		if (el.id === id) {
			el.flipped = 'true';
		}
	});

	return modState;
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

hc.solveMatched = (state, compare) => {
	const modState = Object.assign({}, state);
	if (compare.length === 2 && compare[0] === compare[1]) {
		modState.cards.forEach((el) => {
			if (el.genKey === compare[0]) {
				el.solved = 'true';
			}
		});
	}

	return modState;
};

hc.hideUnmatched = (state) => {
	const modState = Object.assign({}, state);
	if (hc.flippedNumber(modState.cards) === 2) {
		modState.cards.forEach((el) => {
			el.flipped = 'false';
		});
	}

	return modState;
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

		return hc.solveMatched(hc.flipClicked(newState, action.id), compare);
	}

	if (hc.flippedNumber(newState.cards) === 2) {
		compare = [];

		if (compare.length < 2) {
			compare.push(action.genKey);
		}

		return hc.flipClicked(hc.hideUnmatched(newState), action.id);
	}
}

export default hc;
