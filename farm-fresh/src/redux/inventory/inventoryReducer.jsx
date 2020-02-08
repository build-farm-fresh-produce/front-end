import {
    FETCH_INVENTORY_REQUEST,
    FETCH_INVENTORY_SUCCESS,
    FETCH_INVENTORY_FAILURE
  } from './inventoryActions'

const initialState = {
    loading: false,
    inventory: [],
    error: ''
};

const inventoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_INVENTORY_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_INVENTORY_SUCCESS:
            return {
                loading: false,
                inventory: action.payload,
                error: ''
            };
        case FETCH_INVENTORY_FAILURE:
            return {
                loading: false,
                inventory: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default inventoryReducer;