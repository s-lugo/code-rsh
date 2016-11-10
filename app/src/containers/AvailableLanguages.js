import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LanguagesList from '../components/LanguagesList.js';
import * as LanguagesActions from '../actions/languages.js';

const mapStateToProps = ({languages}) => ({
    languages: languages.list,
    isLoading: languages.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(LanguagesActions, dispatch),
})

const AvailableLanguages = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LanguagesList);

export default AvailableLanguages;
