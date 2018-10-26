import actionTypes from '../constants/actiontypes';

const [FLIP_CARD, RESTART_GAME] = actionTypes;

export default {
	flipCard: (id, genKey) => ({
		type: FLIP_CARD,
		id,
		genKey,
	}),

	restart: () => ({
		type: RESTART_GAME,
	}),
};
