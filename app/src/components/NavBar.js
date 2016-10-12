import React from 'react';
import { Layout, Header, Navigation, Content } from 'react-mdl';

const NavBar = () => (
	<div style={{height: '300px', position: 'relative'}}>
		<Layout >
				<Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
						<Navigation>
								<a href="">Link</a>
								<a href="">Link</a>
								<a href="">Link</a>
								<a href="">Link</a>
						</Navigation>
				</Header>
				<Content />
		</Layout>
	</div>
);

export default NavBar;