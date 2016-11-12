import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LanguagesActions from '../actions/languages.js';
import Practice from '../pages/Practice.js';

//Implement courses selector

const mapStateToProps = (state) => ({
    selectedLanguage: state.languages.selected,
    languages: state.languages.list,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(LanguagesActions, dispatch),
})

const LanguagesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Practice);

export default LanguagesContainer;