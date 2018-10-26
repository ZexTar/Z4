import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import update from './reducers/reducers';
import App from './containers/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

const store = createStore(update);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
