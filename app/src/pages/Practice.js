import React from 'react';
import AvailableLanguages from '../containers/AvailableLanguages.js';

const Practice = () => {
    return (
    <div style={{margin: '0 auto', padding: '40px 0px', textAlign: 'center'}}>
        <h2> Select your language </h2>
        <AvailableLanguages />
    </div>
    );
}

export default Practice;
