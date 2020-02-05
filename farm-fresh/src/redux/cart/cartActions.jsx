export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const INCREASE_QUANTITY_IN_CART = 'INCREASE_QUANTITY_IN_CART'
export const DECREASE_QUANTITY_IN_CART = 'DECREASE_QUANTITY_IN_CART'

export const addToCart = product => {
    return {
        type: ADD_TO_CART,
        payload: product
    };
};

export const removeFromCart = product => {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    };
};

export const increaseQuantity = product => {
    return {
        type: INCREASE_QUANTITY_IN_CART,
        payload: product
    };
};

export const decreaseQuantity = product => {
    return {
        type: DECREASE_QUANTITY_IN_CART,
        payload: product
    };
};