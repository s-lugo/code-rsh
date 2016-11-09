import React from 'react';
import { Grid, Cell } from 'react-mdl';
import AvailableLanguages from '../containers/AvailableLanguages.js';

const Practice = () => {
    return (
    <div style={{width: '70%', margin: '0 auto', padding: '80px 0px'}}>
        <Grid>
            <Cell col={12} style={{textAlign: 'center'}} >
                <h2> Select your language </h2>
            </Cell>
            <AvailableLanguages />
        </Grid>
    </div>
    );
}

export default Practice;
