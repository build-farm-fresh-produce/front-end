import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { createStore,applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { farmReducer } from '../src/reducers/farmReducer';
import { cartReducer } from '../src/reducers/cartReducer';

const allReducers = {
    farms: farmReducer,
    shoppingCart: cartReducer
};

const rootReducer = combineReducers(allReducers);

let store =  createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
