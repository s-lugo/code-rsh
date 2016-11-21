import React from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, Button } from 'react-mdl';

const backgrounds = {
    Ruby: '#D50000',
    Javascript: '#FBC02D',
    Java: '#512DA8',
    Haskell: '#607D8B',
    Python: '#1976D2',
    PHP:'#5C6BC0',
}

const CourseBanner = (props) => {
    console.log(props);
    return (
        <Card shadow={0} style={{width: '70%', margin: 'auto'}}>
            <CardTitle expand style={{color: '#fff', backgroundColor: backgrounds[props.language] }}>{props.language}</CardTitle>
            <CardText>
                ${"{available}"} Courses Available
                ${"{Copmleted}"}Courses Completed
            </CardText>
        </Card>
    );
};

export default CourseBanner;