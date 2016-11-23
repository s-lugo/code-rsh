import React from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, Button, ProgressBar } from 'react-mdl';

const backgrounds = {
    Ruby: '#B71C1C',
    Javascript: '#FBC02D',
    Java: '#512DA8',
    Haskell: '#607D8B',
    Python: '#1976D2',
    PHP:'#5C6BC0',
}

let styles = {
    span:{
        fontSize: '20px',
    },
}

const CourseBanner = (props) => {
    return (
        <Card shadow={0} style={{width: '70%', margin: 'auto', margin: '15px auto'}}>
            <CardTitle expand style={{color: '#fff', backgroundColor: backgrounds[props.language] }}>{props.language}</CardTitle>
            <CardText style={{textAlign:'center'}}>
                <span style={styles.span}>{`0/${props.courses.length} Courses Completed`}</span>
                <ProgressBar style={{margin:'0 auto'}} progress={44} />
            </CardText>
        </Card>
    );
};

export default CourseBanner;