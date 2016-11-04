import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class LanguagesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			languages: [],
		};
	}
	componentDidMount(){
		fetch('/api/languages')
			.then((res) => res.json())
			.then((res) => this.setState({languages: res}));
	}
	render() {
		return <div style={{width: '70%', margin: '0 auto', padding: '80px 0px'}}>
        <Grid>
            <Cell col={12} style={{textAlign: 'center'}} >
                <h2> Practice in your favorite languages </h2>
            </Cell>
            {this.state.languages.map( language => <span>{language.name}</span>)}
        </Grid>
    </div>
	}
}

export default LanguagesList;


