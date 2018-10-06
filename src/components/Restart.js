import React from 'react';
import PropTypes from 'prop-types';

const Restart = ({ restart }) => (
	<div className="centerbutton">
		<button onClick={() => restart()} className="button" type="button">RESTART GAME</button>
	</div>
);

Restart.propTypes = {
	restart: PropTypes.func.isRequired,
};

export default Restart;
