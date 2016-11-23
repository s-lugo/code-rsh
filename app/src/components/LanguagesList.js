import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Language from './Language.js';

class LanguagesList extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.actions.fetchLanguages();
    }
    renderLanguages() {
        return this.props.languages.map((language)=> (
            <Cell col={6} key={language.name}>
                <Language {...language} selectLanguage={this.props.actions.selectLanguage} />
            </Cell>
        ));
    }
    render(){
            return (
            <div style={{ width: '70%', margin: '0 auto' }}>
                <Grid>
                    {this.renderLanguages(this.props.languages, this.props.selectLanguage)}
                </Grid>
            </div>
        );
    }
}

export default LanguagesList;