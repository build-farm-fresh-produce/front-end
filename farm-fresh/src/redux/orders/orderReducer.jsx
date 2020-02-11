import { COMPLETE_ORDER } from './orderActions';

const initialState = {
    orders: []
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMPLETE_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.payload.cart]
            }
        
        default:
            return state;
    }
};

export default orderReducer;