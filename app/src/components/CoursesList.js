import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Course from './Course.js';
import CourseBanner from './CourseBanner.js'

function renderCourses(courses, selectCourse){
    return courses.map( (course) =>{
        return (<Cell key={course.name} col={4}>
                    <Course {...course} selectCourse={selectCourse} />
                </Cell>
        );
    });
}

const CoursesList = (props) => {
    if( !props.languages.length ){
        return <div></div>;
    }
    const courses = props.languages.filter((lang) => lang.name == props.selectedLanguage)[0].courses;
    return (
    <div style={{ width: '70%', margin: '0 auto' }}>
            <CourseBanner language={props.selectedLanguage} />
            <Grid>
                {renderCourses(courses, props.selectLanguage)}
            </Grid>
    </div>);
};

export default CoursesList;