import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import thunk from 'redux-thunk';
import Fetchreducer from './reducers/reducer';
const myStore = createStore(Fetchreducer,(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={myStore} >
        <App />
    </Provider>, document.getElementById('root')
)

