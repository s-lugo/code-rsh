import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Logos from '../assets/img/index.js';

let styles = {
	img:{
		width:'40%',
		paddingTop:'15px',
	}
}

class LanguagesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			languages: []
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
            {this.state.languages.map( language => 
				<Cell col={4} style={{textAlign: 'center'}} key={language.name}>
					<img style={styles.img} src={Logos[`${language.name}-logo`]} alt={`${language.name} Logo`} />
				</Cell>
			)}
        </Grid>
    </div>
	}
}

export default LanguagesList;