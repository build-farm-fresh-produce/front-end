import { ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART, LOAD_PRODUCTS, LOAD_SUCCESS } from '../actions';

const initialState = {
    items: [],
    cart: []
}

export const Reducer = (state =  initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        // case UPDATE_CART:
        //     let product = state.cart.find(item => item.id === action.payload.id);
        //     let newCart = state.cart.filter(item => item.id !== action.payload.id);
        //     product.quantity = action.payload.quantity;
        //     return {
        //         ...state,
        //         cart: newCart
        //     };
        case DELETE_FROM_CART:
            return {
                ...state,
                cart: [...state.cart.filter(item => item.id !== action.payload.id)]
            };
        case LOAD_SUCCESS:
            return {
                ...state,
                items: [...action.payload]
            };
        default:
            return state;
    }
};