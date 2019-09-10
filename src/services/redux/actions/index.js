import { GET_DATA } from './../actions/types';
import HTTPClient from './../../networking/queries';


export  const fetchData = () => async dispatch => {
    const response = await HTTPClient.fetch('https://jsonplaceholder.typicode.com/posts');
    dispatch({type: GET_DATA , payload: response.data });
}
