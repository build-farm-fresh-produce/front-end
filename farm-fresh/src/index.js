import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { createStore,applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import farmReducer from './redux/farms/farmReducer';
import cartReducer from './redux/cart/cartReducer';
import productReducer from './redux/products/productReducer';
import inventoryReducer from './redux/inventory/inventoryReducer';
import orderReducer from './redux/orders/orderReducer';

const rootReducer = combineReducers({
    product: productReducer,
    // farm: farmReducer
    cart: cartReducer,
    inventory: inventoryReducer,
    orders: orderReducer
});

let store =  createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
