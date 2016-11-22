import React from 'react';
import { Link } from 'react-router';
import { Card, CardTitle, CardText, CardActions, CardMenu, Button, IconToggle, Icon } from 'react-mdl';
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
    }
}

const Course = (props) => {
    return (
        <Card shadow={0} style={{margin: 'auto' }}>
            <CardTitle expand 
                style={{color: '#fff', cursor: 'pointer', backgroundColor: props.completed ? "#8BC34A" : "#EF5350"}} 
                onClick={()=>console.log('yeah')}
            >
                {props.name}
            </CardTitle>
            <CardMenu>
                <Icon name="star" 
                      style={{color: props.favorite ? 'yellow' : 'grey' , cursor: 'pointer'}} 
                      onClick={()=>console.log('DISPATCH FAVORITE COURSE')}
                />
                {props.completed ?  <Icon name="done" style={{color:'green'}}/> : null }
            </CardMenu>
            <CardActions border style={{textAlign: 'center'}}>
                <span style={styles.courseStat}>
                    WPM:  <span style={styles.wpm}> -- </span>
                </span>
                <span style={styles.courseStat}> 
                    Difficulty: <span style={styles.difficulty}>{props.difficulty}</span> 
                </span>
            </CardActions>
        </Card>
    );
};

export default Course;