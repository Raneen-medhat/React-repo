import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import setupInterceptors from './../../services/networking/intercepor';

const store = createStore( reducers, applyMiddleware(thunk));
// set up the interceptors!
setupInterceptors(store);
export default store;