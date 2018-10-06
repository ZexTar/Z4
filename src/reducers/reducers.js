import _ from 'lodash';
import { Map } from 'immutable';
import cards from '../data/cards';
import constants from '../constants/constants';
import hc from '../helper/handleClick';

const [FLIP_CARD, RESTART_GAME] = constants;
let compare = [];
const initialState = { cards };

const update = (state = Map(initialState), action = {}) => {
	const newState = _.cloneDeep(state.toJS());

	switch (action.type) {
	case FLIP_CARD:
		if (hc.flippedNumber(newState.cards) < 2) {
			if (compare.length < 2) {
				compare.push(action.genKey);
			}

			hc.flipClicked(newState.cards, action.id);
			hc.solveMatched(newState.cards, compare);

			return Map(newState);
		}

		if (hc.flippedNumber(newState.cards) === 2) {
			compare = [];
			hc.hideUnmatched(newState.cards);
			hc.flipClicked(newState.cards, action.id);
			if (compare.length < 2) {
				compare.push(action.genKey);
			}

			return Map(newState);
		}
		break;

	case RESTART_GAME:
		compare = [];
		hc.shuffle(initialState.cards);

		return Map(initialState);

	default:
		return state;
	}

	return state;
};

export default update;
