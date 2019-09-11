import React, { Component } from 'react';
import { connect } from "react-redux";
import {fetchData} from './../../services/redux/actions/index';
import FilterLink from './../../routing/FilterLink'
class App extends Component {

    render() {
        return (
            <div>
               <FilterLink filter={'products'} >products</FilterLink>
               <FilterLink filter={'HOME'} >all</FilterLink>
            </div>
        )
    }
    componentDidMount  = () => {
        this.props.fetchData();
    }

}

        const mapStateToProps = (state) =>  {
            return state
        }  


export default connect(mapStateToProps , {fetchData})(App);;