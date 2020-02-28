import {ERROR_HANDLER, SHORT_URL} from "../actions/urlShort";

const initialState = {
        shortUrl: null,
        error: null
    },
    reducer = (state = initialState, action) => {
        switch (action.type) {
            case SHORT_URL:
                return {
                    ...state,
                    shortUrl: action.data,
                    error: null
                };
            case ERROR_HANDLER:
                return {
                    ...state,
                    shortUrl: null,
                    error: action.data
                };
            default:
                return state;
        }
    };

export default reducer;