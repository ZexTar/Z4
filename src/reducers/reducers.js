import { fromJS } from 'immutable';
import cards from '../data/cards';
import actionTypes from '../constants/actiontypes';
import hc from '../helper/handleClick';

const [FLIP_CARD, RESTART_GAME] = actionTypes;
const initialState = { cards };

const update = (state = fromJS(initialState), action = {}) => {
	switch (action.type) {
	case FLIP_CARD:
		return hc.update(state, action);
	case RESTART_GAME:
		return fromJS(hc.shuffle(initialState));

	default:
		return state;

	}
};

export default update;
