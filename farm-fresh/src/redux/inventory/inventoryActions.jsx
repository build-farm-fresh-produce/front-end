import { axiosWithAuth } from '../../tools/axiosAuth';

export const FETCH_INVENTORY_REQUEST = 'FETCH_INVENTORY_REQUEST'
export const FETCH_INVENTORY_SUCCESS = 'FETCH_INVENTORY_SUCCESS'
export const FETCH_INVENTORY_FAILURE = 'FETCH_INVENTORY_FAILURE'


export const fetchInventoryRequest = () => {
    return {
        type: FETCH_INVENTORY_REQUEST
    };
};

export const fetchInventorySuccess = inventory => {
    return {
        type: FETCH_INVENTORY_SUCCESS,
        payload: inventory
    };
};

export const fetchInventoryFailure = error => {
    return {
        type: FETCH_INVENTORY_FAILURE,
        payload: error
    };
};

export const fetchInventory = () => {
    return (dispatch) => {
        dispatch(fetchInventoryRequest())
        axiosWithAuth()
            .get('https://farm-fresh-produce-api.herokuapp.com/api/inventory/')
            .then(res => {
                const inventory = res.data
                dispatch(fetchInventorySuccess(inventory))
            })
            .catch(err => {
                dispatch(fetchInventoryFailure(err.message))
            })
    };
};