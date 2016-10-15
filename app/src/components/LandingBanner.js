import React from 'react';
import { Layout, Header, Navigation, Content, Button } from 'react-mdl';
import { Link } from 'react-router';
import backgroundImage from '../assets/img/landing-background.jpg';

const LandingBanner = () => (
    <div style={{height: '400px', position: 'relative'}}>
        <Layout style={{background: `url(${backgroundImage}) center / cover`}}>
            <Header transparent title="Title" style={{color: 'orange'}}>
                <Navigation >
                    <Link to="#">Log In</Link>
                    <Link to="#">Sign In</Link>
                </Navigation>
            </Header>
            <Content style={{textAlign:'center'}}>
                <Button raised accent ripple>Button</Button>
            </Content>
        </Layout>
    </div>
);

export default LandingBanner;
