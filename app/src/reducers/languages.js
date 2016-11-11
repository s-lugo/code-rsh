import { LANGUAGES } from '../actions/languages.js';

const initialState = {
    isLoading: false,
    selected: null,
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
        case LANGUAGES.SELECT_LANGUAGE:
            return {
                ...state,
                selected: action.language,
            }
        default:
            return state;
    }
}

export default languages;