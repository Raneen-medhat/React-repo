import { GET_DATA , CHANGE_LANGUAGE } from './../actions/types';
import HTTPClient from './../../networking/queries';

export  const fetchData = () => async dispatch => {
    const response = await HTTPClient.fetch('https://jsonplaceholder.typicode.com/posts');
    dispatch({type: GET_DATA , payload: response.data });
}

export const changeLanguage = () => async dispatch => {
    const action = {
      type: CHANGE_LANGUAGE
    }
    dispatch(action)
  }