import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import {Provider} from "react-redux";
import {reducer} from "./redux/city/reducers";
import {watchFetchWeather} from "./redux/city/sagas";

const root = document.getElementById('root');

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(watchFetchWeather)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    root
);