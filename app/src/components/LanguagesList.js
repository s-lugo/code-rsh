import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, Button, Grid, Cell } from 'react-mdl';

class LanguagesList extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.actions.fetchLanguages();
    }

    renderLanguages(){

    }

    render(){
        return <div></div>;
    }
}

export default LanguagesList;

/*
<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
*/