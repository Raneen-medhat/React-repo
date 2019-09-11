import React, { Component } from 'react';
import { connect } from "react-redux";
import {fetchData , changeLanguage } from './../../services/redux/actions/index';
import FilterLink from './../../routing/FilterLink'
import { Localization } from '../../localization/data';

class App extends Component {
state = {
    appLang : this.props.language
}


   changeLanguage = () => {
        this.props.changeLanguage();
        console.log(this.props)

    } 
    render() {
        return (
            <div style={{direction: `${this.props.direction}`}} >
               <FilterLink filter={'products'} >products</FilterLink>
               <FilterLink filter={'HOME'} >all</FilterLink>
                   <p>{this.props.language}</p> 
                   <p>{this.props.direction}</p> 
                   
                  <p> {Localization.HELLO_WORLD[`${this.props.language}`]} </p>
                  <button onClick={ () => { this.changeLanguage() }}>Change lang ar</button>

            </div>
        )
    }

    componentDidMount  = () => {
        console.log(this.props)
        this.props.fetchData();

    }

}

        const mapStateToProps = (state) =>  {
            return state
        } 
  


export default connect(mapStateToProps , {fetchData , changeLanguage })(App);;