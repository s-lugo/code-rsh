import React from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, Button } from 'react-mdl';
import { Link } from 'react-router';
import Logos from '../assets/img/index.js';

let styles = {
    logo:{
        width: '170px',
        height: '170px',
    },
    link:{
        fontWeight: 500,
        fontSize: '16px',
        cursor: 'pointer',
        textDecoration:'none',
    },
}

const Language = (props) => {
    return (
    <Card shadow={1} style={{width: '80%', margin: 'auto'}}>
        <div>
            <img style={styles.logo} src={Logos[`${props.name}-logo`]} />
        </div>
        <CardText>
            <span>{`0/${props.courses.length} Courses Completed`}</span>
        </CardText>
        <CardActions border>
            <Button colored onClick={()=>props.selectLanguage(props.name)}><Link to={`/practice/${props.name}`} style={styles.link}>Select {props.name}</Link></Button>
        </CardActions>
    </Card> 
);
}

export default Language;