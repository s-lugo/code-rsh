import { LANGUAGES } from '../actions/languages.js';

const initialState = {
    isLoading: false,
    languages: [

    ],
}

function languages( state = initialState, action) {
    switch(action.type) {
        case LANGUAGES.FETCH_START:
            console.log("FETCHING LANGUAGES...");
            return {
                ...state,
                isLoading: true,
            }
        case LANGUAGES.FETCH_SUCCESS:
            console.log("FETCHED");
            console.log(action.languages);
            return {
                ...state,
                languages: action.languages,
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