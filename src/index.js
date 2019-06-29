import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

ReactDOM.render(<App />, document.getElementById('root'));
