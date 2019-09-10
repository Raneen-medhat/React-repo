import React, { Component } from 'react';
import { connect } from "react-redux";
import {fetchData} from './../../services/redux/actions/index';
class App extends Component {

    render() {
        return (
            <div>
                App
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