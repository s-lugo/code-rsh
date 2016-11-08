import React from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';

const Container = (props) => {
	let children = null;
    if(props.children){
        children = React.cloneElement(props.children, {
            auth: props.auth,
        })
    }
	return <div>
		<NavBar />
		{children}
		<Footer />
	</div>
};

export default Container;