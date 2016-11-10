import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import FastApp from '../reducers/rootReducer.js';

const store = createStore(
	FastApp,
	applyMiddleware(ReduxThunk),
);

export default store;