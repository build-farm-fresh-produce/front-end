import { ADD_PRODUCT, UPDATE_CART, DELETE_FROM_CART } from '../actions';

const initialState = {
    cart: []
}

export const cartReducer = (state =  initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case UPDATE_CART:
            return {
                ...state,
                cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
            };
        case DELETE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.product !== action.payload.product)
            };
        default:
            return state;
    }
};