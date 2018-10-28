import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cards from '../components/Cards';
import Restart from '../components/Restart';
import allActions from '../actions/actions';
import './App.css';

const mapStateToProps = state => ({
	cards: state.get('cards'),
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(allActions, dispatch),
});

const App = (props) => {
	const { cards, actions } = props;

	return (
		<div>
			<div className="cards">
				<Cards flipCard={actions.flipCard} cards={cards} />
			</div>
			<Restart restart={actions.restart} />
		</div>
	);
};

App.propTypes = {
	cards: PropTypes.shape({
		id: PropTypes.number,
		genKey: PropTypes.number,
		flipped: PropTypes.string,
		solved: PropTypes.string,
	}).isRequired,
	actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
