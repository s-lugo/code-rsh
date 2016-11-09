const LANGUAGES = {
    FETCH_START: 'LANGUAGES.FETCH_START',
    FETCH_SUCCESS: 'LANGUAGES.FETCH_SUCCESS',
    FETCH_FAILED: 'LANGUAGES.FETCH_FAILED',
}

export function fetchLanguages(){
    return function(dispatch, getState) {
        dispatch({ type: LANGUAGES.FETCH_START });
    };
}

export default LANGUAGES;