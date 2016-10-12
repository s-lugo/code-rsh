import React from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';

const Container = (props) => (
	<div>
		<NavBar />
		{props.children}
		<Footer />
	</div>
);

export default Container;
