import { LANGUAGES } from '../actions/languages.js';

const initialState = {
    isLoading: false,
    list: [

    ],
}

function languages( state = initialState, action) {
    switch(action.type) {
        case LANGUAGES.FETCH_START:
            return {
                ...state,
                isLoading: true,
            }
        case LANGUAGES.FETCH_SUCCESS:
            return {
                ...state,
                list: action.languages,
                isLoading: false,
            }
        case LANGUAGES.FETCH_FAILED:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}

export default languages;