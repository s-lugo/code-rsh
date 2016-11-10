import React from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, Button } from 'react-mdl';
import Logos from '../assets/img/index.js';

let styles = {
    logo:{
        width: '170',
        height: '170',
    },
}

const Language = (props) => (
    <Card shadow={1} style={{width: '80%', margin: 'auto'}}>
        <div>
            <img style={styles.logo} src={Logos[`${props.name}-logo`]} />
        </div>
        <CardText>
            <span>0/10 Courses Completed</span>
        </CardText>
        <CardActions border>
            <Button colored>Select {props.name}</Button>
        </CardActions>
    </Card> 
);

export default Language;