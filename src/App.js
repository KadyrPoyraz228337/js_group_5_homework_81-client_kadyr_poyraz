import React, {useState} from 'react';

import {Button, Form, Input} from "reactstrap";
import {connect} from "react-redux";

import {shortUrl} from "./store/actions/urlShort";

import './App.css';


const App = props => {
    const [url, setUrl] = useState({originalUrl: ''});

    const inputChangeHandler = e => setUrl({
        ...url,
        [e.target.name]: e.target.value
    });

    const onSubmit = async e => {
        e.preventDefault();
        await props.shortUrl(url);
    };

    return (
        <div>
            <div className='border rounded bg-light w-75 ml-auto mr-auto mt-3 p-5'>
                <Form
                    className='w-100 d-flex flex-column align-items-center'
                    onSubmit={onSubmit}
                >
                    <h1>Shorten your link!</h1>
                    <Input
                        type='text'
                        name='originalUrl'
                        className='w-50 my-4'
                        placeholder='Enter URL here'
                        onChange={inputChangeHandler}
                        required
                    />
                    <Button>shorten</Button>
                    {props.state.shortUrl && <div className='d-flex flex-column align-items-center'>
                        <b className='my-3'>
                            your link now looks like this:
                        </b>
                        <a href={'http://localhost:8000/' + props.state.shortUrl}>
                            {'http://localhost:8000/' + props.state.shortUrl}
                        </a>
                    </div>}
                </Form>
            </div>
        </div>
    );
};

export default connect(
    state => ({
        state: state
    }),
    dispatch => ({
        shortUrl: data => dispatch(shortUrl(data))
    })
)(App);
