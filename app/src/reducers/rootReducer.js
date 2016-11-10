import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import languagesReducer from './languages.js';


const fastApp = combineReducers({
    languages: languagesReducer,
    loadingBar: loadingBarReducer,
});

export default fastApp;