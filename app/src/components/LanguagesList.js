import React from 'react';
import {Grid, Cell, Card, CardTitle, CardActions } from 'react-mdl';

const styles = {
    language: {
       
    },
}

const renderLanguages = ( arr ) => {
    return arr.map( (language) =>(
        <Cell col={3} style={styles.language} >

        </Cell>
    ));
};

const LanguagesList = ({ languages }) => (
    <div style={{width: '70%', margin: '0 auto', padding: '80px 0px'}}>
        <Grid>
            <Cell col={12} style={{textAlign: 'center'}} >
                <h2> Practice in your favorite languages </h2>
            </Cell>
            
        </Grid>
    </div>
);

export default LanguagesList;


