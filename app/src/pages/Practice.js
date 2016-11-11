import React from 'react';
import { connect } from 'react-redux';
import AvailableLanguages from '../containers/AvailableLanguages.js';
import LanguageCourses from '../containers/LanguageCourses.js';

let Practice = (props) => {
    return (
    <div style={{margin: '0 auto', padding: '40px 0px', textAlign: 'center'}}>
        { props.selectedLanguage ? <LanguageCourses /> : <AvailableLanguages /> }
    </div>
    );
}
const mapStateToProps = ({languages}) => ({
    selectedLanguage: languages.selected,
});

Practice = connect(
    mapStateToProps
)(Practice);

export default Practice;
