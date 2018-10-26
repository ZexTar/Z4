// import _ from 'lodash';
import { fromJS } from 'immutable';
import cards from '../data/cards';
import constants from '../constants/constants';
import hc from '../helper/handleClick';

const [FLIP_CARD, RESTART_GAME] = constants;
let compare = [];
const initialState = { cards };

const update = (state = fromJS(initialState), action = {}) => {
	const newState = state.toJS();

	switch (action.type) {
	case FLIP_CARD:
		if (hc.flippedNumber(newState.cards) < 2) {
			if (compare.length < 2) {
				compare.push(action.genKey);
			}

			hc.flipClicked(newState.cards, action.id);
			hc.solveMatched(newState.cards, compare);

			return fromJS(newState);
		}

		if (hc.flippedNumber(newState.cards) === 2) {
			compare = [];
			hc.hideUnmatched(newState.cards);
			hc.flipClicked(newState.cards, action.id);
			if (compare.length < 2) {
				compare.push(action.genKey);
			}

			return fromJS(newState);
		}
		break;

	case RESTART_GAME:
		compare = [];
		hc.shuffle(initialState.cards);

		return fromJS(initialState);

	default:
		return state;
	}

	return state;
};

export default update;
