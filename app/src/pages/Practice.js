import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, Button, Grid, Cell } from 'react-mdl';

class Practice extends Component{

    constructor(props){
        super(props);
        this.state = {
            languages: [],
        }
    }

    componentDidMount(){
        fetch('/api/languages')
			.then((res) => res.json())
			.then((res) => this.setState({languages: res}));
    }

    renderLanguages(){
        const languages = this.state.languages;
        return languages.map( (language) => (
            <Cell col={6} key={language.name} >
            </Cell>
        ));
    }

    render(){
        return (
            <div style={{width: '70%', margin: '0 auto', padding: '80px 0px'}}>
                <Grid>
                    <Cell col={12} style={{textAlign: 'center'}} >
                        <h2> Select your language </h2>
                    </Cell>
                    {this.renderLanguages()}
                </Grid>
            </div>
        )
    }
}

export default Practice;
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