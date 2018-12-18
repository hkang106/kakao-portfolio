import React from 'react';
import './index.css';
import App from 'components/App/App';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from 'redux/configureStore';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
