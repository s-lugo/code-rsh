import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes/routes.js';
import store from './store/store.js';

const App = () => {
		return (
			<Provider store={store} >
				<Router history={browserHistory}>
					{routes}
				</Router>
			</Provider>
		);
};

export default App;