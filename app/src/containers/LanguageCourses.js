import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CoursesList from '../components/CoursesList.js';

const mapStateToProps = ({languages}) => ({
    selected: languages.selected,
    courses: languages.list.filter((language)=>language.name == languages.selected)[0].courses,
});

/*const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(LanguagesActions, dispatch),
})*/

const LanguageCourses = connect(
    mapStateToProps,
)(CoursesList);

export default LanguageCourses;
