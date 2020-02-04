import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from './cartActions';

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.cart.findIndex(item => item.id === action.payload.id) !== -1) {
                const cart = state.cart.reduce((cartAcc, item) => {
                    if (item.id === action.payload.id) {
                        cartAcc.push({ ...item, quantity_in_cart: item.quantity_in_cart + 1 })
                    } else {
                        cartAcc.push(item)
                    }
                    return cartAcc
                }, [])
                return { ...state, cart }
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity_in_cart: 1 }]
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            };

        default:
            return state;
    }
};

export default cartReducer;