import React, { Component } from 'react';
import LanguagesList from '../components/LanguagesList.js';
import CoursesList from '../components/CoursesList.js';

class Practice extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.actions.fetchLanguages();
    }
    render(){
        return (
            <div style={{margin: '0 auto', padding: '40px 0px', textAlign: 'center'}}>
               { this.props.routeParams.language ? <CoursesList selectedLanguage={this.props.routeParams.language} languages={this.props.languages} /> :
               <LanguagesList languages={this.props.languages} selectLanguage={this.props.actions.fetchLanguages} /> }
            </div>
        );
    }
}

export default Practice;