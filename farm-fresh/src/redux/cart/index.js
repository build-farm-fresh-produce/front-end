export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';

export const addToCart = payload => {
    return {
        type: ADD_TO_CART,
        payload: payload
    };
};

export const updateCart = payload => {
    return {
        type: UPDATE_CART,
        payload: payload
    };
};

export const deleteFromCart = payload => {
    return {
        type: DELETE_FROM_CART,
        payload: payload
    };
};

export const loadProducts = () => {
    return {
        type: LOAD_PRODUCTS
    };
};

export const loadSuccess = payload => {
    return {
        type: LOAD_SUCCESS,
        payload: payload
    };
};