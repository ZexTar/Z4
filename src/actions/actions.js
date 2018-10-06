import constants from '../constants/constants';

const [FLIP_CARD, RESTART_GAME] = constants;

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
