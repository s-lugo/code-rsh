import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Language from './Language.js';

function renderLanguages(languages, selectLanguage) {
    return languages.map((language)=> (
        <Cell col={6} key={language.name}>
            <Language {...language} selectLanguage={selectLanguage} />
        </Cell>
    ));
}

const LanguagesList = (props) => {
    return (
        <div style={{ width: '70%', margin: '0 auto' }}>
            <Grid>
                {renderLanguages(props.languages, props.selectLanguage)}
            </Grid>
        </div>
    );
}

export default LanguagesList;