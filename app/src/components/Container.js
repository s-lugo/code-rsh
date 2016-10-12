import React from 'react';
import NavBar from './NavBar.js';

const Container = (props) => (
	<div>
		<NavBar />
		{props.children}
	</div>
);

export default Container;
