import { GET_DATA ,FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from './../actions/types';
import HTTPClient from './../../networking/queries';


export  function fetchProductsPending() {
    return {
        type: FETCH_PRODUCTS_PENDING
    }
}

export function fetchProductsSuccess(products) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        products: products
    }
}

export function fetchProductsError(error) {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error: error
    }
}


export  const fetchData = () => async dispatch => {
    const response = await HTTPClient.fetch('https://jsonplaceholder.typicode.com/posts');
    dispatch({type: 'GET_DATA' , payload: response.data });

}
