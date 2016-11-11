import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes/routes.js';
import store from './store/store.js';
import { syncHistoryWithStore } from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);

const App = () => {
		return (
			<Provider store={store} >
				<Router history={history}>
					{routes}
				</Router>
			</Provider>
		);
};

export default App;