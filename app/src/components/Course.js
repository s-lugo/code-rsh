import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Card, CardTitle, CardText, CardActions, CardMenu, Button, IconToggle, Icon } from 'react-mdl';
import Anime from 'react-anime';
import Logos from '../assets/img/index.js';

/*
-Background and checkmark depending on wether the course has been completed or not
-Favorite toggle button, avg wpm, and # of times completed
-Change star color to yellow when toggled
*/

let styles = {
    difficulty:{
        fontWeight: 'bold',
    },
    wpm:{
        fontWeight: 'bold',
    },
    courseStat:{
        padding: '10px',
    },
    button:{
        padding: '20px',
    }
}

class Course extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        }
        this.handleHover = this.handleHover.bind(this);
    }
    handleHover(){
        this.setState({hover: !this.state.hover});
    }
    render() {
        return (
            <Anime translateY={this.state.hover ? '-5px' : '0px'} >
                <div>
                    <Card shadow={0} style={{margin: 'auto' }} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                        <CardTitle expand 
                            style={{color: '#fff', cursor: 'pointer', backgroundColor: this.props.course.completed ? "#8BC34A" : "#EF5350"}} 
                            onClick={()=>this.props.selectCourse(this.props.course)}
                        >
                            {this.props.course.name}
                        </CardTitle>
                        <CardMenu>
                            <Icon name="star" 
                                style={{color: this.props.course.favorite ? 'yellow' : 'grey' }} 
                                onClick={()=>console.log('DISPATCH FAVORITE COURSE')}
                            />
                            {this.props.course.completed ?  <Icon name="done" style={{color:'green'}}/> : null }
                        </CardMenu>
                        <CardActions border style={{textAlign: 'center'}}>
                            <span style={styles.courseStat}>
                                WPM:  <span style={styles.wpm}> -- </span>
                            </span>
                            <span style={styles.courseStat}> 
                                Difficulty: <span style={styles.difficulty}>{this.props.course.difficulty}</span> 
                            </span>
                            {this.state.hover ?
                                <div>
                                    <Button raised primary ripple style={{margin:'5px'}}>SinglePlayer</Button>
                                    <Button raised primary ripple style={{margin:'5px'}}>Multiplayer</Button>
                                </div>
                            : null}
                        </CardActions>
                    </Card>
                </div>
            </Anime>
        );
    }
}


export default Course;