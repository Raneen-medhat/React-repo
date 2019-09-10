

import { combineReducers } from 'redux'
import {fetchProducts} from './fetchProducts';
import {fetchData} from './fetchData'

export default combineReducers({
    fetchProducts,
    posts: fetchData
})
  