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
            let existingItem = state.cart.find(item => item.id === action.payload.id);
            console.log('existing item', existingItem);
            console.log('cart is curently', state.cart)
            if (existingItem) {
                // return {
                    existingItem.quantity_in_cart += 1
                    // state.cart.map(item => {
                    //     console.log('item', item);
                    //     console.log('item_id', item.id);
                    //     console.log('action.payload.id', action.payload.id);
                    //     console.log(typeof(action.payload.id))
                    //     console.log(typeof(item.id))
                    //     return item.id === action.payload.id
                    //     ? item.quantity_in_cart += 1
                    //     : item
                    // }
                    // )
                // }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, {...action.payload, quantity_in_cart: 1}]
                };
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