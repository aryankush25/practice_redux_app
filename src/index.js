import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/';
import logger from 'redux-logger'
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';

const reducers = {form: formReducer};
const reducer = combineReducers(reducers);
let store = createStore(reducer, applyMiddleware(logger));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
