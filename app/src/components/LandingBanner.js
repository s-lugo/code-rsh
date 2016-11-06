
import React from 'react';
import { Layout, Header, Navigation, Content, Button } from 'react-mdl';
import { Link } from 'react-router';
import Scroll from 'react-scroll';
import backgroundImage from '../assets/img/landing-background.jpg';

const ScollerLink = Scroll.Link;

const styles = {
    navLink:{
        fontWeight: 500,
        fontSize: '16px',
        cursor: 'pointer',
        textDecoration:'none',
    },
    mainButton:{
        marginTop: '2%',
        width: '200px',
        fontSize: '18px',
        backgroundColor: '#0070D3',
        padding: '10px',
    },
    h1:{
        color:'white',
    },
    p:{
        color:'white',
        fontSize:'24px',
    },
    hr:{
        backgroundColor: '#0070D3',
        height: '3px',
        width: '30%',
        margin: '25px auto',
        border: 0,
    }
}

const LandingBanner = () => (
    <div style={{height: '600px', position: 'relative'}}>
        <Layout style={{background: `url(${backgroundImage}) center / cover`}}>
            <Header transparent title="!" >
                <Navigation >
                    <ScollerLink to="features"  smooth={true} offset={50} duration={500} style={styles.navLink}>Features</ScollerLink>
                    <ScollerLink to="languages" smooth={true} offset={50} duration={500} style={styles.navLink}>Available Languages</ScollerLink>
                    <Link to="login" style={styles.navLink}>Log In</Link>
                    <Link to="#" style={styles.navLink}>Sign Up</Link>
                </Navigation>
            </Header>
            <Content style={{textAlign:'center', marginTop:'5%'}}>
                <h1 style={styles.h1}>CodeFast</h1>
                <hr style={styles.hr}/>
                <p style={styles.p}>Practice your coding speed and battle against your friends!</p>
                <Button raised primary ripple style={styles.mainButton} component={Link} to="home"> GET STARTED </Button>
            </Content>
        </Layout>
    </div>
);

export default LandingBanner;




