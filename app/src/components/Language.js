import React from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, Button, ProgressBar } from 'react-mdl';
import { Link } from 'react-router';
import Logos from '../assets/img/index.js';

let styles = {
    logo:{
        width: '150px',
        height: '150px',
    },
    span:{
        fontSize: '20px',
    },
    link:{
        fontWeight: 500,
        fontSize: '16px',
        cursor: 'pointer',
        textDecoration:'none',
    },
}

const backgrounds = {
    Ruby: '#B71C1C',
    Javascript: '#FBC02D',
    Java: '#512DA8',
    Haskell: '#607D8B',
    Python: '#1976D2',
    PHP:'#5C6BC0',
}

const Language = (props) => {
    return (
        <Card shadow={1} style={{width: '80%', margin: 'auto'}}>
            <CardTitle expand style={{color: '#fff', backgroundColor: backgrounds[props.name] }}>
                <div style={{margin: '0 auto'}}>
                    <img style={styles.logo} src={Logos[`${props.name}-logo`]} />
                </div>
            </CardTitle>
            <CardActions border>
                <Button colored onClick={()=>props.selectLanguage(props.name)}><Link to={`/practice/${props.name}`} style={styles.link}>{props.name}</Link></Button>
            </CardActions>
            <CardText>
                <span style={styles.span}>{`0/${props.courses.length} Courses Completed`}</span>
                <ProgressBar progress={44} />
            </CardText>
        </Card> 
    );
}

export default Language;