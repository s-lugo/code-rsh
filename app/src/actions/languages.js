import { showLoading, hideLoading } from 'react-redux-loading-bar';
export const LANGUAGES = {
    FETCH_START: 'LANGUAGES.FETCH_START',
    FETCH_SUCCESS: 'LANGUAGES.FETCH_SUCCESS',
    FETCH_FAILED: 'LANGUAGES.FETCH_FAILED',
}

export function fetchLanguages(){
    return function(dispatch, getState) {
        dispatch({ type: LANGUAGES.FETCH_START });
        dispatch(showLoading());
        return fetch('/api/languages')
            .then((res) => res.json())
			.then((languages) => {
                dispatch({ type: LANGUAGES.FETCH_SUCCESS, languages });
                dispatch(hideLoading());
                }
            )
			.catch((errors) => dispatch({ type: LANGUAGES.FETCH_FAILED, errors }));
    };
}
