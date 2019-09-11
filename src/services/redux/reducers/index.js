

import { combineReducers } from 'redux'
import {fetchData} from './fetchData'
import {  directionReducer} from './directionReducer'
import { languageReducer } from './languageReducer';
export default combineReducers({
    posts: fetchData,
    language: languageReducer ,
    direction: directionReducer
})
  