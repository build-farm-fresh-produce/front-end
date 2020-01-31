import { ADD_PRODUCT, UPDATE_CART, DELETE_FROM_CART } from '../actions/cartActions';

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
            let product = state.cart.find(item => item.id === action.payload.id);
            let newCart = state.cart.filter(item => item.id !== action.payload.id);
            product.quantity = action.payload.quantity;
            return {
                ...state,
                cart: newCart
            };
        case DELETE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            };
        default:
            return state;
    }
};