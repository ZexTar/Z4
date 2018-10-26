import { fromJS } from 'immutable';
import cards from '../data/cards';
import actionTypes from '../constants/actiontypes';
import hc from '../helper/handleClick';

const [FLIP_CARD, RESTART_GAME] = actionTypes;
const initialState = { cards };

const update = (state = fromJS(initialState), action = {}) => {
	switch (action.type) {
	case FLIP_CARD:
		return fromJS(hc.update(state, action));

	case RESTART_GAME:
		hc.shuffle(initialState.cards);

		return fromJS(initialState);

	default:
		return state;
	}
};

export default update;
