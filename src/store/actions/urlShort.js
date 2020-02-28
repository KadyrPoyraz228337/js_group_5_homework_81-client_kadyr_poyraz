import axios from 'axios';

export const SHORT_URL = 'SHORT_URL';
export const ERROR_HANDLER = 'ERROR_HANDLER';

export const shortUrlAction = data => ({type: SHORT_URL, data});
export const errorHandlerAction = data => ({type: ERROR_HANDLER, data});

export const shortUrl = data => async dispatch => {
    try {
        const resp = await axios.post('http://localhost:8000/links', data);
        dispatch(shortUrlAction(resp.data.shortUrl));
    } catch (error) {
        const errorInfo = error.response.data.errors.originalUrl.message;
        dispatch(errorHandlerAction(errorInfo))
    }
};