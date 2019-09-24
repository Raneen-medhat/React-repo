import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App/App';
import products from './components/App/products/products'
import store from './services/redux/store';


ReactDOM.render(
    <Provider store={store}>
        <Router>
        <Route path="/:filter?" component={App} />
        <Route path="/products" component={products} />
        </Router>
    </Provider>
    ,
    document.querySelector('#root')
);




