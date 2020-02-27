import axios from 'axios';

export const SHORT_URL = 'SHORT_URL';

export const shortUrlAction = data => ({type: SHORT_URL, data});

export const shortUrl = data => async dispatch => {
    const resp = await axios.post('http://localhost:8000/links', data);
    dispatch(shortUrlAction(resp.data.shortUrl));
};