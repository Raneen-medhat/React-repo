import React, { Component } from 'react';
import { connect } from "react-redux";
import {fetchData , changeLanguage , loadLocalization} from './../../services/redux/actions/index';
import FilterLink from './../../routing/FilterLink'
// import { Localization } from '../../localization/data';

class App extends Component {

   changeLanguage = () => {
        this.props.changeLanguage();
    } 



    render() {
        if (this.props.localization) {
            return (
          
                <div style={{direction: `${this.props.direction}`}} >
                   <FilterLink filter={'products'} >products</FilterLink>
                   <FilterLink filter={'HOME'} >all</FilterLink>
                       <p>{this.props.language}</p> 
                       <p>{this.props.direction}</p> 
                      <p> {this.props.localization.HELLO_WORLD[`${this.props.language}`]} </p>
                      <button onClick={ () => { this.changeLanguage() }}>Change lang ar</button>
                </div>
            )
        } else return null
    }

    componentDidMount  = () => {
        this.props.fetchData();
        this.props.loadLocalization()
    }
    }

        const mapStateToProps = (state) =>  {
            return state
        } 
  


export default connect(mapStateToProps , {fetchData , changeLanguage , loadLocalization })(App);;