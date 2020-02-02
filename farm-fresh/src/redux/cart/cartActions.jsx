import {
    ADD_TO_CART
} from './cartTypes';

export const addToCart = product => {
    // console.log(id);
    return {
        type: ADD_TO_CART,
        payload: product
    };
};