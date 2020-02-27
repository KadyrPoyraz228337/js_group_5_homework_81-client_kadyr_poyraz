import {SHORT_URL} from "../actions/urlShort";

const initialState = {
        shortUrl: null
    },
    reducer = (state = initialState, action) => {
        switch (action.type) {
            case SHORT_URL:
                return {
                    ...state,
                    shortUrl: action.data
                };
            default:
                return state;
        }
    };

export default reducer;