import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";


import App from './components/App/App';
import store from './services/redux/store';
import LocalStorageService from './services/storage/LocalStorageService';

const localStorageService = LocalStorageService.getService();
console.log("localStorageService" , localStorageService)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
)