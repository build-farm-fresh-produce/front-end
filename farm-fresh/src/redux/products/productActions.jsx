import { axiosWithAuth } from '../../tools/axiosAuth';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'


export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    };
};

export const fetchProductsSuccess = products => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    };
};

export const fetchProductsFailure = error => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    };
};

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest())
        axiosWithAuth()
            .get('https://farm-fresh-produce-api.herokuapp.com/api/products/')
            .then(res => {
                const products = res.data
                dispatch(fetchProductsSuccess(products))
            })
            .catch(err => {
                dispatch(fetchProductsFailure(err.message))
            })
    };
};