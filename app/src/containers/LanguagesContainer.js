import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LanguagesActions from '../actions/languages.js';
import LanguagesList from '../components/LanguagesList.js';

//Implement courses selector

const mapStateToProps = (state) => {
    return {
        languages: state.languages.list,
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(LanguagesActions, dispatch),
});

const LanguagesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LanguagesList);

export default LanguagesContainer;