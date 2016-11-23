import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LanguagesActions from '../actions/languages.js';
import * as CourseActions from '../actions/course.js';
import Language from '../components/Language.js';

//Implement courses selector

const mapStateToProps = (state) => {
    return {
        languages: state.languages.list,
    };
};

const mapDispatchToProps = (dispatch) => ({
    languageActions: bindActionCreators(LanguagesActions, dispatch),
    courseActions: bindActionCreators(CourseActions, dispatch),
});

const CoursesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Language);

export default CoursesContainer;

//<CoursesList selectCourse={this.props.courseActions.selectCourse} selectedLanguage={this.props.routeParams.language} languages={this.props.languages} />