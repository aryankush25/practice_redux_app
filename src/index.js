import React from "react";
import ReactDOM from "react-dom";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

const reducers = { form: formReducer };
const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
