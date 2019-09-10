

import { combineReducers } from 'redux'
import {fetchData} from './fetchData'

export default combineReducers({
    posts: fetchData
})
  