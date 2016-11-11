import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { routerReducer } from 'react-router-redux';
import languagesReducer from './languages.js';


const fastApp = combineReducers({
    languages: languagesReducer,
    loadingBar: loadingBarReducer,
    routing: routerReducer,
});

export default fastApp;