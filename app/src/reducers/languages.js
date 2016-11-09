import { LANGUAGES } from '../actions/languages.js';

const initialState = {
    isLoading: false,
    languages: [

    ],
}

function languages( state = initialState, action) {
    switch(action.type) {
        case LANGUAGES.FETCH_START:
            return {
                ...state,
                isLoading: true,
            }
        case LANGUAGES.FETCH.SUCCESS:
            return {
                ...state,
                languages: action.languages,
                isLoading: false,
            }
        case LANGUAGES.FETCH.FAILED:
            return {
                ...state,
                isLoading: false,
            }
    }
}

export default languages;