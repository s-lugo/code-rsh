import { combineReducers } from 'redux';
import languagesReducer from './languages.js';

const fastApp = combineReducers({
    languagesReducer,
});

export default fastApp;