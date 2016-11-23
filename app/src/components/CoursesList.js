import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Course from './Course.js';
import CourseBanner from './CourseBanner.js'

class CoursesList extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.languageActions.fetchLanguages();
    }
    renderCourses(courses){
        return courses.map( (course) =>{
            return (<Cell key={course.name} col={4}>
                        <Course course={{...course}} selectCourse={this.props.courseActions.selectCourse} />
                    </Cell>
            );
        });
    }
    render(){
        if( !this.props.languages.length ){
            return <div></div>;
        }
        const courses = this.props.languages.filter((lang) => lang.name == this.props.routeParams.language)[0].courses;
        return (
        <div style={{ width: '70%', margin: '0 auto' }}>
                <CourseBanner language={this.props.routeParams.language} />
                <Grid>
                    {this.renderCourses(courses, this.props.courseActions.selectCourse)}
                </Grid>
        </div>);
    }
};

export default CoursesList;