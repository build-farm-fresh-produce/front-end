export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export const addProduct = (product, quantity, unitCost) => {
    return {
        type: ADD_PRODUCT,
        payload: {
            product,
            quantity,
            unitCost
        }
    };
};

export const updateCart = (product, quantity, unitCost) => {
    return {
        type: UPDATE_CART,
        payload: {
            product,
            quantity,
            unitCost
        }
    };
};

export const deleteFromCart = (product) => {
    return {
        type: DELETE_FROM_CART,
        payload: {
            product
        }
    };
};