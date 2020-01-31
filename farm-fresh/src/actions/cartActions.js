export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export const addProduct = (product_name, quantity, price) => {
    return {
        type: ADD_PRODUCT,
        payload: {
            product_name,
            quantity,
            price
        }
    };
};

export const updateCart = (id, quantity) => {
    return {
        type: UPDATE_CART,
        payload: {
            id,
            quantity
        }
    };
};

export const deleteFromCart = (id) => {
    return {
        type: DELETE_FROM_CART,
        payload: {
            id
        }
    };
};